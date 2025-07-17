export type Awaitable<T> = T | Promise<T>;

export interface ProxiedValue<T = any> { current: T }

export interface NavItem {
	label: string;
	href: string;
}

export type TailwindCSSFillColor = `fill-${string}-${number}` | `fill-${string}`;
export type TailwindCSSBackgroundColor = `bg-${string}-${number}` | `bg-${string}`;
