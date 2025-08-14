<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';

	import OwlioLogo from '$lib/assets/images/owlio.png?enhanced';

	import { cn } from '$lib/utils';
	import { socials } from '$lib/constants';

	import { Link } from '../link';

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: class_name, ...rest }: Props = $props();
</script>

<footer
	id='footer'
	class={cn(
		'mx-auto w-full max-w-(--content-width) bg-background px-(--content-x-spacing)',
		class_name,
	)}
	{...rest}
>
	<div class='divide-y divide-muted-foreground'>
		<div class='flex items-center justify-between py-8'>
			<a class='flex items-center gap-2' href='/'>
				<div class='flex items-center gap-x-2'>
					<enhanced:img
						class='w-4 object-contain'
						alt='Owlio logo'
						src={OwlioLogo}
					/>
					<span class='text-xl font-bold tracking-widest uppercase'>
						Owlio
					</span>
				</div>
			</a>
		</div>
		<div class='flex items-center justify-between py-8'>
			<span class='text-sm text-muted'> © 2025 Owlio. </span>
			<div class='flex items-center gap-x-3'>
				{#each socials as social}
					{@const Logo = social.icon}
					<Link
						aria-label={social.label}
						href={social.href}
						target='_blank'
					>
						<Logo
							class='size-6 fill-foreground transition-colors group-focus-within:fill-accent group-hover:fill-accent'
						/>
					</Link>
				{/each}
			</div>
		</div>
	</div>
</footer>
