const noBtn = document.querySelector(".no-btn");
const gifImage = document.querySelector(".gif");
const flippingText = document.querySelector(".flipping-text");
const btnGroup = document.querySelector(".btn-group");

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

const yesBtn = document.querySelector(".yes-btn");

yesBtn.addEventListener("click", () => {
    flippingText.textContent = "";
    gifImage.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    btnGroup.style.display = "none"; // Hide the button group after clicking "Yes"
});


