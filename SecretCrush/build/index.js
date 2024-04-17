"use strict";
let btn = document.getElementById("btn");
let input = document.getElementById("input");
let container = document.getElementById("container");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let header2 = document.getElementById("header2");
let header3 = document.getElementById("header3");
let header4 = document.getElementById("header4");
let header5 = document.getElementById("header5");
let body2 = document.getElementById("body2");
let body3 = document.getElementById("body3");
let body4 = document.getElementById("body4");
let body5 = document.getElementById("body5");
let audio = document.getElementById("aud");
let devAudio = ["./music/mus2.mp3", "./music/mus3.mp3", "./music/mus4.mp3", "./music/mus5.mp3"];
let crushAudio = ["./music/mus1.mp3", "./music/mus2.mp3", "./music/mus4.mp3"];
const adminObj = [
    {
        "header": "Welcome Developer",
        "body": "Here's the progress so far doubleclick me for a start "
    },
    {
        "header": "Header",
        "body": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quo debitis ab at dolore added with typescript."
    },
    {
        "header": "Header",
        "body": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quo debitis ab at dolore added with typescript."
    },
    {
        "header": "Header",
        "body": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quo debitis ab at dolore added with typescript."
    },
    {
        "header": "Header",
        "body": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quo debitis ab at dolore added with typescript."
    }
];
const crushObj = [
    {
        "header": "Welcome Sweetheart",
        "body": "Here are card of messages from me to you click to reveal the next card doubleclick me for a start hint: memorize the headers"
    },
    {
        "header": "You",
        "body": "In a sea of people my eye search for you, cause i want to see only you and you alone"
    },
    {
        "header": "Are",
        "body": "I know fairytales comes true because i have you, stupid to say but my words are true"
    },
    {
        "header": "My",
        "body": "I've realise i cannot resist you so here's the deal"
    },
    {
        "header": "Greatest Crush",
        "body": "If you are curious to know here's my no.: '+2349033572229' please dear I'd be expecting you"
    }
];
const olaObj = [
    {
        "header": "Welcome Sweetheart",
        "body": "Here are card of messages from me to you click to reveal the next card doubleclick me for a start hint: memorize the headers"
    },
    {
        "header": "You",
        "body": "In a sea of people my eye search for you, cause i want to see only you and you alone"
    },
    {
        "header": "Are",
        "body": "I know fairytales comes true because i have you, stupid to say but my words are true"
    },
    {
        "header": "My",
        "body": "I've realise that i cannot resist you so here's the deal"
    },
    {
        "header": "Greatest Crush",
        "body": "I want you to remember that for every minute and second that flies away, My smile grows wider not because of anything but because of I'm thinking of you Layemi"
    }
];
let userObj;
//function to handle all actions and animation involved in the next set of cards
function actions(card, obj, cardx, x, tranx, headerx, bodyx) {
    card.style.transform = tranx[0];
    cardx.style.transform = tranx[1];
    headerx.innerText = obj[x].header;
    bodyx.innerText = obj[x].body;
}
//An array containing the different tansition and animation for each card
let trans = [
    ["translateX(100%) scale(0.8)", "rotate(0deg)"],
    ["translateX(-100%) scale(0.8)", "rotate(0deg)"],
    ["translateY(100%) scale(0.8)", "rotate(0deg)"],
    ["translateY(-100%) scale(0.8)", "rotate(0deg)"]
];
//Adding eventlistener for the button and five cards using the action funtion
btn.addEventListener("click", () => {
    let string = input.value;
    string = string.toLowerCase();
    if (string.includes("admin")) {
        let x = Math.floor(Math.random() * devAudio.length - 1);
        audio.src = devAudio[x];
        userObj = adminObj;
        input.remove();
        btn.remove();
        let header = document.createElement("h1");
        header.innerText = userObj[0].header;
        let body = document.createElement("p");
        body.innerText = userObj[0].body;
        card1.appendChild(header);
        card1.appendChild(body);
    }
    else if (string.includes("crush") || string.includes("layemi")) {
        if (string.includes("crush")) {
            let x = Math.floor(Math.random() * crushAudio.length - 1);
            audio.src = crushAudio[x];
            userObj = crushObj;
        }
        else if (string.includes("olayemi")) {
            audio.src = './music/mus1.mp3';
            userObj = olaObj;
        }
        input.remove();
        btn.remove();
        let header = document.createElement("h1");
        header.innerText = userObj[0].header;
        let body = document.createElement("p");
        body.innerText = userObj[0].body;
        card1.appendChild(header);
        card1.appendChild(body);
    }
    else {
        let x = Math.floor(Math.random() * devAudio.length - 1);
        audio.src = devAudio[x];
        userObj = adminObj;
        input.remove();
        btn.remove();
        let header = document.createElement("h1");
        header.innerText = userObj[0].header;
        let body = document.createElement("p");
        body.innerText = userObj[0].body;
        card1.appendChild(header);
        card1.appendChild(body);
    }
    audio.play();
    //Nesting the event listener so that the second card would only be clickable if the preceding one has been clicked
    card1.addEventListener("dblclick", () => {
        actions(card1, userObj, card2, 1, trans[0], header2, body2);
        card2.addEventListener("click", () => {
            actions(card2, userObj, card3, 2, trans[1], header3, body3);
            card3.addEventListener("click", () => {
                actions(card3, userObj, card4, 3, trans[2], header4, body4);
                card4.addEventListener("click", () => {
                    actions(card4, userObj, card5, 4, trans[3], header5, body5);
                    card5.addEventListener("click", () => {
                        card1.style.animation = "rotateAndFade 3s ease-in-out";
                        card2.style.animation = "rotateAndFade 3s ease-in-out";
                        card3.style.animation = "rotateAndFade 3s ease-in-out";
                        card4.style.animation = "rotateAndFade 3s ease-in-out";
                        card5.style.animation = "rotateAndFade 3s ease-in-out";
                        card1.style.animationFillMode = "forwards";
                        card2.style.animationFillMode = "forwards";
                        card3.style.animationFillMode = "forwards";
                        card4.style.animationFillMode = "forwards";
                        card5.style.animationFillMode = "forwards";
                        setTimeout(() => goodbyeMsg(input.value), 3000);
                    });
                });
            });
        });
    });
});
function goodbyeMsg(string) {
    let lowerCaseStr = string.toLowerCase();
    if (lowerCaseStr.includes("admin")) {
        let adminmsg = document.createElement("h1");
        adminmsg.innerText = "GoodBye Developer";
        adminmsg.classList.add("adminmsg");
        container.appendChild(adminmsg);
    }
    else {
        let msg1 = document.createElement("h1");
        msg1.innerText = "I just want you to know that";
        msg1.classList.add("msg1");
        container.appendChild(msg1);
        let msg = document.createElement("h1");
        msg.innerText = "I LOVE U";
        msg.classList.add("msg");
        container.appendChild(msg);
        let msg2 = document.createElement("h1");
        msg2.innerText = `Dear ${string}`;
        msg2.classList.add("msg2");
        container.appendChild(msg2);
    }
}
