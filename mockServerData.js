module.exports = () => ({
  products: new Array(6).fill().map((e, i) => ({ id: i + 1, name: `Item ${i + 1}`, price: i + 1 }))
});
