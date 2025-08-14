<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLElement> {
		children: Snippet;
	}

	const { children, class: class_name, ...rest }: Props = $props();
</script>

<div class={cn('space-y-2 rounded-md py-3', class_name)} {...rest}>
	{@render children()}
</div>
