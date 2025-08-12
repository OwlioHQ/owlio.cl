<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAnchorAttributes {
		children: Snippet;
	}

	let { children, class: class_name, href = '#', ...rest }: Props = $props();
</script>

<a
	class={cn(
		'group inline-block cursor-pointer whitespace-nowrap outline-none focus-within:underline focus-within:underline-offset-2 hover:underline hover:underline-offset-2',
		class_name,
	)}
	{href}
	referrerpolicy='no-referrer'
	target='_blank'
	{...rest}
>
	{@render children()}
</a>
