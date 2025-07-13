<script lang='ts'>
    import type { HTMLAttributes } from 'svelte/elements';

    import { cn } from '$lib/utils';
    import { AccordionGroup, Accordion } from '$lib/components/ui';

    interface Props extends HTMLAttributes<HTMLElement> {};

    let { class: class_name, ...rest }: Props = $props();

    const items = [
        {
            heading: 'Lorem ipsum',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quis esse aliquid officia rerum sint, officiis veritatis laudantium deleniti quos aspernatur. Debitis natus ipsa eveniet pariatur enim ea obcaecati voluptatum?',
        },
        {
            heading: 'Lorem ipsum',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quis esse aliquid officia rerum sint, officiis veritatis laudantium deleniti quos aspernatur. Debitis natus ipsa eveniet pariatur enim ea obcaecati voluptatum?',
        },
        {
            heading: 'Lorem ipsum',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quis esse aliquid officia rerum sint, officiis veritatis laudantium deleniti quos aspernatur. Debitis natus ipsa eveniet pariatur enim ea obcaecati voluptatum?',
        },
        {
            heading: 'Lorem ipsum',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quis esse aliquid officia rerum sint, officiis veritatis laudantium deleniti quos aspernatur. Debitis natus ipsa eveniet pariatur enim ea obcaecati voluptatum?',
        },
    ];
</script>

<section class={cn('size-full bg-background-secondary', class_name)} {...rest}>
    <div class='grid grid-cols-2 gap-24 px-[var(--section-padding-x)] py-[var(--section-padding-y)]'>
        <div class='content-center'>
            <h2 class='pb-2.5 text-2xl font-semibold'>Lorem Ipsum</h2>
            <p class='text-text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores fugit at, sed ea necessitatibus culpa, minus tempora iste amet quo? Error dolorem quisquam doloribus magnam quod, laborum quo voluptatibus?</p>
        </div>
        <div class='rounded-2xl bg-background-primary px-12 py-8'>
            <AccordionGroup>
                {#each items as item}
                    <Accordion>
                        {#snippet heading()}
                            {item.heading}
                        {/snippet}
                        {#snippet content()}
                            {item.content}
                        {/snippet}
                    </Accordion>
                {/each}
            </AccordionGroup>
        </div>
    </div>
</section>
