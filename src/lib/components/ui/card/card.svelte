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

<!-- TODO: Add xl variant -->
<div class={cn('flex flex-col gap-4 overflow-hidden rounded-xl border border-muted-foreground bg-background p-(--content-x-spacing)', class_name)}>
	<div>
		{@render image()}
	</div>

	<hgroup class='space-y-4'>
		<h3 class='text-xl leading-tight font-semibold'>{title}</h3>
		{#if description}
			<p class='text-base leading-snug text-pretty text-muted'>{description}</p>
		{/if}
	</hgroup>
</div>
