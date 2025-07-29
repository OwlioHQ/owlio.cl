<script lang='ts'>
	import type { ComponentProps } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import Key from 'phosphor-svelte/lib/Key';
	import Code from 'phosphor-svelte/lib/Code';
	import Alien from 'phosphor-svelte/lib/Alien';
	import Plugs from 'phosphor-svelte/lib/Plugs';
	import Robot from 'phosphor-svelte/lib/Robot';

	import { cn } from '$lib/utils';
	import { FeatureItem, LogoSlider } from '$lib/components/ui';

	type FeatureItemProps = ComponentProps<typeof FeatureItem>;

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: class_name, ...rest }: Props = $props();

	const features = [
		{
			title: 'Integraciones de software',
			description:
				'Integramos tus sistemas y aplicaciones para que funcionen sincronizados, facilitando el flujo de datos clave. Nuestras soluciones escalables aumentan la productividad, reducen errores y aceleran la toma de decisiones. (+ 400 apps)',
			icon: {
				component: Plugs,
				background: 'bg-purple-100',
				stroke: 'fill-purple-700',
			},
		},
		{
			title: 'Automatización de tareas',
			description:
				'Implementamos soluciones que eliminan trabajos manuales repetitivos, reduciendo errores humanos y mejorando los tiempos operativos, permitiendo que tu equipo dedique mayor tiempo a tareas de valor.',
			icon: {
				component: Robot,
				background: 'bg-blue-100',
				stroke: 'fill-blue-700',
			},
		},
		{
			title: 'Desarrollo de aplicaciones web',
			description:
				'Creamos soluciones web a medida que se adaptan a las necesidades específicas de tu negocio, con un diseño intuitivo, alto rendimiento y escalabilidad. Desde sitios corporativos hasta aplicaciones complejas.',
			icon: {
				component: Code,
				background: 'bg-red-100',
				stroke: 'fill-red-700',
			},
		},
		{
			title: 'API & Microservicios',
			description:
				'Diseñamos arquitecturas modulares que mejoran la lectura, procesamiento y transferencia de datos entre distintos sistemas distribuidos, mejorando la interoperabilidad y escalabilidad entre microservicios.',
			icon: {
				component: Key,
				background: 'bg-orange-100',
				stroke: 'fill-orange-700',
			},
		},
		{
			title: 'Análisis de datos & Business intelligence',
			description:
				'Ofrecemos soluciones basadas en análisis de datos que transforman tu información en oportunidades. Analizamos KPIs clave para ayudarte a identificar áreas de mejora y potenciar una toma de decisiones más informada.',
			icon: {
				component: Alien,
				background: 'bg-green-100',
				stroke: 'fill-green-700',
			},
		},
	] satisfies FeatureItemProps[];
</script>

<section class={cn('isolate size-full', class_name)} {...rest}>
	<div class='px-[var(--section-padding-x)] py-[var(--section-padding-y)]'>
		<div class='flex flex-col gap-y-20'>
			<div class='mx-auto text-center md:w-2/3'>
				<h2
					class='pb-6 text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl'
				>
					Nuestros Servicios
				</h2>
				<p class='text-lg leading-snug text-balance'>
					Desarrollamos plataformas y herramientas a medida, basadas
					en los datos relevantes de tu empresa para potenciar tu
					marketing, mejorar tus ventas e impulsa el crecimiento de tu
					negocio.
				</p>
			</div>
			<div
				class='grid grid-cols-1 place-content-center items-center gap-20 lg:grid-cols-2'
			>
				<div class='space-y-10'>
					{#each features as feature (feature.icon)}
						<FeatureItem {...feature} />
					{/each}
				</div>

				<!-- Logos -->
				<div
					class='aspect-square overflow-hidden'
				>
					<LogoSlider />
				</div>
			</div>
		</div>
	</div>
</section>
