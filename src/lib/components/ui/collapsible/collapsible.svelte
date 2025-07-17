<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';
	import { slide } from 'svelte/transition';

	interface Props extends HTMLAttributes<HTMLElement> {
		open: boolean;
		children: Snippet;
	}

	let {
		open = $bindable(false),
		children,
		class: class_name,
		...rest
	}: Props = $props();
</script>

{#if open}
	<div class={cn('', class_name)} {...rest} transition:slide={{ axis: 'y' }}>
		{@render children()}
	</div>
{/if}
