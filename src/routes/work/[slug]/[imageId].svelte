<script context="module">
	export async function preload(page, session) {
		const { imageId } = page.params;
        return {imageId}
	}
</script>

<script>
    export let imageId;

    import { GET_IMAGE } from '../../../graphql/queries'
    import { query } from "svelte-apollo"
    import Lazy from "svelte-lazy"
    import ImagePlaceholder from "../../../components/ImagePlaceholder.svelte"
    const q = query(GET_IMAGE, { variables: { imageId }})
    $: q.refetch({ imageId })
</script>

<style>
    img {
        width: 100%;
        height: auto;
    }

    a {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .container {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>

<div class="container">
    <a href="javascript:history.back()"><h4>Go Back</h4></a>

    {#if $q.loading}
    <p>Loading...</p>
    {:else if $q.error}
    <p> Error loading: {$q.error.message} </p>
    {:else}
        {#each [$q.data.asset] as item (item.id)}
            
        <Lazy 
        height={300} 
        placeholder={ImagePlaceholder}
        placeholderProps={{size: 300}}
        >
            <img
            alt="fullscreen view"
            src={item.url}
            />
        </Lazy>
        {/each}
    {/if}
</div>
