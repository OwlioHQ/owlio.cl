export type Awaitable<T> = T | Promise<T>;

export interface ProxiedValue<T = any> { current: T }

export interface NavItem {
	label: string;
	href: string;
}
