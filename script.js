const h2 = document.createElement("h2");
const baileyGirl = document.getElementById("bailey");

h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

baileyGirl.style.cursor = "grab";

function addClickAlert () {
   baileyGirl.addEventListener('click', function() {
    return alert("woof woof lol");
   });
}

function addDragMessage() {
    baileyGirl.addEventListener('drag', function() {
        return alert("ay bub! i'm walkin here!");
    });
}

function addMouseOutMessage() {
    baileyGirl.addEventListener('mouseout', function() {
        return alert("give her a pat, why not? live a little...")
    })
}


addClickAlert();
addDragMessage();
addMouseOutMessage();