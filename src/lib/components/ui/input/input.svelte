<script lang='ts'>
	import type { HTMLInputAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLInputAttributes {}

	let { value = $bindable(), class: class_name, ...rest }: Props = $props();
</script>

<input
	{...rest}
	class={cn(
		'block h-10 w-full rounded-md border border-muted bg-background px-3 text-sm ring-offset-background placeholder:text-muted read-only:cursor-auto read-only:bg-muted read-only:text-muted read-only:select-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:outline-none read-only:focus-within:ring-transparent',
		class_name,
	)}
	bind:value
/>
