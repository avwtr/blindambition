const gridContainer = document.querySelector(".grid-container");
const gifPath = "giphy.gif";

function createGifGridItem() {
    const gridItem = document.createElement("div");
    gridItem.classList.add("gif-grid-item");
    gridItem.style.backgroundImage = `url(${gifPath})`;
    return gridItem;
}

function fillBackgroundWithGifs() {
    gridContainer.innerHTML = '';
    const rows = Math.ceil(window.innerHeight / 100);
    const columns = Math.ceil(window.innerWidth / 100);
    const totalGifs = rows * columns;

    for (let i = 0; i < totalGifs; i++) {
        gridContainer.appendChild(createGifGridItem());
    }
}

fillBackgroundWithGifs();
window.addEventListener("resize", fillBackgroundWithGifs);
const purchaseButton = document.querySelector('.purchase-button');
const colors = ['red', 'green', 'yellow', 'blue'];
let currentColorIndex = 0;

setInterval(() => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    purchaseButton.style.backgroundColor = colors[currentColorIndex];
}, 1000);
