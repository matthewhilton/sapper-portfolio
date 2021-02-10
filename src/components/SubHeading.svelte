<script>
    export let title;
</script>

<style>
    #main {
        margin-top: 30px;
        margin-bottom: 10px;
    }

    #inner {
        background-color: rgba(0,0,0,0);
        display: flex;
    }

    h4 {
        background-color: rgba(0,0,0,0);
        margin: 0;
        color: #8ae3a5;
        
        border-bottom: 2px solid;
        border-color: #4c9161
    }
</style>

<div id="main">
    <div id="inner">
        <slot></slot>
        <h4>{title}</h4>
    </div>
</div>