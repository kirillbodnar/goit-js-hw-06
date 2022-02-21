const itemElementsCounter = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemElementsCounter.length}`);

itemElementsCounter.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
