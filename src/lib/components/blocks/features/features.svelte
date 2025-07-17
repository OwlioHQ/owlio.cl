<script lang='ts'>
	import type { ComponentProps } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import Key from 'phosphor-svelte/lib/Key';
	import Alarm from 'phosphor-svelte/lib/Alarm';
	import BookOpen from 'phosphor-svelte/lib/BookOpen';
	import PencilSimpleLine from 'phosphor-svelte/lib/PencilSimpleLine';
	import ArrowsCounterClockwise from 'phosphor-svelte/lib/ArrowsCounterClockwise';

	import { cn } from '$lib/utils';
	import { FeatureItem } from '$lib/components/ui';

	type FeatureItemProps = ComponentProps<typeof FeatureItem>;

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: class_name, ...rest }: Props = $props();

	const features = [
		{
			icon: {
				component: PencilSimpleLine,
				background: 'bg-purple-100',
				stroke: 'fill-purple-700',
			},
			title: 'Lorem ipsum',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum quidem. Aut itaque nostrum fugiat eveniet beatae odio unde magnam, adipisci saepe voluptatibus. Itaque similique dicta aut? Quia, fuga neque.',
		},
		{
			icon: {
				component: BookOpen,
				background: 'bg-blue-100',
				stroke: 'fill-blue-700',
			},
			title: 'Lorem ipsum',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum quidem. Aut itaque nostrum fugiat eveniet beatae odio unde magnam, adipisci saepe voluptatibus. Itaque similique dicta aut? Quia, fuga neque.',
		},
		{
			icon: {
				component: ArrowsCounterClockwise,
				background: 'bg-red-100',
				stroke: 'fill-red-700',
			},
			title: 'Lorem ipsum',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum quidem. Aut itaque nostrum fugiat eveniet beatae odio unde magnam, adipisci saepe voluptatibus. Itaque similique dicta aut? Quia, fuga neque.',
		},
		{
			icon: {
				component: Key,
				background: 'bg-orange-100',
				stroke: 'fill-orange-700',
			},
			title: 'Lorem ipsum',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum quidem. Aut itaque nostrum fugiat eveniet beatae odio unde magnam, adipisci saepe voluptatibus. Itaque similique dicta aut? Quia, fuga neque.',
		},
		{
			icon: {
				component: Alarm,
				background: 'bg-green-100',
				stroke: 'fill-green-700',
			},
			title: 'Lorem ipsum',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum quidem. Aut itaque nostrum fugiat eveniet beatae odio unde magnam, adipisci saepe voluptatibus. Itaque similique dicta aut? Quia, fuga neque.',
		},
	] satisfies FeatureItemProps[];
</script>

<section class={cn('isolate size-full', class_name)} {...rest}>
	<div class='px-[var(--section-padding-x)] py-[var(--section-padding-y)]'>
		<div class='flex flex-col gap-y-20'>
			<div class='mx-auto w-2/3 text-center'>
				<h2 class='text-5xl leading-loose font-bold text-text-primary'>
					Lorem ipsum, dolor sit
				</h2>
				<p class='text-lg leading-snug text-balance'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Necessitatibus repellat asperiores aut in quis ipsa ut
					quibusdam, harum, praesentium, aperiam inventore. Iusto, sed?
					Harum, nam quod perferendis nihil minus quia.
				</p>
			</div>
			<div
				class='grid grid-cols-2 place-content-center items-center gap-24'
			>
				<div class='space-y-10'>
					{#each features as feature (feature.icon)}
						<FeatureItem {...feature} />
					{/each}
				</div>
				<div class='aspect-square rounded-2xl bg-separator'>
					<!-- -->
				</div>
			</div>
		</div>
	</div>
</section>
