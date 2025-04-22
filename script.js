// إضافة للسلة
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = {
      name: name,
      price: price,
      image: image
    };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("تمت إضافة المنتج للسلة! ✅");
  }
  
  // عرض السلة في cart.html
  function showCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");
    let total = 0;
  
    if (cartItems.length === 0) {
      container.innerHTML = "<p>السلة فارغة 😢</p>";
      return;
    }
  
    cartItems.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width: 100px;">
        <h4>${item.name}</h4>
        <p>${item.price} جنيه</p>
        <button onclick="removeItem(${index})">إزالة</button>
      `;
      container.appendChild(div);
      total += item.price;
    });
  
    totalElement.innerText = total;
  }
  
  // إزالة عنصر من السلة
  function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // نعيد تحميل الصفحة بعد الحذف
  }
  
  // إتمام الشراء
  function checkout() {
    alert("تم إتمام الطلب! ✅");
    localStorage.removeItem("cart");
    location.reload();
  }
  
  // تحميل محتوى السلة لما الصفحة تفتح
  if (window.location.pathname.includes("cart.html")) {
    showCart();
  }
  