<svelte:head>
	<title>Work | Matthew Hilton</title>
</svelte:head>

<script>
    import Masonry from 'svelte-masonry/Masonry.svelte'
    import Heading from '../../components/Heading.svelte';
    import WorkItem from '../../components/WorkItem.svelte';

    import { GET_WORKITEMS_LIST } from '../../graphql/queries'
    import { query } from "svelte-apollo"

    const q = query(GET_WORKITEMS_LIST)

    let refreshLayoutFeatured;
    let refreshLayoutOther;
</script>

<style>
    .header {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>

{#if $q.loading}
    <p>Loading...</p>
    {:else if $q.error}
    <p> Error loading: {$q.error.message} </p>
    {:else if $q.data}
        <div class="header"><Heading title="Featured" /></div>
        <Masonry gridGap="10px" bind:refreshLayout={refreshLayoutFeatured}>
            {#each $q.data.workitems as item}
                {#if item.featured}
                    <WorkItem data={item} onLoad={refreshLayoutFeatured}/>
                {/if}
            {/each}
        </Masonry>

        <div class="header" id="other"><Heading title="Other Projects" /></div>
        <Masonry gridGap="10px" bind:refreshLayout={refreshLayoutOther}>
            {#each $q.data.workitems as item}
                {#if !item.featured}
                    <WorkItem data={item} onLoad={refreshLayoutOther} />
                {/if}
            {/each}
        </Masonry>
    {/if}






