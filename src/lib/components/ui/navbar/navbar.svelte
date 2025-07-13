<script lang='ts'>
    const items = [
        {
            label: 'inicio',
            href: '#',
        },
    ];
</script>

<header class='sticky top-0 z-50 w-full'>
    <div class='relative border-b border-b-separator-light px-12'>
        <nav class='flex h-(--ui-header-height) justify-between'>
            <div class='flex items-center gap-6'>
                <a class='flex items-center gap-2' href='/'>
                    <span class='text-lg tracking-widest uppercase'>
                        <span class='font-semibold'>Rapid</span>flow
                    </span>
                </a>
                <div class='flex items-center'>
                    <!--  -->
                </div>
            </div>

            <div class='flex items-center'>
                <ul>
                    {#each items as item (item.label)}
                        <li>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        </nav>
    </div>
</header>
