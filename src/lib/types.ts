import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

export type Awaitable<T> = T | Promise<T>;

export type MaybePromise<T> = (T | Promise<T>);

export interface ProxiedValue<T = any> { current: T }

export interface NavItem {
	label: string;
	href: string;
}

export type Picture = Exclude<EnhancedImgAttributes['src'], string>;

export interface SelectOption {
	label: string | null;
	value: string | number | boolean | null;
	selected?: boolean | undefined;
}

export type SelectOptions = SelectOption[];
