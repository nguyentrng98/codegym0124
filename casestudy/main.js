
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(name, price) {
        if (!name || !price) {
            alert("Vui lòng điền đầy đủ thông tin sản phẩm.");
            return;
        }
        const product = new Product(name, price);
        this.products.push(product);
        this.sortProducts();
    }

    renderProducts() {
        const productList = document.getElementById("productList");
        productList.innerHTML = '';
        this.products.forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><button onclick="deleteProduct(this)">Xóa</button></td>
            `;
            productList.appendChild(row);
        });
    }

    sortProducts() {
        this.products.sort((a, b) => a.price - b.price);
        this.renderProducts();
    }

    filterProducts(searchTerm) {
        const productList = document.getElementById("productList");
        const products = productList.getElementsByTagName("tr");
        for (let i = 0; i < products.length; i++) {
            const productName = products[i].getElementsByTagName("td")[0];
            if (productName) {
                const textValue = productName.textContent || productName.innerText;
                if (textValue.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    products[i].style.display = "";
                } else {
                    products[i].style.display = "none";
                }
            }
        }
    }
}

const productManager = new ProductManager();

window.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Táo', price: 20000 },
        { name: 'Cam', price: 25000 },
        { name: 'Dâu', price: 30000 },
        { name: 'xoài', price: 55000 },
        { name: 'bưởi', price: 15000 },
        { name: 'dưa hấu', price: 33000 },
        { name: 'quít', price: 11000 }
    ];

    products.forEach(product => {
        productManager.addProduct(product.name, product.price);
    });
});

document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    productManager.addProduct(productName, productPrice);
    document.getElementById("productForm").reset();
});



document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.trim().toLowerCase();
    productManager.filterProducts(searchTerm);
});

function deleteProduct(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}