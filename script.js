const defaultItems = ["watermelon", "grape", "carrot", "steak"];

const tagList = document.getElementById("tag-list");
const basketItemsContainer = document.getElementById("basket-items");
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");

const basketItems = new Map();

function createTagElement(label, { isBasketItem = false } = {}) {
  const tag = document.createElement("button");
  tag.type = "button";
  tag.className = `tag${isBasketItem ? " tag--basket" : ""}`;
  tag.textContent = label;
  tag.dataset.label = label.toLowerCase();
  return tag;
}

function renderAvailableTags() {
  defaultItems.forEach((item) => {
    const tag = createTagElement(item);
    tag.addEventListener("click", () => addItemToBasket(item));
    tagList.appendChild(tag);
  });
}

function renderBasket() {
  basketItemsContainer.innerHTML = "";

  if (basketItems.size === 0) {
    const placeholder = document.createElement("p");
    placeholder.textContent = "Your basket is empty. Click an item to add it!";
    placeholder.className = "basket__placeholder";
    basketItemsContainer.appendChild(placeholder);
    return;
  }

  basketItems.forEach((label) => {
    const tag = createTagElement(label, { isBasketItem: true });
    tag.addEventListener("click", () => removeItemFromBasket(label));
    basketItemsContainer.appendChild(tag);
  });
}

function addItemToBasket(item) {
  const normalized = item.trim();
  if (!normalized) {
    return;
  }

  const key = normalized.toLowerCase();
  if (basketItems.has(key)) {
    return;
  }

  basketItems.set(key, normalized);
  renderBasket();
}

function removeItemFromBasket(item) {
  const key = item.toLowerCase();
  if (basketItems.has(key)) {
    basketItems.delete(key);
    renderBasket();
  }
}

itemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = itemInput.value;
  addItemToBasket(value);
  itemInput.value = "";
  itemInput.focus();
});

renderAvailableTags();
renderBasket();
