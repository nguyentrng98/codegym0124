// Add products programmatically
window.addEventListener('DOMContentLoaded', (event) => {
    // Example products data
    const products = [
        { name: 'Táo', price: 20000 },
        { name: 'Cam', price: 25000 },
        { name: 'Dâu', price: 30000 },
        { name: 'xoài', price: 55000 },
        { name: 'bưởi', price: 15000 },
        { name: 'dưa hấu', price: 33000 },
        { name: 'quít', price: 11000 }
    ];

    // Add each product to the table
    products.forEach(product => {
        addProduct(product.name, product.price);
    });
});
document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    addProduct(productName, productPrice);
    document.getElementById("productForm").reset();
});

function addProduct(name, price) {
    const productList = document.getElementById("productList");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${price}</td>
        <td><button onclick="deleteProduct(this)">Xóa</button></td>
    `;
    productList.appendChild(row);
}

function sortProducts() {
    const productList = document.getElementById("productList");
    const rows = Array.from(productList.querySelectorAll('tr'));
    rows.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('td:nth-child(2)').textContent);
        const priceB = parseFloat(b.querySelector('td:nth-child(2)').textContent);
        return priceA - priceB;
    });
    productList.innerHTML = '';
    rows.forEach(row => {
        productList.appendChild(row);
    });
}
document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.trim().toLowerCase();
    const productList = document.getElementById("productList");
    const products = productList.getElementsByTagName("tr");
    for (let i = 0; i < products.length; i++) {
        const productName = products[i].getElementsByTagName("td")[0];
        if (productName) {
            const textValue = productName.textContent || productName.innerText;
            if (textValue.toLowerCase().indexOf(searchTerm) > -1) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }
    }
});
function deleteProduct(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}