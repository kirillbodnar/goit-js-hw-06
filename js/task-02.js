const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");

const addIngredient = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.classList.add("item");
    ingredientEl.textContent = ingredient;
    return ingredientEl;
  });
};

const ingredientsToAppend = addIngredient(ingredients);
ingredientList.append(...ingredientsToAppend);
