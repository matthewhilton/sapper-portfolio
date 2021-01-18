<script>
    import cssVars from 'svelte-css-vars';

    export let data;
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

<a href={"/study/"+data.unitCode}>
    <div class="container" style="--theme-color: {data.color}">
        <h1>{data.title}</h1>

        <div class="inner">
            <b><p>{data.unitCode}</p></b>
            <p>{data.tagline}</p>
        </div>
    </div>
</a>


