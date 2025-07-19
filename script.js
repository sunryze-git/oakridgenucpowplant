  const heroImages = [
    "images/banners/banner1.webp",
    "images/banners/banner2.webp",
    "images/banners/banner3.png",
    "images/banners/banner4.webp",
    "images/banners/banner5.webp",
    "images/banners/banner6.webp"
  ];

  let heroIndex = 0;
  const heroImg = document.getElementById("hero-img");

  setInterval(() => {
    heroImg.style.opacity = 0;
    setTimeout(() => {
      heroIndex = (heroIndex + 1) % heroImages.length;
      heroImg.src = heroImages[heroIndex];
      heroImg.style.opacity = 1;
    }, 1000);
  }, 5000);


  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");

    document.querySelectorAll(".enlargeable").forEach(img => {
      img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.classList.add("show");
      });
    });

    modal.addEventListener("click", () => {
      modal.classList.remove("show");
      modalImg.src = "";
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.emergency-nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = window.innerHeight / 2 - target.offsetHeight / 2;
          const top = target.offsetTop - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  });
  
