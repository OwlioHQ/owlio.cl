<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLElement> {
		children: Snippet;
	}

	let { children, class: class_name, ...rest }: Props = $props();
</script>

<small class={cn('-mt-1 block pl-1.5 text-xs text-destructive', class_name)} {...rest}>
	{@render children()}
</small>
