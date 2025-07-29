<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: class_name, ...rest }: Props = $props();
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
				<span
					class='text-xl tracking-widest text-text-secondary uppercase'
				>
					<span class='font-semibold text-text-primary'>Owl</span
					>io
				</span>
			</a>
		</div>
		<div class='flex items-center justify-between py-8'>
			<span class='text-sm text-text-secondary'>
				© 2025 Owlio. All rights reserved.
			</span>
			<div>
				<!-- -->
			</div>
		</div>
	</div>
</footer>
