const cartItems = [
  {
    id: 1,
    name: "Chaleco Lisy",
    sku: "Art. 226210105006-027-03",
    size: "Talle 3",
    unitPrice: 1990,
    discount: 656.7,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=140&q=80"
  },
  {
    id: 2,
    name: "Cinto Klein",
    sku: "Art. 226112207301-002-01",
    size: "Talle unico",
    unitPrice: 590,
    discount: 194.7,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1601924928580-3e5d5f1f8d89?auto=format&fit=crop&w=140&q=80"
  },
  {
    id: 3,
    name: "Billetera Benny",
    sku: "Art. 226113807107-002-01",
    size: "Talle unico",
    unitPrice: 490,
    discount: 161.7,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=140&q=80"
  }
];

const listElement = document.getElementById("cart-list");
const subtotalElement = document.getElementById("subtotal");
const schemaCartElement = document.getElementById("schema-cart");

const formatCurrency = (value) =>
  `UYU ${new Intl.NumberFormat("es-UY", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)}`;

const formatAmount = (value) =>
  new Intl.NumberFormat("es-UY", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);

const updateSchemaCart = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Productos en carrito",
    numberOfItems: cartItems.length,
    itemListElement: cartItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: item.name,
        image: item.image,
        sku: item.sku,
        offers: {
          "@type": "Offer",
          priceCurrency: "UYU",
          price: Number((item.unitPrice - item.discount).toFixed(2)),
          availability: "https://schema.org/InStock"
        }
      }
    }))
  };

  schemaCartElement.textContent = JSON.stringify(schema);
};

const updateQuantity = (id, delta) => {
  const product = cartItems.find((item) => item.id === id);
  if (!product) return;

  const nextQuantity = product.quantity + delta;
  product.quantity = nextQuantity < 1 ? 1 : nextQuantity;
  renderCart();
};

const renderCart = () => {
  listElement.innerHTML = "";

  cartItems.forEach((item) => {
    const lineTotal = (item.unitPrice - item.discount) * item.quantity;

    const row = document.createElement("li");
    row.className =
      "grid grid-cols-1 gap-4 px-4 py-4 md:grid-cols-[1.7fr_0.7fr_1fr] md:items-center md:gap-3 md:px-6";
    row.innerHTML = `
      <article class="flex items-center gap-3">
        <img
          src="${item.image}"
          alt="${item.name}"
          class="h-20 w-14 rounded-md border border-line object-cover bg-white"
          loading="lazy"
        />
        <div>
          <h3 class="font-display text-base font-semibold uppercase tracking-wide">${item.name}</h3>
          <p class="mt-1 text-xs leading-relaxed text-muted">${item.sku}<br />${item.size}</p>
          <p class="mt-1 text-xs text-muted md:hidden">Precio unitario: ${formatCurrency(item.unitPrice)}</p>
        </div>
      </article>
      <div class="flex items-center md:justify-center">
        <div class="inline-flex items-center overflow-hidden rounded-md border border-line bg-white" aria-label="Cantidad de ${item.name}">
          <button
            type="button"
            data-action="decrease"
            data-id="${item.id}"
            aria-label="Restar cantidad de ${item.name}"
            class="h-8 w-8 text-lg text-ink transition hover:bg-surface"
          >
            -
          </button>
          <span class="w-10 text-center text-sm font-semibold">${item.quantity}</span>
          <button
            type="button"
            data-action="increase"
            data-id="${item.id}"
            aria-label="Sumar cantidad de ${item.name}"
            class="h-8 w-8 text-lg text-ink transition hover:bg-surface"
          >
            +
          </button>
        </div>
      </div>
      <div class="text-left md:text-right">
        <p class="text-xs uppercase tracking-wide text-muted">Precio unitario</p>
        <p class="text-base font-semibold text-ink">${formatCurrency(item.unitPrice - item.discount)}</p>
        <p class="mt-1 text-xs uppercase tracking-wide text-muted">Total por producto</p>
        <p class="font-display text-lg font-bold text-ink">${formatCurrency(lineTotal)}</p>
      </div>
    `;

    listElement.appendChild(row);
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.unitPrice - item.discount) * item.quantity,
    0
  );

  subtotalElement.textContent = formatCurrency(subtotal);
  updateSchemaCart();
};

listElement.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;

  const action = target.dataset.action;
  const id = Number(target.dataset.id);
  if (!id || !action) return;

  if (action === "decrease") updateQuantity(id, -1);
  if (action === "increase") updateQuantity(id, 1);
});

renderCart();
