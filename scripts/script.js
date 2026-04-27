function openLightbox(src) {
  var box = document.getElementById("lightbox");
  var img = document.getElementById("lightbox-img");

  box.style.display = "flex";
  img.src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
