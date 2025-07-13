<script lang='ts'>
    import type { HTMLAttributes } from 'svelte/elements';

    import Key from 'phosphor-svelte/lib/Key';
    import Alarm from 'phosphor-svelte/lib/Alarm';
    import BookOpen from 'phosphor-svelte/lib/BookOpen';
    import PencilSimpleLine from 'phosphor-svelte/lib/PencilSimpleLine';
    import ArrowsCounterClockwise from 'phosphor-svelte/lib/ArrowsCounterClockwise';

    import { cn } from '$lib/utils';

    interface Props extends HTMLAttributes<HTMLElement> {};

    let { class: class_name, ...rest }: Props = $props();

    const features = [
        {
            icon: PencilSimpleLine,
            foreground: 'fill-purple-700',
            background: 'bg-purple-100',
            heading: 'Lorem Ipsum',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum quidem. Aut itaque nostrum fugiat eveniet beatae odio unde magnam, adipisci saepe voluptatibus. Itaque similique dicta aut? Quia, fuga neque.',
        },
        {
            icon: BookOpen,
            foreground: 'fill-blue-700',
            background: 'bg-blue-100',
            heading: 'Lorem Ipsum',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum quidem. Aut itaque nostrum fugiat eveniet beatae odio unde magnam, adipisci saepe voluptatibus. Itaque similique dicta aut? Quia, fuga neque.',
        },
        {
            icon: ArrowsCounterClockwise,
            foreground: 'fill-red-700',
            background: 'bg-red-100',
            heading: 'Lorem Ipsum',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum quidem. Aut itaque nostrum fugiat eveniet beatae odio unde magnam, adipisci saepe voluptatibus. Itaque similique dicta aut? Quia, fuga neque.',
        },
        {
            icon: Key,
            foreground: 'fill-orange-700',
            background: 'bg-orange-100',
            heading: 'Lorem Ipsum',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum quidem. Aut itaque nostrum fugiat eveniet beatae odio unde magnam, adipisci saepe voluptatibus. Itaque similique dicta aut? Quia, fuga neque.',
        },
        {
            icon: Alarm,
            foreground: 'fill-green-700',
            background: 'bg-green-100',
            heading: 'Lorem Ipsum',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum quidem. Aut itaque nostrum fugiat eveniet beatae odio unde magnam, adipisci saepe voluptatibus. Itaque similique dicta aut? Quia, fuga neque.',
        },
    ];
</script>

<section class={cn('size-full -scroll-m-[calc(calc(var(--section-padding-y)-var(--header-height))/2)]', class_name)} {...rest}>
    <div class='grid grid-cols-2 place-content-center items-center gap-24 px-[var(--section-padding-x)] py-[var(--section-padding-y)]'>
        <div class='space-y-10'>
            {#each features as feature (feature.icon)}
                {@const Icon = feature.icon}

                <div class='flex items-center gap-x-6'>
                    <div class={`size-16 rounded-full p-4.5 ${feature.background}`}>
                        <Icon class={`${feature.foreground} aspect-square size-full align-middle`} />
                    </div>

                    <div class='w-fit'>
                        <h3 class='pb-2.5 text-xl font-semibold'>{feature.heading}</h3>
                        <p class='text-base text-text-secondary'>{feature.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <div class='aspect-square rounded-2xl bg-separator'>
            <!-- -->
        </div>
    </div>
</section>
