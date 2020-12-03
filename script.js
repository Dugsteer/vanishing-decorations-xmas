// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById('sidebar');
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById('info');
const ball = document.getElementById('ball');
const blue = window.matchMedia("(max-width: 800px)");
const cheers = new Audio('sounds/sleighbells.wav');

function deactivate(){
    ball.classList.remove('action');
}

function kickball(){
    ball.classList.add('action');
    cheers.play();
    setTimeout(deactivate, 3500);
}
//     setInterval(switchpic, 2000);

//Play applause 

function clapping(){
    const claps = new Audio("sounds/sleighbells.wav");
    claps.play();
}

// Show and hide about info
function show(){info.classList.toggle('xxc');};
function unshow(){info.classList.remove('xxc');};

//Center the loader wherever the page is
function checkForTop (){loader.style.top = (window.pageYOffset) + "px";}
checkForTop();

//Manage the loader
function stopLoader() {loader.classList.add("stop");}
function startLoader(){loader.classList.remove("stop"); setTimeout(stopLoader, 1000);}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {if (blue.matches) {sidey.classList.remove("block");}}
function toggler() {sidey.classList.toggle("block");}
myFunction(blue);

//Change main pic

// setInterval(picChanger, 5000);
// picChanger();

// function picChanger(){
//   mainpic.innerHTML === '<img src="img/froggy.png" alt="decorative">' ? mainpic.innerHTML = '<img src="img/froggy2.png" alt="decorative">' :  mainpic.innerHTML ='<img src="img/froggy.png" alt="decorative">'
// }

//FLIP CARDS

const id1 = document.getElementById('id1');
const id2 = document.getElementById('id2');
const id3 = document.getElementById('id3');
const id4 = document.getElementById('id4');
const id5 = document.getElementById('id5');
const id6 = document.getElementById('id6');
const id7 = document.getElementById('id7');
const id8 = document.getElementById('id8');
const id9 = document.getElementById('id9');
const id10 = document.getElementById('id10');
const id11 = document.getElementById('id11');
const id12 = document.getElementById('id12');
const id13 = document.getElementById('id13');
const id14 = document.getElementById('id14');
const id15 = document.getElementById('id15');
const santa = document.querySelector('.santa');
const ghost = document.querySelector('.ghost');
const hoho = new Audio('sounds/hohoho.mp3');
const laugh = new Audio('sounds/evil-laugh.wav');
const what = document.querySelector('.what');

const treeArray = ['angel.svg', 'bell.svg', 'candle.svg', 'card.svg', 'candy.svg', 'decoration.svg', 'hat.svg', 'sleigh.svg', 'lights.svg', 'mitten.svg', 'present.svg', 'santa.svg', 'star.svg', 'toys.svg', 'stocking.svg'];
const numberArray = ['id1', 'id2', 'id3', 'id4', 'id5', 'id6', 'id7', 'id8', 'id9', 'id10', 'id11', 'id12', 'id13', 'id14', 'id15'];

let t=0;
let green;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

function decorate(){
    
    shuffleArray(treeArray);

        id1.innerHTML = `<img src='img/${treeArray[0]}'></img>`;
        id2.innerHTML = `<img src='img/${treeArray[1]}'></img>`;
        id3.innerHTML = `<img src='img/${treeArray[2]}'></img>`;
        id4.innerHTML = `<img src='img/${treeArray[3]}'></img>`;
        id5.innerHTML = `<img src='img/${treeArray[4]}'></img>`;
        id6.innerHTML = `<img src='img/${treeArray[5]}'></img>`;
        id7.innerHTML = `<img src='img/${treeArray[6]}'></img>`;
        id8.innerHTML = `<img src='img/${treeArray[7]}'></img>`;
        id9.innerHTML = `<img src='img/${treeArray[8]}'></img>`;
        id10.innerHTML = `<img src='img/${treeArray[9]}'></img>`;
        id11.innerHTML = `<img src='img/${treeArray[10]}'></img>`;
        id12.innerHTML = `<img src='img/${treeArray[11]}'></img>`;
        id13.innerHTML = `<img src='img/${treeArray[12]}'></img>`;
        id14.innerHTML = `<img src='img/${treeArray[13]}'></img>`;
        id15.innerHTML = `<img src='img/${treeArray[14]}'></img>`;
    shuffleArray(treeArray);
    shuffleArray(numberArray);
    let good = false;
}

function loseOne(){
     if (good === true){
    coal = numberArray[0];
green = window[coal].innerHTML;
  window[coal].innerHTML = '<img src="img/coal.svg"></img>';
  numberArray.shift();
     if (numberArray.length === 0){
         santa.classList.remove('vanish');
         setTimeout(santagone, 4000);
         hoho.play();
         ghost.classList.add('vanish');
         setTimeout(reloader, 6000);
    }
}
}

function showItem(){
    what.innerHTML = `<h3 style="width: 188px; text-align: center;">${green.slice(14, -6)}</h3>`;
};

santagone = ()=> santa.classList.add('santavanisher');
reloader =()=> window.location.reload();

decorate();

function startMe(){
    good = true;
    laugh.play();
    ghost.classList.add('animate');
    startMe=false;
  
}

