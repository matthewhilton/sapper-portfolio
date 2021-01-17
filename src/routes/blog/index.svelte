<svelte:head>
    <title>Blog | Matthew Hilton</title>
</svelte:head>

<script context="module">
    // Fetch medium feed in JSON form
    export function preload(page, session) {
		const request = this.fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40matthew-h");
		return { request };
	}
</script>

<script>
    import MediumStoryCard from "../../components/MediumStoryCard.svelte";
    export let request;
</script>

<style>
    .container {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>

<div class="container">
    {#await request}
    <p> Loading... </p>
    {:then data}
        {#await data.json()}
        <p> Loading... </p>
        {:then response}
            {#each response.items as story}
                <MediumStoryCard data={story} />
            {/each}
        {/await}
    {:catch error}
    <p style="color: red">{error.message}</p>
    {/await}
</div>