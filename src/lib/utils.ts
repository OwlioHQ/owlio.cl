import type { ClassValue } from 'clsx';
import type { MaybePromise, Awaitable } from '$lib/types';

import { z } from 'zod';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function interop_default<T>(module: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
	const resolved = await module;
	return (resolved as any).default || resolved;
}

type InferHandler<TSchema extends z.ZodType> = (data: z.infer<TSchema>) => MaybePromise<any>;

type TResult<TSchema extends z.ZodType, THandler> = Promise<
    (THandler extends (...args: any[]) => infer R ? Awaited<R> : never) & { errors?: Partial<Record<keyof z.infer<TSchema>, string>> }
>;

export function validate_form<
	TSchema extends z.ZodType,
	THandler extends InferHandler<TSchema>,
>(
	schema: TSchema,
	handler: THandler,
): (form_data: FormData) => TResult<TSchema, THandler> {
	return async (form_data: FormData) => {
		const { success, error, data } = schema.safeParse(Object.fromEntries(form_data));
		if (!success) {
			return {
				errors: zod_error_formatter(error),
			} as any;
		}
		const result = await handler(data);
		return { ...result, errors: undefined };
	};
}

export function zod_error_formatter<TSchema extends z.ZodType, TOutput = Partial<Record<keyof z.infer<TSchema>, string>>>(
	error: z.ZodError<z.output<TSchema>>,
): TOutput {
	const errors = {} as TOutput;
	const field_errors = z.flattenError(error).fieldErrors;
	for (const [key, value] of Object.entries(field_errors)) {
		// @ts-expect-error - fuck zod types
		errors[key] = (value as string[]).at(0);
	}
	return errors;
}
