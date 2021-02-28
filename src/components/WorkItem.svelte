<script>
    import Lazy from 'svelte-lazy';
    import SmallPlaceholder from './SmallPlaceholder.svelte';

    export let data;
    export let maxWidth = 400;
    export let onLoad = function(){};
</script>

<style>
    div {
        padding: 10px;
        position: relative;
        border-radius: 5px;
    }

    img {
        width: 100%;
        height: auto;
        background-color: #1e2529;
    }

    .label {
        margin: 0;
        padding: 5px;
    }

    .darkBackground {
        background-color: #1e2529; 
    }

    .bottom {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        padding: 5px;
    }

    .stackItem {
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }
</style>

<a href={"/work/"+data.slug}>
    <div class="darkBackground" style={"max-width: " + maxWidth + "px"}>
        <Lazy height={200}
        offset={0}
        class="darkBackground"
        placeholder={SmallPlaceholder}
        >
            <img
                on:load={onLoad}
                alt="cover"
                src={data.cover.url}
                />
        </Lazy>
        <h3 class="label darkBackground">{data.title}</h3>

        {#if data.stackitems.length > 0}
            <div class="bottom darkBackground">
                {#each data.stackitems as stackitem (stackitem.id)}
                    
                        <img class="stackItem" src={stackitem.logo.url} alt="stackitem logo" />

                {/each}
            </div>
        {/if}
    </div>
</a>


