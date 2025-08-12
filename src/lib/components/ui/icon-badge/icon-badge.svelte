<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLElement> {
		children: Snippet;
	}

	let { children, class: class_name, ...rest }: Props = $props();
</script>

<div
	class={cn(
		'aspect-square size-10 content-center rounded-full bg-accent *:mx-auto *:size-1/2 *:align-middle *:text-background sm:size-12 md:size-14 lg:size-16',
		class_name,
	)}
	{...rest}
>
	{@render children()}
</div>
