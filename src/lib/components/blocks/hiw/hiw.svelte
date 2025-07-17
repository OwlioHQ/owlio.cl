<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Component, ComponentProps } from 'svelte';

	import Sliders from 'phosphor-svelte/lib/Sliders';

	import { cn } from '$lib/utils';
	import { Card } from '$lib/components/ui';

	type CardProps = Omit<ComponentProps<typeof Card>, 'image' | 'class'> & {
		image: Component;
	};

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: class_name, ...rest }: Props = $props();

	const items: CardProps[] = [
		{
			image: Sliders,
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit error aspernatur impedit rem, aliquid deserunt',
		},
		{
			image: Sliders,
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit error aspernatur impedit rem, aliquid deserunt',
		},
		{
			image: Sliders,
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit error aspernatur impedit rem, aliquid deserunt',
		},
		{
			image: Sliders,
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit error aspernatur impedit rem, aliquid deserunt',
		},
	];
</script>

<section class={cn('isolate size-full', class_name)} {...rest}>
	<div
		class='space-y-12 px-[var(--section-padding-x)] py-[var(--section-padding-y)]'
	>
		<div class='mx-auto max-w-3/5 text-center'>
			<h2 class='text-5xl leading-loose font-bold text-text-primary'>
				How it works
			</h2>
			<p class='text-lg leading-snug text-balance'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
				reprehenderit error aspernatur impedit rem, aliquid deserunt.
				Doloribus explicabo sint autem saepe ullam, perspiciatis qui, at
				necessitatibus ab magnam cupiditate placeat!
			</p>
		</div>
		<div class='relative flex items-center justify-between'>
			{#each items as item}
				{@const Icon = item.image}
				<Card
					class='z-2 max-w-80 place-items-center border-none text-center'
					description={item.description}
					title={item.title}
				>
					{#snippet image()}
						<div class='size-16 rounded-full bg-primary-600 p-4.5'>
							<Icon class='size-full fill-background-primary' />
						</div>
					{/snippet}
				</Card>
			{/each}

			<div
				style='
					background-image: repeating-linear-gradient(
					to right,
					currentColor 0px,
					currentColor 8px,
					transparent 8px,
					transparent 16px
					);
				'
				class='absolute top-[50%] left-0 h-[2px] w-full text-primary-600'
			></div>
		</div>
	</div>
</section>
