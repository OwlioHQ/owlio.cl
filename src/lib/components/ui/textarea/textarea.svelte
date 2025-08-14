<script lang='ts'>
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLTextareaAttributes {}

	let { value = $bindable(), class: class_name, ...rest }: Props = $props();
</script>

<textarea
	class={cn(
		'block w-full resize-none rounded-md border border-muted bg-background px-3 py-1.5 text-sm ring-offset-background placeholder:text-muted read-only:cursor-not-allowed read-only:bg-muted read-only:text-muted read-only:ring-offset-muted read-only:select-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:outline-none',
		class_name,
	)}
	rows={3}
	{...rest}
	bind:value
></textarea>
