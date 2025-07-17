<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';

	import Check from 'phosphor-svelte/lib/Check';

	import { cn } from '$lib/utils';
	import { Button, IconBadge } from '$lib/components/ui';

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: class_name, ...rest }: Props = $props();

	const items = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];
</script>

<section class={cn('isolate size-full pb-[var(--section-padding-y)]', class_name)} {...rest}>
	<div class='bg-separator'>
		<div
			class='px-[var(--section-padding-x)] py-[var(--section-padding-y)]'
		>
			<div
				class='flex items-center rounded-2xl bg-background-primary p-20'
			>
				<div class='w-3/5 space-y-8'>
					<div class='space-y-4'>
						<h2
							class='text-4xl leading-loose font-bold text-text-primary'
						>
							Start Your Free Trial Now
						</h2>
						<p class='text-base leading-snug text-pretty'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Vero cumque ullam amet culpa veniam aperiam
							adipisci debitis suscipit libero? Perspiciatis hic
							expedita distinctio omnis quia maiores quam veniam.
							Nobis, fugiat?
						</p>
					</div>
					<div class='flex items-center gap-x-6'>
						{#each items as item}
							<div
								class='flex items-center gap-x-2 text-sm text-text-primary'
							>
								<IconBadge class='size-5'>
									<Check />
								</IconBadge>
								<span>{item}</span>
							</div>
						{/each}
					</div>
				</div>
				<div class='ml-auto'>
					<Button>Lorem ipsum</Button>
				</div>
			</div>
		</div>
	</div>
</section>
