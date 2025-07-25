<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Component, ComponentProps } from 'svelte';

	import NumberOne from 'phosphor-svelte/lib/NumberOne';
	import NumberTwo from 'phosphor-svelte/lib/NumberTwo';
	import NumberThree from 'phosphor-svelte/lib/NumberThree';

	import { cn } from '$lib/utils';
	import { Card } from '$lib/components/ui';

	type CardProps = Omit<ComponentProps<typeof Card>, 'image' | 'class'> & {
		image: Component;
	};

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: class_name, ...rest }: Props = $props();

	const items: CardProps[] = [
		{
			title: 'Conecta con nosotros',
			description:
				'Evalúa tu situación en detalle y obtén retroalimentación inmediata sobre tus posibles oportunidades de mejora.',
			image: NumberOne,
		},
		{
			title: 'Propuesta & Desarrollo',
			description:
				'Desarrollamos una propuesta personalizada que responde a tus objetivos y necesidades. Manteniendote participativo durante cada proceso.',
			image: NumberTwo,
		},
		{
			title: 'Entrega & Acompañamiento',
			description:
				'Finalizado el desarrollo, realizaremos la entrega del producto para ser utilizado por tu empresa y/o clientes.',
			image: NumberThree,
		},
	];
</script>

<section class={cn('isolate size-full', class_name)} {...rest}>
	<div
		class='space-y-16 px-[var(--section-padding-x)] py-[var(--section-padding-y)]'
	>
		<div class='mx-auto max-w-3/5 text-center'>
			<h2 class='text-5xl leading-loose font-bold text-text-primary'>
				¿Cómo es trabajar con nosotros?
			</h2>
			<p class='text-lg leading-snug text-balance'>
				Trabajamos de la mano contigo en cada etapa del proyecto, asegurando transparencia, comunicación constante y resultados que superen tus expectativas.
			</p>
		</div>
		<div class='relative flex items-start justify-between'>
			{#each items as item}
				{@const Icon = item.image}
				<Card
					class='z-2 max-w-80 place-items-center border-none text-center'
					description={item.description}
					title={item.title}
				>
					{#snippet image()}
						<div class='size-16 rounded-full bg-primary-600 p-4'>
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
