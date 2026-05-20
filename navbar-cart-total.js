(function () {
  function parsePrice(value) {
    return Number(String(value || "").replace(/[^0-9]/g, "")) || 0;
  }

  function formatPrice(value) {
    return (
      "UYU " +
      new Intl.NumberFormat("es-UY", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value)
    );
  }

  function getCart() {
    try {
      var raw = localStorage.getItem("loop_cart");
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      return [];
    }
  }

  function getCartTotal() {
    var cart = getCart();
    return cart.reduce(function (acc, item) {
      var qty = Math.max(1, Number(item.qty || 1));
      return acc + parsePrice(item.price) * qty;
    }, 0);
  }

  function updateNavbarCartTotal() {
    var total = getCartTotal();
    var nodes = document.querySelectorAll("[data-cart-total]");
    nodes.forEach(function (node) {
      node.textContent = formatPrice(total);
    });
  }

  window.updateNavbarCartTotal = updateNavbarCartTotal;

  document.addEventListener("DOMContentLoaded", updateNavbarCartTotal);
  window.addEventListener("storage", function (event) {
    if (event.key === "loop_cart") {
      updateNavbarCartTotal();
    }
  });
  window.addEventListener("loop-cart-updated", updateNavbarCartTotal);
})();
