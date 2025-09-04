import type { SelectOptions } from './types';

import { Alien, Code, Crosshair, EnvelopeSimple, FacebookLogo, InstagramLogo, Key, LinkedinLogo, NumberOne, NumberThree, NumberTwo, PiggyBank, Plugs, Robot, RocketLaunch, Sparkle, TrendUp, XLogo } from '$lib/components/icons';

export const socials = [
	{
		label: 'Mail',
		icon: EnvelopeSimple,
		href: 'mailto:owlio.contacto@gmail.com',
	},
	{
		label: 'X',
		icon: XLogo,
		href: 'https://x.com/owlio_cl',
	},
	{
		label: 'Instagram',
		icon: InstagramLogo,
		href: 'https://www.instagram.com/owlio_cl/?hl=es',
	},
	{
		label: 'Facebook',
		icon: FacebookLogo,
		href: 'https://web.facebook.com/profile.php?id=61578924622725',
	},
	{
		label: 'Linkedin',
		icon: LinkedinLogo,
		href: 'https://www.linkedin.com/company/owliocompany',
	},
];

export const hero_card_items = [
	{
		image: RocketLaunch,
		title: 'Aumenta la productividad',
		description:
				'Optimiza procesos, automatiza tareas y acelera tu flujo de trabajo con herramientas inteligentes.',
	},
	{
		image: PiggyBank,
		title: 'Reduce costos operativos',
		description:
				'Minimiza gastos y ahorra recursos con tecnologías de vanguardia, sin comprometer la calidad.',
	},
	{
		image: Crosshair,
		title: 'Elimina el error humano',
		description:
				'Automatiza tus procesos, garantizando resultados consistentes entre tus operaciones.',
	},
	{
		image: TrendUp,
		title: 'Impulsa tu negocio',
		description:
				'Acelera el crecimiento de tu empresa con soluciones escalables que te potencien en el mercado.',
	},
];

export const features = [
	{
		title: 'Integración de Sistemas y APIs',
		description:
				'Integramos tus sistemas y aplicaciones para que funcionen sincronizados, facilitando el flujo de datos clave. Nuestras soluciones escalables aumentan la productividad, reducen errores y aceleran la toma de decisiones.',
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
		title: 'Aplicaciones Web Empresariales',
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
];

export const steps = [
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

export const questions = [
	{
		title: '¿Cómo integramos con tus sistemas existentes?',
		description:
				'Adaptamos nuestras soluciones a tu infraestructura actual mediante aplicaciones y APIs. No necesitas reescribir ni migrar sistemas; trabajamos sobre lo que ya tienes.',
	},
	{
		title: '¿En cuánto tiempo se ven los primeros resultados operativos?',
		description:
				'Los primeros impactos son visibles en cuestión de días gracias a nuestra implementación progresiva. El tiempo exacto varía según la complejidad de cada caso, pero diseñamos nuestras soluciones para generar valor desde las primeras etapas del proyecto.',
	},
	{
		title: '¿Cómo logramos aumentar la productividad mediante automatización?',
		description:
				'Analizamos tus operaciones o datos para identificar tareas repetitivas y cuellos de botella críticos. Luego desarrollamos soluciones personalizadas que eliminan el trabajo manual y aceleran tus procesos clave.',
	},
	{
		title: '¿Qué nos diferencia de otras empresas?',
		description:
				'Nuestro enfoque técnico nos permite crear soluciones precisas y a medida para cada desafío específico, a diferencia de las soluciones genéricas del mercado.',
	},
	{
		title: '¿Cómo transformamos tus datos en insights accionables?',
		description:
				'Diseñamos dashboards interactivos que van más allá de la visualización básica: convertimos tus métricas críticas en herramientas de toma de decisiones. Nuestras soluciones de visualización se integran directamente con todas tus fuentes de datos.',
	},
	{
		title: '¿Cómo aseguramos calidad y seguridad en el código?',
		description:
				'Aplicamos revisiones estrictas, CI/CD automatizado, linters, pruebas unitarias y escaneos de seguridad en cada etapa del desarrollo. Todo el código sigue estándares robustos y auditables.',
	},
];

export const contact_items = [
	{
		title: 'Consulta gratuita',
		description:
				'Evaluamos tu negocio y te ofrecemos soluciones personalizadas.',
		icon: {
			component: Sparkle,
			background: 'bg-accent/10',
			stroke: 'fill-accent',
		},
	},
	{
		title: 'Implementación rápida',
		description:
				'Resultados visibiles en semanas, no en meses.',
		icon: {
			component: Sparkle,
			background: 'bg-accent/10',
			stroke: 'fill-accent',
		},
	},
	{
		title: 'Soporte continuo',
		description:
				'Te acompañamos en todo el proceso de transformación digital.',
		icon: {
			component: Sparkle,
			background: 'bg-accent/10',
			stroke: 'fill-accent',
		},
	},
];

export const company_size_options: SelectOptions = [
	{
		label: 'Entre 0 y 10 trabajadores',
		value: '0 - 10',
	},
	{
		label: 'Entre 10 y 50 trabajadores',
		value: '10 - 50',
	},
	{
		label: 'Entre 50 y 100 trabajadores',
		value: '50 - 100',
	},
	{
		label: 'Más de 100 trabajadores',
		value: '100+',
	},
];
