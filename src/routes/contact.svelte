<svelte:head>
	<title>Contact</title>
</svelte:head>

<script>
import Heading from "../components/Heading.svelte"
import SubHeading from "../components/SubHeading.svelte";
import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
import FaRegPaperPlane from 'svelte-icons/fa/FaRegPaperPlane.svelte'

</script>

<style>
    .horizontal {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    a {
        color: white;
    }

    b {
        font-size: 105%;
        margin-bottom: 5px;
    }

    .container {
        margin-left: 10px;
        margin-right: 10px;
    }

    b, p {
        color: white;
        text-align: justify;
        text-justify: auto;   
    }
    
    .icon {
        color: white;
        width: 20px;
        height: 20px;
        margin: 10px;
        margin-left: 0px;
    }
</style>

<div class="container">
    <Heading title={"Contact"} />
    <div class="horizontal"> 
        <div class="icon"><FaRegPaperPlane /></div>
        <a href="mailto:mj.hilton@outlook.com">mj.hilton@outlook.com</a>
    </div>
    <div class="horizontal"> 
        <div class="icon"><FaGithub /></div>
        <a href="https://github.com/unxpctederr">unxpctederr</a>
    </div>
    <div class="horizontal">
        <div class="icon"><FaLinkedin /></div>
        <a href="https://www.linkedin.com/in/matthew-hilton1234/">Matthew Hilton</a>
    </div>
    <Heading title={"About Me"} />
    <p>I love making things and doing stuff such as programming microcontrollers (Arduino, teensy, ESP), setting up automation projects (Raspberry Pi) and even making websites (NodeJS, React, Svelte).</p><p>When I find a problem, I learn how to solve it and have fun along the way.</p>

    <p>I also enjoy sculpture art, which usually involves some sort of interactive component using microcontrollers or different lighting effects.</p>

    <p>I am currently studing a <b>Bachelor of IT (Computer Science)</b> at the <b>Queensland University of Technology (QUT)</b>, in my 3rd and final year.</p>
    <p> My areas of study at university are on mobile applications and artificial intelligence. </p>

    <Heading title={"Skills and Experience"} />
    <SubHeading title={"Languages"} />
    <p> I am in the process of learning 🇳🇴 Norweigan, and would say I am on level A2. I can have basic conversations and watch Norweigan TV (with subtitles) and read simple articles easily. 
        Due to the similarity to Norweigan, I often can also read articles in Swedish and Danish which is pretty cool.</p>
        <p>I'm mostly just learning it for fun in my spare time (not taking any classes or anything like that). Once I become proficient in Norweigan I hope to also learn German (a bit more of a complex language). </p>
    <p>Norsk: Jeg lærer norsk og kan forstå noen norsk. Jeg kan lese enkelt enkle artikler. Jeg kan ofte lese artikler på svensk og dansk også. Jeg lærer det bare for moro i fritiden min. </p>
    <SubHeading title={"Programming"} />
    <p> While I have used many languages in the past, I mostly focus my time on my web development skills. Obviously this means I know <b>Javascript</b> very well, having used the <b>React</b> framework extensively. I have started also learning about <b>Svelte</b> (the framework that built this site!). </p>
    <p> Other languages I am familiar with include: Python, C#, Java, Matlab, React Native, and C.</p>
    <SubHeading title={"Electronics"} />
    <p> I have lots of experience with the <b>Arduino</b> ecosystem, including producing my own custom designed printed circuit boards. Most of my electronics projects involve lighting, wifi, sensors, etc. </p>
    <SubHeading title={"Fabrication"} />
    <p> Experience with 3D printing, CNC machining and woodwork </p>
</div>