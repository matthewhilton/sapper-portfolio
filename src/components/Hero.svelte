<script>
    import MdArrowDownward from 'svelte-icons/md/MdArrowDownward.svelte'
</script>

<style>
    h1 {
        font-size: 2.5em;
    }

    p {
        font-size: 1.3em;
    }

    #main {
        margin-top: 20mm;
        text-align: center;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    #subtitle {
        margin-top: 300px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .icon {
        width: 30px;
        height: 30px;
        color: grey;
        margin-left: 10px;
        margin-right: 10px;
    }

    #subtitle > p {
        font-size: 1em;
    }
</style>

<div id="main">
    <h1> Hi, i'm matt 👋 </h1>
    <p> I ❤️ web development </p>

    <div id="subtitle">
        <div class="icon">
            <MdArrowDownward />
        </div>
        <p>because I know you're here to see what I can do</p>
        <div class="icon">
            <MdArrowDownward />
        </div>
    </div>
</div>