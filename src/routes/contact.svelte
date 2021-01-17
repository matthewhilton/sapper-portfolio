<svelte:head>
	<title>Contact</title>
</svelte:head>

<script>
import Heading from "../components/Heading.svelte"
import SubHeading from "../components/SubHeading.svelte";
</script>

<style>
    .horizontal {
        display: flex;
        flex-direction: row;
    }

    a {
        color: rgb(171, 158, 145);
    }

    b {
        font-size: 105%;
        margin-bottom: 5px;
    }

    .container {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>

<div class="container">
    <Heading title={"Contact"} />
    <div class="horizontal"> 
        <b>Email: <a href="mailto:mj.hilton@outlook.com">mj.hilton@outlook.com</a></b>
    </div>
    <div class="horizontal">
        <b>LinkedIn: <a href="https://www.linkedin.com/in/matthew-hilton1234/">Matthew Hilton</a></b>
    </div>
    <Heading title={"About Me"} />
    <p>I love making things and doing stuff such as programming microcontrollers (Arduino, teensy, ESP), setting up automation projects (Raspberry Pi) and even making websites (NodeJS, React, Svelte).</p><p>When I find a problem, I learn how to solve it and have fun along the way.</p>

    <p>I also enjoy sculpture art, which usually involves some sort of interactive component using microcontrollers or different lighting effects.</p>

    <p>I am currently studing a <b>Bachelor of IT (Computer Science)</b> at the <b>Queensland University of Technology (QUT)</b>, in my 3rd and final year.</p>
    <p> My areas of study at university are on mobile applications and artificial intelligence. </p>

    <Heading title={"Skills and Experience"} />
    <SubHeading title={"Programming"} />
    <p> While I have used many languages in the past, I mostly focus my time on my web development skills. Obviously this means I know <b>Javascript</b> very well, having used the <b>React</b> framework extensively. I have started also learning about <b>Svelte</b> (the framework that built this site!). </p>
    <p> Other languages I am familiar with include: Python, C#, Java, Matlab, React Native, and C.</p>
    <SubHeading title={"Electronics"} />
    <p> I have lots of experience with the <b>Arduino</b> ecosystem, including producing my own custom designed printed circuit boards. Most of my electronics projects involve lighting, wifi, sensors, etc. </p>
    <SubHeading title={"Fabrication"} />
    <p> Experience with 3D printing, CNC machining and woodwork </p>
</div>