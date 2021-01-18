<script>
    export let data;
    export let minified = false;
</script>

<style>
	h1 {
        padding: 10px;
        font-size: 20px;
        margin: 0;
        background-color: rgb(245, 241, 237);
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
        color: white;
        margin: 0;
    }

</style>

<a href={"/study/"+data.code}>
    <div class="container" style="--theme-color: {data.color}">
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


