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