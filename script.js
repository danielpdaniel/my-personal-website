const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);


document.getElementById("bailey").style.cursor = "pointer";

const baileyGirl = document.getElementById("bailey");

function clickAlert() {
    alert('I was clicked!');
}

function addClickAlert () {
   baileyGirl.addEventListener('click', clickAlert);
}

addClickAlert();

