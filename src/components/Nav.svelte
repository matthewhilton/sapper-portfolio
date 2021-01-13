<style>
    h1 {
        margin: 0;
        padding: 0;
		font-weight: bold;
    }
    
    p {
        margin: 0;
        color: #969696;
    }

    #headerDiv {
        flex-grow: 5
    }

    @media only screen and (max-width: 600px) {
        h1 {
            text-align: center;
            margin-bottom: 10px;
        }

        p {
            display: none;
        }
    }

    nav > a  {
        border: none;
        font-weight: bold;
        background: none;
        font-size: 120%;
        margin-left: 10px;
    }

    nav {
        justify-content: center;
        flex-grow: 1;
        text-align: center;
    }

    #outer {
        margin: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    a {
        text-decoration: none;
    }
</style>

<div id="outer">
    <div id="headerDiv">
        <a href="/">
            <h1>Matthew Hilton</h1>
            <p> web developer </p>
        </a>
    </div>
    
    <nav>
        <a href="/work">Work</a>
        <a href="/study">Study</a>
        <a href="/contact">Contact</a>
    </nav>
</div>
