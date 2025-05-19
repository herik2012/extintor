const canvas = document.getElementById('meme-canvas');
const ctx = canvas.getContext('2d');
const topTextInput = document.getElementById('meme-top-text');
const bottomTextInput = document.getElementById('meme-bottom-text');
const createMemeButton = document.getElementById('criar-meme');
const image = new Image();

image.src = 'https://via.placeholder.com/400x300?text=Meme+Template'; // Placeholder image

function drawMeme() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    const fontSize = canvas.width * 0.1;
    ctx.font = `${fontSize}px Impact`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';

    const topText = topTextInput.value.toUpperCase();
    const bottomText = bottomTextInput.value.toUpperCase();

    ctx.fillText(topText, canvas.width / 2, fontSize);
    ctx.strokeText(topText, canvas.width / 2, fontSize);

    ctx.fillText(bottomText, canvas.width / 2, canvas.height - fontSize / 2);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - fontSize / 2);
}

topTextInput.addEventListener('input', drawMeme);
bottomTextInput.addEventListener('input', drawMeme);
createMemeButton.addEventListener('click', drawMeme);

image.onload = drawMeme; // Draw meme when image loads

// Função para partilhar no Facebook
document.querySelector('.social-icon[title="Partilhar no Facebook"]').addEventListener('click', () => {
    const canvasDataURL = canvas.toDataURL('image/jpeg');
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canvasDataURL)}`;
    window.open(facebookURL, '_blank');
});

// Função para partilhar no Twitter
document.querySelector('.social-icon[title="Partilhar no Twitter"]').addEventListener('click', () => {
    const canvasDataURL = canvas.toDataURL('image/jpeg');
    const tweetText = encodeURIComponent("Confira este meme de jogo!"); // Texto a ser partilhado
    const twitterURL = `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(canvasDataURL)}`;
    window.open(twitterURL, '_blank');
});

// Função para partilhar no Pinterest
document.querySelector('.social-icon[title="Partilhar no Pinterest"]').addEventListener('click', () => {
    const canvasDataURL = canvas.toDataURL('image/jpeg');
    const pinterestURL = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(canvasDataURL)}&media=${encodeURIComponent(canvasDataURL)}&description=${encodeURIComponent("Meme de jogo personalizado")}`;
    window.open(pinterestURL, '_blank');
});
