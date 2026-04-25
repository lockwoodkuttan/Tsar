/* =========================================
   TSAR LINEN — Cart System
   Stores items in browser localStorage
   No backend needed for v1
   ========================================= */

(function() {
  'use strict';

  const CART_KEY = 'tsar_cart_v1';

  // ---------- CART STATE ----------
  function getCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
  }

  function addToCart(product) {
    const cart = getCart();
    // Check if same product/size/color already in cart - increase quantity
    const existing = cart.find(item =>
      item.id === product.id &&
      item.size === product.size &&
      item.color === product.color
    );
    if (existing) {
      existing.quantity = parseInt(existing.quantity) + parseInt(product.quantity);
    } else {
      cart.push(product);
    }
    saveCart(cart);
  }

  function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
  }

  function updateQuantity(index, newQty) {
    const cart = getCart();
    const qty = parseInt(newQty);
    if (qty < 50) return; // Enforce MOQ
    cart[index].quantity = qty;
    saveCart(cart);
    renderCart();
  }

  function clearCart() {
    saveCart([]);
    renderCart();
  }

  function getCartTotal() {
    return getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  function getCartCount() {
    return getCart().reduce((sum, item) => sum + parseInt(item.quantity), 0);
  }

  // ---------- UI ----------
  function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = getCartCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  function openCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (!drawer) return;
    renderCart();
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (!drawer) return;
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderCart() {
    const list = document.getElementById('cartItems');
    const summary = document.getElementById('cartSummary');
    const empty = document.getElementById('cartEmpty');
    if (!list) return;

    const cart = getCart();
    if (cart.length === 0) {
      list.innerHTML = '';
      if (empty) empty.style.display = 'block';
      if (summary) summary.style.display = 'none';
      return;
    }

    if (empty) empty.style.display = 'none';
    if (summary) summary.style.display = 'block';

    list.innerHTML = cart.map((item, i) => `
      <div class="cart-item">
        <div class="cart-item-img" style="background:${item.bgColor || '#f1ede2'};">
          ${item.svg || ''}
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p class="cart-item-meta">Size: ${item.size} · Color: ${item.color}</p>
          <p class="cart-item-meta">$${item.price.toFixed(2)} per unit</p>
          <div class="cart-qty-row">
            <label>Qty:</label>
            <input type="number" min="50" step="50" value="${item.quantity}" onchange="window.tsarCart.updateQuantity(${i}, this.value)" />
            <button class="cart-remove" onclick="window.tsarCart.removeFromCart(${i})" title="Remove">&times;</button>
          </div>
          <p class="cart-item-subtotal">Subtotal: <strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
        </div>
      </div>
    `).join('');

    const total = getCartTotal();
    const count = getCartCount();
    document.getElementById('cartTotalAmount').textContent = '$' + total.toFixed(2);
    document.getElementById('cartTotalCount').textContent = count + ' units';
  }

  // ---------- INIT ----------
  document.addEventListener('DOMContentLoaded', updateCartBadge);

  // ---------- EXPORT ----------
  window.tsarCart = {
    add: addToCart,
    open: openCart,
    close: closeCart,
    removeFromCart: removeFromCart,
    updateQuantity: updateQuantity,
    clear: clearCart,
    get: getCart,
    total: getCartTotal,
    count: getCartCount
  };

})();
