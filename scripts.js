const gridContainer = document.querySelector(".grid-container");
const gifPath = "giphy.gif";
const productImages = document.querySelectorAll(".product-image");

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

function toggleImageEnlargement(e) {
    e.target.classList.toggle("enlarged");
}

fillBackgroundWithGifs();
window.addEventListener("resize", fillBackgroundWithGifs);

// Add event listeners to product images
productImages.forEach(image => {
    image.addEventListener("click", toggleImageEnlargement);
});
const purchaseButton = document.querySelector('.sellfy-buy-button.purchase-button');
const colors = ['red', 'green', 'yellow', 'blue'];
let currentColorIndex = 0;

function changeButtonColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    purchaseButton.style.backgroundColor = colors[currentColorIndex];
}

fillBackgroundWithGifs();
window.addEventListener("resize", fillBackgroundWithGifs);

// Add event listeners to product images
productImages.forEach(image => {
    image.addEventListener("click", toggleImageEnlargement);
});

// Set the interval for the color-changing effect on the purchase button
setInterval(changeButtonColor, 1000);
