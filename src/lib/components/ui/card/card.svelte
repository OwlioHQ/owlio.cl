<script lang='ts'>
	import type { Snippet } from 'svelte';

	import { cn } from '$lib/utils';

	interface Props {
		image: Snippet;
		title: string;
		description?: string;
		class?: string;
	}

	let { image, title, description, class: class_name }: Props = $props();
</script>

<div class={cn('flex flex-col gap-4 overflow-hidden rounded-xl border border-separator bg-background-primary p-6', class_name)}>
	<div>
		{@render image()}
	</div>

	<div>
		<span class='text-xl leading-loose font-semibold text-text-primary'>{title}</span>
		{#if description}
			<p class='text-base leading-snug text-pretty'>{description}</p>
		{/if}
	</div>
</div>
