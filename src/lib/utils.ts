import type { ClassValue } from 'clsx';
import type { Awaitable } from './types';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function interop_default<T>(module: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
	const resolved = await module;
	return (resolved as any).default || resolved;
}
