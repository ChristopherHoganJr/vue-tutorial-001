const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/redsocks.png",
      url: "https://www.google.com",
      inStock: true,
      inventory: 100,
      onSale: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "red", image: "./assets/images/redsocks.png" },
        { id: 2235, color: "blue", image: "./assets/images/bluesocks.png" },
      ],
      sizes: ["S", "M", "L", "XL"],
    };
  },
});
