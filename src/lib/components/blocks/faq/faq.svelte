<script lang='ts'>
	import type { ComponentProps } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import Question from 'phosphor-svelte/lib/Question';

	import { cn } from '$lib/utils';
	import { FeatureItem } from '$lib/components/ui';

	type FeatureItemProps = ComponentProps<typeof FeatureItem>;

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: class_name, ...rest }: Props = $props();

	const items = [
		{
			icon: Question,
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quis esse aliquid officia rerum sint, officiis veritatis laudantium deleniti quos aspernatur. Debitis natus ipsa eveniet pariatur enim ea obcaecati voluptatum?',
		},
		{
			icon: Question,
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quis esse aliquid officia rerum sint, officiis veritatis laudantium deleniti quos aspernatur. Debitis natus ipsa eveniet pariatur enim ea obcaecati voluptatum?',
		},
		{
			icon: Question,
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quis esse aliquid officia rerum sint, officiis veritatis laudantium deleniti quos aspernatur. Debitis natus ipsa eveniet pariatur enim ea obcaecati voluptatum?',
		},
		{
			icon: Question,
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quis esse aliquid officia rerum sint, officiis veritatis laudantium deleniti quos aspernatur. Debitis natus ipsa eveniet pariatur enim ea obcaecati voluptatum?',
		},
	] satisfies FeatureItemProps[];
</script>

<section class={cn('isolate size-full', class_name)} {...rest}>
	<div
		class='grid grid-rows-[auto_1fr_auto] gap-16 px-[var(--section-padding-x)] py-[var(--section-padding-y)]'
	>
		<div class='mx-auto max-w-3/5 text-center'>
			<h2 class='text-5xl leading-loose font-bold text-text-primary'>
				Questions & Answers
			</h2>
			<p class='text-lg leading-snug text-balance'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Sapiente architecto qui, labore obcaecati delectus facere.
				Nesciunt quo earum debitis! Minus, officiis. Qui quibusdam fugit
				tenetur nostrum quo pariatur velit repellendus!
			</p>
		</div>
		<div class='grid grid-cols-2 grid-rows-2 gap-16'>
			{#each items as item}
				<FeatureItem {...item} />
			{/each}
		</div>
		<div class='mx-auto max-w-3/5 py-4'>
			<div class='h-10 content-center rounded-full bg-separator px-16'>
				<span class='text-base font-medium text-text-primary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
			</div>
		</div>
	</div>
</section>
