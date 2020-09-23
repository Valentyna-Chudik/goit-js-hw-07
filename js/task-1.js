const itemsRef = document.querySelectorAll(".item");
console.log(`'В списке ${itemsRef.length} категории.'`);

itemsRef.forEach((element) => {
  const titleRef = element.querySelector("h2");
  const itemCatRef = element.querySelectorAll("li");
  console.log(
    `Категория: ${titleRef.textContent}. Количество элементов: ${itemCatRef.length}`
  );
});
