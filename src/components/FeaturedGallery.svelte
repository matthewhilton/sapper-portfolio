<script>
    import { GET_WORKITEMS_LIST } from '../graphql/queries'
    import { query } from "svelte-apollo"
    import FeaturedItem from './FeaturedItem.svelte';

    const q = query(GET_WORKITEMS_LIST)
</script>

{#if $q.loading}
<p>Loading...</p>
{:else if $q.error}
<p> Error loading: {$q.error.message} </p>
{:else}
    {#each $q.data.workitems.filter(item => item.featured) as item, i (item.slug)}
        <FeaturedItem data={item} flipped={i % 2 == 1}/>
    {/each}
{/if}


