<script>
    import FaMedium from 'svelte-icons/fa/FaMedium.svelte'

    export let data;
</script>

<style>
    img {
        height: auto;
        width: 300px;
    }

    .container {
        display: flex;
        flex-direction: row;
    }

    .flexVertical {
        display: flex;
        flex-direction: column;
    }

    .icon {
        width: 30px;
        height: 30px;
    }
</style>

<a href={data.guid}>
    <div class="container">
        <img src={data.thumbnail} alt="medium story cover" />

        <div class="flexVertical">
            <h2>{data.title}</h2>
            <p>{data.pubDate}</p>
            <h3>{data.author} <div class="icon"><FaMedium /></div></h3>
        </div>
    </div>
</a>
