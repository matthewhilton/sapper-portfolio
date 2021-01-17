<script>
    export let title;
</script>

<style>
    #main {
        margin-top: 30px;
        margin-bottom: 10px;
        background-color: rgb(224, 217, 210);
    }

    #inner {
        background-color: rgba(0,0,0,0);
        padding: 10px;
        display: flex;
    }

    h4 {
        background-color: rgba(0,0,0,0);
        margin: 0;
    }
</style>

<div id="main">
    <div id="inner">
        <slot></slot>
        <h4>{title}</h4>
    </div>
</div>