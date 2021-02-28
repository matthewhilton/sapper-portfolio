import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});

printConsoleMessage();

function printConsoleMessage(){
	console.log(" ")
	console.log("%cPoking around a bit are we?", 'font-weight: bold')
	console.log("Are you looking at hiring a react or node developer?")
	console.log("Send an email to me mj.hilton@outlook.com or send a message on my LinkedIn listed under the contact tab.")
	console.log(" ")
}
