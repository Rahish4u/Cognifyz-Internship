function openModal(imgElement) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("fullImage").src = imgElement.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
