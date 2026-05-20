const I18N_STORAGE_KEY = "loop_language";
const I18N_DEFAULT_LANGUAGE = "fr";
const I18N_SUPPORTED_LANGUAGES = ["fr", "es"];

const I18N_TRANSLATIONS = {
  fr: {
    "navbar.search_label": "Rechercher des produits",
    "navbar.search_placeholder": "RECHERCHER",
    "navbar.account_aria": "Mon compte",
    "navbar.cart_aria": "Voir le panier",
    "navbar.language_label": "Langue",

    "home.hero_title_line1": "Style urbain sans effort",
    "home.hero_title_line2": "Nouveautes et essentiels.",
    "home.hero_desc": "Chaussures, chemises, pantalons et accessoires pensés pour allier tendance et confort au quotidien.",
    "home.hero_cta": "Voir la collection",
    "home.new_arrivals": "Nouveautes",
    "home.best_sellers": "Meilleures ventes",
    "home.see_all": "Voir tout",
    "home.product.derby": "Chaussure Derby Marron",
    "home.product.shirt_brown": "Chemise Marron Rayee",
    "home.product.jeans_dark": "Jean Large Fonce",
    "home.product.belt_black": "Ceinture Noire",
    "home.product.boots_black": "Bottes en Cuir Noires",
    "home.product.sneakers_sport": "Baskets Sport",
    "home.product.sneakers_brown": "Sneaker Urbaine Marron",
    "home.product.bag_black": "Sac Bandouliere Noir",
    "product.name.prod-camisa1": "Chemise Marron Rayee",
    "product.name.prod-camisa2": "Chemise a Carreaux Marron",
    "product.name.prod-camisa3": "Blouse Bleu Ciel Plissee",
    "product.name.prod-camisa4": "Chemise Oversize Noire Brillante",
    "product.name.prod-camisa5": "Chemise Imprimee",
    "product.name.prod-pantalon1": "Pantalon Marron Droit",
    "product.name.prod-pantalon2": "Pantalon Bleu Imprime",
    "product.name.prod-pantalon3": "Jean Large Fonce",
    "product.name.prod-pantalon4": "Pantalon Large Bleu Moyen",
    "product.name.prod-pantalon5": "Pantalon Ivoire",
    "product.name.prod-accesorio1": "Boucle d'Oreille Doree",
    "product.name.prod-accesorio2": "Bracelet Dore",
    "product.name.prod-accesorio3": "Ceinture Noire",
    "product.name.prod-accesorio4": "Sac Bandouliere Noir",
    "product.name.prod-accesorio5": "Echarpe Tricotee",
    "product.name.prod-calzado1": "Botte Texane Noire",
    "product.name.prod-calzado2": "Chaussure Derby Marron",
    "product.name.prod-calzado3": "Bottes en Cuir Noires",
    "product.name.prod-calzado4": "Baskets Sport",
    "product.name.prod-calzado5": "Sneaker Urbaine Marron",

    "catalog.title": "Catalogue de la boutique",
    "catalog.filters": "Filtres",
    "catalog.category": "Categorie",
    "catalog.size": "Taille",
    "catalog.size_help": "Vous pouvez selectionner plusieurs tailles.",
    "catalog.show_favorites": "Afficher seulement les favoris",
    "catalog.products": "Produits",
    "catalog.all": "Toutes",
    "catalog.product_hover_hint": "Survolez pour voir la vue arriere",

    "cart.order_detail": "Details de la commande",
    "cart.empty": "Il n'y a pas encore de produits dans le panier.",
    "cart.add_bag": "Ajouter un sac",
    "cart.remove_item": "Supprimer",
    "cart.unit_amount": "Montant unitaire",
    "cart.total_amount": "Montant total",
    "cart.ref_label": "Ref.",
    "cart.size_label": "Taille",
    "cart.size_unique": "Unique",
    "cart.gift_intro": "Nous envoyons les sacs que vous voulez pour preparer vos cadeaux.",
    "cart.gift_step_1": "Selectionnez \"Ajouter un sac\".",
    "cart.gift_step_2": "Modifiez le nombre qui apparait dans - 1 +.",
    "cart.gift_step_3": "Indiquez le nombre de sacs dont vous avez besoin.",
    "cart.gift_tickets": "Nous incluons vos tickets d'echange.",
    "cart.gift_stock_note": "*Le design peut varier selon le stock.",

    "product.back_to_list": "Retour a la liste",
    "product.size": "Taille",
    "product.quantity": "Quantite",
    "product.add_to_cart": "Ajouter au panier",
    "product.description": "Description",
    "product.materials": "Materiaux :",
    "product.recommended_use": "Usage recommande :",

    "payment.title": "Formulaire de paiement",
    "payment.name": "Nom",
    "payment.card": "Carte",
    "payment.expiry": "Expiration",
    "payment.pay": "Payer",

    "footer.categories": "Categories",
    "footer.shoes": "Chaussures",
    "footer.shirts": "Chemises",
    "footer.pants": "Pantalons",
    "footer.accessories": "Accessoires",
    "footer.legal": "Mentions legales",
    "footer.terms": "Conditions generales",
    "footer.privacy": "Politique de confidentialite",
    "footer.about": "A propos de la marque",
    "footer.contact": "Contact",
    "footer.hours": "Lun a Ven 9:00 - 18:00",
    "footer.rights": "© 2026 Loop. Tous droits reserves."
  },
  es: {
    "navbar.search_label": "Buscar productos",
    "navbar.search_placeholder": "BUSCAR",
    "navbar.account_aria": "Mi cuenta",
    "navbar.cart_aria": "Ver carrito de compras",
    "navbar.language_label": "Idioma",

    "home.hero_title_line1": "Estilo urbano sin esfuerzo",
    "home.hero_title_line2": "Lo nuevo y lo esencial.",
    "home.hero_desc": "Calzado, camisas, pantalones y accesorios diseñados para fusionar tendencia y comodidad en tu dia a dia.",
    "home.hero_cta": "Ver coleccion",
    "home.new_arrivals": "Nuevos lanzamientos",
    "home.best_sellers": "Mas vendidos",
    "home.see_all": "Ver todo",
    "home.product.derby": "Zapato Derby Marron",
    "home.product.shirt_brown": "Camisa Marron Rayada",
    "home.product.jeans_dark": "Jeans Anchos Oscuros",
    "home.product.belt_black": "Cinturon Negro",
    "home.product.boots_black": "Botas de Cuero Negras",
    "home.product.sneakers_sport": "Zapatillas Deportivas",
    "home.product.sneakers_brown": "Zapatilla Urbana Marron",
    "home.product.bag_black": "Bandolera Negra",
    "product.name.prod-camisa1": "Camisa Marron Rayada",
    "product.name.prod-camisa2": "Camisa de Cuadros Marrones",
    "product.name.prod-camisa3": "Blusa Celeste Plisada",
    "product.name.prod-camisa4": "Camisa Oversize Negra con Brillo",
    "product.name.prod-camisa5": "Camisa con Estampado",
    "product.name.prod-pantalon1": "Pantalon Marron Recto",
    "product.name.prod-pantalon2": "Pantalon Estampado Azul",
    "product.name.prod-pantalon3": "Jeans Anchos Oscuros",
    "product.name.prod-pantalon4": "Pantalon Ancho Azul Medio",
    "product.name.prod-pantalon5": "Pantalon Marfil",
    "product.name.prod-accesorio1": "Caravana dorada",
    "product.name.prod-accesorio2": "Brazalete Dorado",
    "product.name.prod-accesorio3": "Cinturon Negro",
    "product.name.prod-accesorio4": "Bandolera Negra",
    "product.name.prod-accesorio5": "Bufanda tejida",
    "product.name.prod-calzado1": "Bota Texana Negra",
    "product.name.prod-calzado2": "Zapato Derby Marron",
    "product.name.prod-calzado3": "Botas de Cuero Negras",
    "product.name.prod-calzado4": "Zapatillas Deportivas",
    "product.name.prod-calzado5": "Zapatilla Urbana Marron",

    "catalog.title": "Catalogo de la Tienda",
    "catalog.filters": "Filtros",
    "catalog.category": "Categoria",
    "catalog.size": "Talla",
    "catalog.size_help": "Puedes seleccionar varias tallas a la vez.",
    "catalog.show_favorites": "Mostrar solo favoritos",
    "catalog.products": "Productos",
    "catalog.all": "Todas",
    "catalog.product_hover_hint": "Pasa el cursor para ver la vista trasera",

    "cart.order_detail": "Detalle del pedido",
    "cart.empty": "Aun no hay productos en el carrito.",
    "cart.add_bag": "Agregar bolsa",
    "cart.remove_item": "Eliminar",
    "cart.unit_amount": "Importe unitario",
    "cart.total_amount": "Importe total",
    "cart.ref_label": "Art.",
    "cart.size_label": "Talle",
    "cart.size_unique": "Unica",
    "cart.gift_intro": "Te enviamos las bolsas que quieras para armar tus regalos.",
    "cart.gift_step_1": "Selecciona \"Agregar bolsa\".",
    "cart.gift_step_2": "Edita el numero que aparece en - 1 +.",
    "cart.gift_step_3": "Indica el numero de bolsa que necesitas.",
    "cart.gift_tickets": "Incluimos tus tickets de cambio.",
    "cart.gift_stock_note": "*El diseno puede variar segun stock.",

    "product.back_to_list": "Volver al listado",
    "product.size": "Talla",
    "product.quantity": "Cantidad",
    "product.add_to_cart": "Agregar al carrito",
    "product.description": "Descripcion",
    "product.materials": "Materiales:",
    "product.recommended_use": "Uso recomendado:",

    "payment.title": "Formulario de pago",
    "payment.name": "Nombre",
    "payment.card": "Tarjeta",
    "payment.expiry": "Vencimiento",
    "payment.pay": "Pagar",

    "footer.categories": "Categorias",
    "footer.shoes": "Calzado",
    "footer.shirts": "Camisas",
    "footer.pants": "Pantalones",
    "footer.accessories": "Accesorios",
    "footer.legal": "Legal",
    "footer.terms": "Terminos y condiciones",
    "footer.privacy": "Politica de privacidad",
    "footer.about": "Sobre la marca",
    "footer.contact": "Contacto",
    "footer.hours": "Lun a Vie 9:00 - 18:00",
    "footer.rights": "© 2026 Loop. Todos los derechos reservados."
  }
};

function normalizeLanguage(lang) {
  if (typeof lang !== "string") return I18N_DEFAULT_LANGUAGE;
  return I18N_SUPPORTED_LANGUAGES.includes(lang) ? lang : I18N_DEFAULT_LANGUAGE;
}

function getStoredLanguage() {
  try {
    return localStorage.getItem(I18N_STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function storeLanguage(lang) {
  try {
    localStorage.setItem(I18N_STORAGE_KEY, lang);
  } catch (error) {
    // localStorage puede no estar disponible en modo privado.
  }
}

function translateKey(key, lang) {
  const selected = I18N_TRANSLATIONS[lang] || I18N_TRANSLATIONS[I18N_DEFAULT_LANGUAGE];
  const fallback = I18N_TRANSLATIONS.es;
  return selected[key] || fallback[key] || key;
}

function applyTextTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    element.textContent = translateKey(key, lang);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const rawValue = element.dataset.i18nAttr;
    if (!rawValue) return;

    rawValue.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((item) => item && item.trim());
      if (!attr || !key) return;
      element.setAttribute(attr, translateKey(key, lang));
    });
  });
}

function setLanguage(lang) {
  const normalized = normalizeLanguage(lang);
  document.documentElement.lang = normalized;
  applyTextTranslations(normalized);

  document.querySelectorAll("[data-language-select]").forEach((select) => {
    if (select instanceof HTMLSelectElement) {
      select.value = normalized;
    }
  });

  storeLanguage(normalized);
  window.dispatchEvent(new CustomEvent("loop:language-changed", { detail: { language: normalized } }));
}

function initializeI18n() {
  const initialLanguage = normalizeLanguage(getStoredLanguage() || I18N_DEFAULT_LANGUAGE);

  document.querySelectorAll("[data-language-select]").forEach((select) => {
    if (!(select instanceof HTMLSelectElement)) return;

    select.addEventListener("change", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLSelectElement)) return;
      setLanguage(target.value);
    });
  });

  setLanguage(initialLanguage);
}

window.loopI18n = {
  defaultLanguage: I18N_DEFAULT_LANGUAGE,
  supportedLanguages: [...I18N_SUPPORTED_LANGUAGES],
  translateKey,
  setLanguage,
  applyTranslations: () => applyTextTranslations(normalizeLanguage(getStoredLanguage() || I18N_DEFAULT_LANGUAGE))
};

document.addEventListener("DOMContentLoaded", initializeI18n);
