<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Component, ComponentProps } from 'svelte';

	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import SquaresFour from 'phosphor-svelte/lib/SquaresFour';

	import { cn } from '$lib/utils';
	import { Button, Card } from '$lib/components/ui';

	type CardProps = Omit<ComponentProps<typeof Card>, 'image'> & { image: Component };

	interface Props extends HTMLAttributes<HTMLElement> {};

	let { class: class_name, ...rest }: Props = $props();

	const items: CardProps[] = [
		{
			image: SquaresFour,
			title: 'Lorem ipsum',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatem ad quasi architecto repudiandae eius. Vero omnis officiis deserunt quasi.',
		},
		{
			image: SquaresFour,
			title: 'Lorem ipsum',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatem ad quasi architecto repudiandae eius. Vero omnis officiis deserunt quasi.',
		},
		{
			image: SquaresFour,
			title: 'Lorem ipsum',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatem ad quasi architecto repudiandae eius. Vero omnis officiis deserunt quasi.',
		},
		{
			image: SquaresFour,
			title: 'Lorem ipsum',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatem ad quasi architecto repudiandae eius. Vero omnis officiis deserunt quasi.',
		},
	];
</script>

<section class={cn('isolate size-full', class_name)} {...rest}>
	<div
		style="grid-template-areas: 'container'"
		class='isolate grid size-full overflow-hidden'
	>
		<div
			style='grid-area: container'
			class='z-3 grid size-full place-items-center items-center justify-center'
		>
			<div class='grid grid-rows-2 place-items-center gap-y-16 px-[var(--section-padding-x)] py-[var(--section-padding-y)]'>
				<div class='w-4/5 space-y-12 text-center'>
					<div class='space-y-8'>
						<h1 class='text-5xl leading-snug font-bold text-balance text-text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto voluptatem assumenda tempora</h1>

						<p class='text-lg text-balance'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatem ad quasi architecto repudiandae eius. Vero omnis officiis deserunt quasi. Ipsum quas rem architecto cumque fugiat non at modi sint?
						</p>
					</div>

					<div class='flex items-center justify-center'>
						<Button class='px-8'>
							<span>
								Lorem ipsum
							</span>
							<ArrowRight />
						</Button>
					</div>
				</div>

				<div class='flex gap-x-12'>
					{#each items as item}
						{@const Icon = item.image}
						<Card description={item.description} title={item.title}>
							{#snippet image()}
								<div class='w-fit rounded-md bg-separator p-2'>
									<Icon class='size-8' />
								</div>
							{/snippet}
						</Card>
					{/each}
				</div>
			</div>
		</div>

		<!-- Background image -->
		<div
			style='grid-area: container'
			class='z-1 h-full overflow-hidden bg-separator'
		>
		</div>
	</div>
</section>
