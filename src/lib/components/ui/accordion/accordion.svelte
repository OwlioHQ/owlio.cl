<script lang='ts'>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';
	import { untrack } from 'svelte';
	import { CaretDown } from '$lib/components/icons';

	import { Collapsible } from '../collapsible';

	import { get_accordion_ctx } from './context';

	interface Props extends HTMLAttributes<HTMLElement> {
		open?: boolean;
		heading: Snippet;
		content: Snippet;
	}

	let {
		open = $bindable(false),
		heading,
		content,
		class: class_name,
		...rest
	}: Props = $props();

	const accordion_id = $props.id();

	let opened_accordion_id = get_accordion_ctx();

	$effect(() => {
		if (!opened_accordion_id)
			return;

		untrack(() => {
			if (opened_accordion_id.current === '') {
				opened_accordion_id.current = accordion_id;
			}
		});

		open = opened_accordion_id.current === accordion_id;
	});

	function handle_accordion_toggle() {
		if (!opened_accordion_id) {
			open = !open;
			return;
		}

		if (opened_accordion_id.current === accordion_id) {
			opened_accordion_id.current = '';
			return;
		}

		opened_accordion_id.current = accordion_id;
	}
</script>

<div class={cn('border-b border-b-muted-foreground', class_name)} {...rest}>
	<button
		class='group flex w-full cursor-pointer items-center justify-between gap-x-6'
		onclick={handle_accordion_toggle}
		type='button'
	>
		<div
			class='min-h-16 content-center text-sm font-medium group-hover:underline group-hover:decoration-2 group-hover:underline-offset-2 sm:text-base md:text-lg'
		>
			{@render heading()}
		</div>

		<span>
			<CaretDown
				class={`${open ? 'rotate-180' : 'rotate-0'} size-4 transition-transform md:size-5`}
			/>
		</span>
	</button>

	<Collapsible
		class='pb-4 text-xs text-muted sm:text-sm md:text-base'
		bind:open
	>
		{@render content()}
	</Collapsible>
</div>
