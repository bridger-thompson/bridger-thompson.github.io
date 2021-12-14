// Sidebar JS
var open = false;
function openNav() {
  if (!open){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector("header").style.marginLeft = "250px";
    open = true;
  }
  else {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.querySelector("header").style.marginLeft = "0";
    open = false;
  }
}

//Sticks code
function sticks() {
    let sticks = 10;        //number of sticks to be removed
    let player = 1;         //starting player
    let deletesLeft = 3;    //number of sticks you can delete

    //declare player's turn
    let playerID = this.document.querySelector(".player-id");
    playerID.innerText = player;

    //create sticks
    let parent = this.document.querySelector("ul");
    for (let i = 1; i <= 10; i++) {
        let node = document.createElement("li");
        // node.innerHTML = `<img src="stick.svg" alt="Stick">`;
        node.innerText = `Stick ${i}`;
        parent.append(node);
    }
    //pass turn
    document.getElementById("gameButton").addEventListener("click", function(e) {
        document.querySelectorAll('li:not([display="none"])');
        if (player == 1 && deletesLeft < 3) {
            player = 2;
        }
        else if (deletesLeft < 3) {
            player = 1;
        }
        else {
            alert("You have to remove at least one stick before passing your turn.");
        }
        playerID.innerText = player;
        deletesLeft = 3;
    });

    //removes stick
    parent.addEventListener('click', function(e) {
        console.log(e);
        if (e.target.nodeName == "LI" && deletesLeft > 0) {
            deletesLeft--;
            sticks--;
            if (sticks == 0) {
                parent = document.getElementById("turn");
                // parent = document.querySelector('p');
                parent.innerText = `Player ${player}, you lost.`;
                parent = document.getElementById("gameButton");
                parent.innerText = `Play again?`;
            }
            e.target.remove();
            // e.target.style.display = "none";
        }

    });
}

//refreshes the page when button is clicked to play again
parent = document.getElementById("gameButton");
parent.addEventListener("click", function replay() {
    if (parent.innerText == `Play again?`) {
        // window.sticks();
        window.location.reload();
    }
})

window.addEventListener("load", function start() {
    window.sticks();
})