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

<div class="darkBackground">
    <Lazy 
    height={300} 
    placeholder={SmallPlaceholder}
    placeholderProps={{size: 300}}
    >
        <img
        alt={data.imageAlt}
        src={data.imageUrl}
         />
    </Lazy>

    <h3 class="label darkBackground">{data.title}</h3>
</div>


