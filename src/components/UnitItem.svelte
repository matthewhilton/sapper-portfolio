<script>
    export let data;
    export let highlighted;
    export let minified = false;
</script>

<style>
	h1 {
        padding: 10px;
        font-size: 20px;
        margin: 0;
        background-color: rgba(0,0,0,0.3);
        color: var(--text-color);
	}

    .container {
        padding: 5px;
        background-color: var(--theme-color);
    }

    .inner {
        padding: 10px;
        background-color: var(--theme-color);
    }

    p {
        background-color: var(--theme-color);
        color: var(--text-color);
        margin: 0;
    }
</style>

<a href={"/study/"+data.code}>
    <div class="container" style="--theme-color: {highlighted ? data.color : "#262626"}; --text-color: {highlighted ? "white" : "grey"}">
        {#if !minified}
            <h1>{data.title}</h1>

            <div class="inner">
                <b><p>{data.code}</p></b>
                <p>{data.tagline}</p>
            </div>
        {:else}
            <div style={"display: flex; flex-direction: row; align-items: center; background-color: " + data.color}>
                <h1>{data.title}</h1>

                <div class="inner" style={"flex-grow: 1; height: 100%"}>
                    <b><p>{data.code}</p></b>
                </div>
            </div>
        {/if}
    </div>
</a>


