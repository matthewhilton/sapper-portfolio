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
        <Masonry gridGap="10px">
            {#each $q.data.workitems as item}
                {#if item.featured}
                    <WorkItem data={item}/>
                {/if}
            {/each}
        </Masonry>

        <div class="header" id="other"><Heading title="Other Projects" /></div>
        <Masonry gridGap="10px">
            {#each $q.data.workitems as item}
                {#if !item.featured}
                    <WorkItem data={item}/>
                {/if}
            {/each}
        </Masonry>
    {/if}






