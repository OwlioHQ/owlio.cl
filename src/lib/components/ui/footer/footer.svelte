<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';

	import XLogo from 'phosphor-svelte/lib/XLogo';
	import FacebookLogo from 'phosphor-svelte/lib/FacebookLogo';
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
	import OwlioLogo from '$lib/assets/images/owlio.png?enhanced';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: class_name, ...rest }: Props = $props();

	const socials = [
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
			href: 'https://www.linkedin.com/company/owlio-cl',
		},
	];
</script>

<footer
	class={cn(
		'bg-background-primary px-[var(--section-padding-x)]',
		class_name,
	)}
	{...rest}
>
	<div class='divide-y divide-separator'>
		<div class='flex items-center justify-between py-8'>
			<a class='flex items-center gap-2' href='/'>
				<div class='flex items-center gap-x-2'>
					<enhanced:img class='w-4 object-contain' alt='Owlio logo' src={OwlioLogo} />
					<span
						class='text-xl font-bold tracking-widest text-text-primary uppercase'
					>
						Owl<span class='font-light text-text-secondary'>io</span>
					</span>
				</div>
			</a>
		</div>
		<div class='flex items-center justify-between py-8'>
			<span class='text-sm text-text-secondary'>
				© 2025 Owlio. All rights reserved.
			</span>
			<div class='flex items-center gap-x-3'>
				{#each socials as social}
					{@const Logo = social.icon}
					<a aria-label={social.label} href={social.href} referrerpolicy='no-referrer' target='_blank'>
						<Logo class='size-6 transition-colors focus-within:fill-black hover:fill-black' />
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
