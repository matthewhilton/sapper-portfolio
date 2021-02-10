<svelte:head>
    <title>Blog | Matthew Hilton</title>
</svelte:head>

<script>
    import MediumStoryCard from "../../components/MediumStoryCard.svelte";
    import { GET_BLOGPOSTS } from '../../graphql/queries'
    import { query } from "svelte-apollo"
    const q = query(GET_BLOGPOSTS)
</script>

<style>
    .container {
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 30px;
    }

    h2 {
        color: white;
    }
</style>

<div class="container">
    {#if $q.loading}
    <p>Loading...</p>
    {:else if $q.error}
    <p> Error loading: {$q.error.message} </p>
    {:else}
        {#each $q.data.blogposts as post (post.id)}
            <MediumStoryCard data={post} />
        {/each}

        {#if $q.data.blogposts.length == 0}
            <h2> No blog posts found </h2>
        {/if}
    {/if}
</div>