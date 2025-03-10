document.addEventListener("DOMContentLoaded", function () {
    const botaoWhatsApp = document.querySelector(".whatsapp-button");
    
    botaoWhatsApp.addEventListener("mouseover", function () {
        botaoWhatsApp.style.backgroundColor = "#25D366"; // Cor verde do WhatsApp
    });

    botaoWhatsApp.addEventListener("mouseout", function () {
        botaoWhatsApp.style.backgroundColor = "green"; // Volta ao verde original
    });
});
