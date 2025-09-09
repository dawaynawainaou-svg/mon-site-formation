// script.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('paymentModal');
    const closeButton = document.querySelector('.close-button');
    const paymentAmountSpan = document.getElementById('payment-amount');

    // Mettre à jour le numéro de téléphone et le nom dans le HTML
    document.getElementById('mm-number').textContent = '651690481'; // REMPLACE PAR TON NUMERO
    document.querySelector('.whatsapp-button').href = 'https://wa.me/237651690481?text=Bonjour,%20je%20viens%20de%20faire%20un%20paiement%20pour%20une%20formation.'; // REMPLACE PAR TON NUMERO

    const productPrices = {
        'buy-ecommerce': 50000,
        'buy-ia': 15000,
        'buy-produits de nettoyage': 40000,
        'buy-élevage de poulets de chair': 35000
        // Ajoute ici les autres produits
    };

    const buyButtons = document.querySelectorAll('.cta-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = e.target.id;
            const price = productPrices[productId];
            
            if (price) {
                paymentAmountSpan.textContent = price;
                modal.style.display = 'block';
            }
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});