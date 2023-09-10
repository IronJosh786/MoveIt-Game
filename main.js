// Function to reload the page
function reloadPage() {
    location.reload(); // Reload the page
}

// Function to check the orientation and reload the page if it changes
function checkOrientationAndReload() {
    const portraitOrientation = window.matchMedia('(orientation: portrait)');
    let currentOrientation = portraitOrientation.matches ? 'portrait' : 'landscape';

    // Function to handle orientation change
    function handleOrientationChange() {
        const newOrientation = portraitOrientation.matches ? 'portrait' : 'landscape';

        if (newOrientation !== currentOrientation) {
            currentOrientation = newOrientation;
            reloadPage();
        }
    }

    // Add an event listener for orientation change
    portraitOrientation.addEventListener('change', handleOrientationChange);

    // Check the initial orientation
    handleOrientationChange();
}

// Check the initial orientation and start checking for changes
checkOrientationAndReload();

let box = document.querySelector(".inner");

window.addEventListener('load', () =>{
    box.style.position = 'absolute';
    box.style.left = 0;
    box.style.bottom = 0;
});

let innerWidth = box.offsetWidth;

function moveUp() {
    if(parseInt(box.style.bottom)===innerWidth*4) {
        return;
    }
    box.style.bottom = parseInt(box.style.bottom) + innerWidth + 'px';
}

function moveLeft() {
    if(parseInt(box.style.left)===0) {
        return;
    }
    box.style.left = parseInt(box.style.left) - innerWidth + 'px';
}

function moveDown() {
    if(parseInt(box.style.bottom)===0) {
        return;
    }
    box.style.bottom = parseInt(box.style.bottom) - innerWidth + 'px';
}

function moveRight() {
    if(parseInt(box.style.left)===innerWidth*4) {
        return;
    }
    box.style.left = parseInt(box.style.left) + innerWidth + 'px';
}

document.addEventListener("keydown", function(event){
    let key = event.key;
    move(key);
});

function move(key) {
    switch(key) {
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowRight":
            moveRight();
            break;
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
    }
}

document.querySelector(".up").addEventListener("click", moveUp);

document.querySelector(".left").addEventListener("click", moveLeft);

document.querySelector(".down").addEventListener("click", moveDown);

document.querySelector(".right").addEventListener("click", moveRight);
