<script>
    import FaMedium from 'svelte-icons/fa/FaMedium.svelte'

    export let data;
</script>

<style>
    img {
        height: auto;
        max-width: 200px;
    }

    .container {
        display: flex;
        flex-direction: row;
    }

    .sideContainer {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin: 5px;
    }

    .icon {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 700px) {
        .container { 
            flex-wrap: wrap;
        }

        img {
            width: 100%;
            max-width: none;
        }
    }

    h2, h3 {
        margin: 0;
    }

    span {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>

<a href={data.guid}>
    <div class="container">
        <img src={data.thumbnail} alt="medium story cover" />

        <div class="sideContainer">
            <h2>{data.title}</h2>
            <p>{data.pubDate}</p>
            <span>
                <h3>{data.author}&nbsp;</h3>
                <div class="icon"><FaMedium /></div>
            </span>
        </div>
    </div>
</a>
