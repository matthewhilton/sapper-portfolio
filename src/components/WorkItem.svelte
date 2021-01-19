<script>
    import Lazy from 'svelte-lazy';
    import SmallPlaceholder from './SmallPlaceholder.svelte';

    export let data;
    export let maxWidth = 800;
    export let onLoad = function(){};
</script>

<style>
    div {
        position: relative;
    }

    img {
        width: 100%;
        height: auto;
    }

    .label {
        margin: 0;
        padding: 10px;
    }

    .darkBackground {
        background-color: rgb(228, 223, 218);
    }
</style>

<a href={"/work/"+data.slug}>
    <div class="darkBackground" style={"max-width: " + maxWidth + "px"}>
        <Lazy 
        height={300} 
        placeholder={SmallPlaceholder}
        >
            <img
            on:load={onLoad}
            alt="cover"
            src={data.cover.url}
            />
        </Lazy>

        <h3 class="label darkBackground">{data.title}</h3>
    </div>
</a>


