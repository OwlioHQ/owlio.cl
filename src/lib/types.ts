import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

export type Awaitable<T> = T | Promise<T>;

export interface ProxiedValue<T = any> { current: T }

export interface NavItem {
	label: string;
	href: string;
}

export type Picture = Exclude<EnhancedImgAttributes['src'], string>;
