<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLLabelAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLLabelAttributes {
		children: Snippet;
		optional?: boolean;
	}

	const { children, optional, class: class_name, ...rest }: Props = $props();
</script>

<label
	class={cn(
		'text-base font-medium whitespace-nowrap peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
		`${optional ? 'flex items-center justify-between' : 'block'}`,
		class_name,
	)}
	{...rest}
>
	{@render children()}

	{#if optional}
		<small class='pr-1.5 font-normal text-muted-foreground italic'
		>Opcional</small
		>
	{/if}
</label>
