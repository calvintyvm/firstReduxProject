//fruits

export const countFruits = fruits => {
  return fruits.length;
};

export const removeFruit = fruits => {
  fruits.pop();
  return fruits;
};

export const addFruit = (newFruit, fruits) => {
  return fruits.concat(newFruit);
};

//bakery

export const countBakery = breads => {
  return breads.length;
};

export const addBakery = (newBakery, bakerys) => {
  return bakerys.concat(newBakery);
};
