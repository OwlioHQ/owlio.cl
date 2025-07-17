<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	import { base_style } from './props';

	type ButtonOrLinkProps = | (HTMLButtonAttributes & { href?: never }) | (HTMLAnchorAttributes & { href: string });

	type Props = {
		children: Snippet;
	} & ButtonOrLinkProps;

	const { children, class: class_name, ...props }: Props = $props();
</script>

{#if 'href' in props && props.href !== undefined && props.href !== null}
	<a
		class={cn(
			base_style,
			class_name,
		)}
		{...props}
	>
		{@render children()}
	</a>
{:else}
	<button
		class={cn(
			base_style,
			class_name,
		)}
		type='button'
		{...props}
	>
		{@render children()}
	</button>
{/if}
