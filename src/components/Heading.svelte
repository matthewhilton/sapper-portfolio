<script>
    export let title;
</script>

<style>
    #main {
        margin-top: 30px;
        margin-bottom: 10px;
        border-left: 4px solid rgb(171, 158, 145);
        background-color: rgb(205, 197, 190);
    }

    #inner {
        background-color: rgba(0,0,0,0);
        padding: 15px;
        display: flex;
    }

    h3 {
        background-color: rgba(0,0,0,0);
        margin: 0;
    }
</style>

<div id="main">
    <div id="inner">
        <h3>{title}</h3>
    </div>
</div>