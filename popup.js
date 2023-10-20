function openPopup() {
    document.getElementById('popup').style.right = '0';
}

function closePopup() {
    document.getElementById('popup').style.right = '-500px';
}

window.onload = openPopup;