const languageBtn = document.getElementById("languageBtn");

let currentLang = "en";

languageBtn.addEventListener("click", () => {

    if (currentLang === "en") {

        document.getElementById("heroDescription").innerHTML =
            "Membangun aplikasi enterprise untuk Retail, Logistik, Keuangan dan Sistem Internal selama lebih dari 7 tahun.";

        languageBtn.innerText = "EN";

        currentLang = "id";

    } else {

        document.getElementById("heroDescription").innerHTML =
            "Building enterprise applications for Retail, Logistics, Finance and Internal Business Systems for more than 7 years.";

        languageBtn.innerText = "ID";

        currentLang = "en";
    }

});

const preview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImage');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentImages = [];
let currentIndex = 0;

// Klik gambar
document.querySelectorAll('.preview-img').forEach(img => {

    img.addEventListener('click', () => {

        // Ambil carousel tempat gambar berada
        const carousel = img.closest('.carousel');

        // Ambil semua gambar dalam carousel tersebut
        currentImages = [...carousel.querySelectorAll('.preview-img')];

        // Cari index gambar yang diklik
        currentIndex = currentImages.indexOf(img);

        showImage();

        preview.classList.add('show');
    });

});

function showImage() {
    previewImg.src = currentImages[currentIndex].src;
}

// Next
nextBtn.addEventListener('click', (e) => {

    e.stopPropagation();

    currentIndex =
        (currentIndex + 1) %
        currentImages.length;

    showImage();

    animateImage('right');
});

// Previous
prevBtn.addEventListener('click', (e) => {

    e.stopPropagation();

    currentIndex =
        (currentIndex - 1 + currentImages.length) %
        currentImages.length;

    showImage();

    animateImage('left');
});

// Klik background untuk close
preview.addEventListener('click', (e) => {

    // Jangan close kalau klik gambar
    if (e.target === previewImg) return;

    preview.classList.remove('show');
});

// Keyboard support
document.addEventListener('keydown', (e) => {

    if (!preview.classList.contains('show'))
        return;

    switch (e.key) {

        case 'ArrowRight':
            currentIndex =
                (currentIndex + 1) %
                currentImages.length;

            showImage();
            animateImage('right');
            break;

        case 'ArrowLeft':
            currentIndex =
                (currentIndex - 1 + currentImages.length) %
                currentImages.length;

            showImage();
            animateImage('left');
            break;

        case 'Escape':
            preview.classList.remove('show');
            break;
    }
});

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    preview.classList.remove('show');
});

function animateImage(direction) {

    previewImg.classList.remove(
        'preview-enter-right',
        'preview-enter-left'
    );

    // force reflow
    void previewImg.offsetWidth;

    previewImg.classList.add(
        direction === 'right'
            ? 'preview-enter-right'
            : 'preview-enter-left'
    );
}