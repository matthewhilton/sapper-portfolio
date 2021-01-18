<script>
    export let data;
    import Lazy from 'svelte-lazy';
    import SmallPlaceholder from './SmallPlaceholder.svelte';
</script>

<style>
    div {
        max-width: 800px;
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
    <div class="darkBackground">
        <Lazy 
        height={300} 
        placeholder={SmallPlaceholder}
        >
            <img
            alt="cover"
            src={data.cover.url}
            />
        </Lazy>

        <h3 class="label darkBackground">{data.title}</h3>
    </div>
</a>


