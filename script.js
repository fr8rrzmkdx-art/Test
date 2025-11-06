let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

function renderCart() {
    const list = document.getElementById('cartItems');
    list.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        list.innerHTML += `<li>${item.name} - ${item.price} €</li>`;
    });

    document.getElementById('totalPrice').innerHTML = "Total : " + total + " €";
    if (cart.length > 0) {
        document.getElementById('checkoutBtn').classList.remove('hidden');
    }
}

function showOrderForm() {
    document.getElementById('orderForm').classList.remove('hidden');
}

function sendOrder() {
    const data = {
        cart: cart,
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        zip: document.getElementById("zip").value
    };

    fetch("https://webhook.site/5658601c-1f61-42e0-a247-7ff08d20ca4c", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(() => alert("Commande envoyée ✅"));
}