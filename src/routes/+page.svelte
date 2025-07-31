<script lang='ts'>
	import { Hero, Cta, Features, Hiw, Faq } from '$lib/components/blocks';
</script>

<svelte:head>
	<title>Owlio</title>
	<meta
		name='description'
		content='Transformamos empresas a través de soluciones digitales personalizadas. Nos especializamos en desarrollo de software, automatización de procesos y optimización operacional para ayudar a tu negocio a modernizarse y crecer de manera más eficiente.'
	/>
</svelte:head>

<div>
	<Hero id='inicio' class='scroll-m-20' />
	<Features id='servicios' />
	<Hiw id='hiw' class='scroll-m-36' />
	<Faq id='faq' />
	<Cta id='cta' />
</div>
