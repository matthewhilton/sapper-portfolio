<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;
        return {slug}
	}
</script>

<script>
    export let slug;

    import { GET_WORKITEM } from '../../graphql/queries'
    import { query } from "svelte-apollo"
    import Lazy from 'svelte-lazy';
    import SmallPlaceholder from "../../components/SmallPlaceholder.svelte"
    import Masonry from 'svelte-masonry/Masonry.svelte';
import UnitItem from '../../components/UnitItem.svelte';
import StackItem from '../../components/StackItem.svelte';
import FaLink from 'svelte-icons/fa/FaLink.svelte'

    const q = query(GET_WORKITEM, { variables: { "slug": slug }})

    $: q.refetch({ "slug": slug })
</script>

<style>
    .container {
        margin-top: 30px;
        margin-left: 10px;
        margin-right: 10px;
    }

    img {
        width: 100%;
        height: auto;
    }

    .stackContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }

    .galleryImg {
        max-width: 400px;
    }

    .icon {
        width: 20px;
        height: 20px;
    }

    .linkContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>

<div class="container">
    {#if $q.loading}
    <p>Loading...</p>
    {:else if $q.error}
    <p> Error loading: {$q.error.message} </p>
    {:else}
        {#each [$q.data.workitem] as item (item.id)}
            <Lazy
                height={600} 
                placeholder={SmallPlaceholder}
                >
                <img alt="cover" src={item.cover.url} />
            </Lazy>
            <h1>{item.title}</h1>
           
                <h2>{item.year}</h2>
                {#if item.githubUrl}
                    <div class="linkContainer">
                        <div class="icon">
                            <FaLink />
                        </div>
                        <a href={item.githubUrl} style="margin-left: 5px;"> <h3>Github Repository</h3> </a>
                    </div>
                {/if}
           
            <p>{item.description}</p>

            {#if item.stackitems.length > 0}
                <h3> Languages/Stack </h3>
                <div class="stackContainer">
                    {#each item.stackitems as stackitem (stackitem.id)}
                        <StackItem data={stackitem} />
                    {/each}
                </div>
            {/if}

            {#if item.studyunit !== null}
                <h2>Made as part of unit:</h2>
                <UnitItem data={item.studyunit} minified={true}/>
            {/if}
            
            {#if item.images.length > 0}
                <h2>Gallery</h2>
                <Masonry gridGap="10px">
                    {#each item.images as image (image.url)}
                    <a href={"/work/"+slug+"/"+image.id}>
                        <Lazy
                        height={300} 
                        placeholder={SmallPlaceholder}
                        >
                            <img class="galleryImg" alt="gallery" src={image.url} />
                        </Lazy>
                    </a>
                    {/each}
                </Masonry>
            {/if}
        {/each}
    {/if}
</div>