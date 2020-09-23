const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// const ingredient = ingredients[0];
// console.log(ingredient);
// const itemRef = document.createElement("li");
// itemRef.textContent = ingredients[0];
// console.log(itemRef);

// 1st Method
// const ingredientsContainer = document.querySelector("#ingredients");
// const elements = [];
// for (let index = 0; index < ingredients.length; index += 1) {
//   console.log(ingredients[index]);
//   const ingredient = ingredients[index];
//   const itemRef = document.createElement("li");
//   itemRef.textContent = ingredient;
//   console.log(itemRef);

//   elements.push(itemRef);
// }

// console.log(elements);
// ingredientsContainer.append(...elements);

// // 2nd Method
// const ingredientsContainer = document.querySelector("#ingredients");
// const elements = ingredients.map((ingredient) => {
//   const itemRef = document.createElement("li");
//   itemRef.textContent = ingredient;
//   return itemRef;
// });
// console.log(elements);

// ingredientsContainer.append(...elements);

// 3rd Method
const ingredientsContainer = document.querySelector("#ingredients");

const createIngredientsItemRef = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemRef = document.createElement("li");
    itemRef.textContent = ingredient;
    return itemRef;
  });
};

const elements = createIngredientsItemRef(ingredients);
console.log(elements);

ingredientsContainer.append(...elements);
