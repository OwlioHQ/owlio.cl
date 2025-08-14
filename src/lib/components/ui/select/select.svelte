<script lang='ts'>
	import type { SelectOptions } from '$lib/types';
	import type { HTMLSelectAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLSelectAttributes {
		value?: string | number | boolean | null;
		placeholder?: string | null;
		options: SelectOptions;
	}

	let {
		options,
		placeholder,
		class: class_name,
		value = $bindable(),
		...rest
	}: Props = $props();

	const has_default_value = options.some(
		option => 'selected' in option && option.selected === true,
	);
</script>

<select
	class={cn(
		'flex h-10 w-full rounded-md border border-muted bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:outline-none disabled:cursor-auto disabled:bg-muted disabled:text-muted disabled:ring-offset-transparent disabled:select-none disabled:focus-within:ring-transparent',
		placeholder && value === undefined ? 'text-muted' : '',
		class_name,
	)}
	{...rest}
	bind:value
>
	{#if placeholder}
		<option disabled selected={!has_default_value} value={undefined}
		>{placeholder}</option
		>
	{/if}

	{#each options as { label, value, selected } (label)}
		<option {selected} {value}>{label}</option>
	{/each}
</select>
