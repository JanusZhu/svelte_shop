import { writable } from "svelte/store";
import products from "../../data.json";
let defaultShop = {};
for (let product of products) {
  defaultShop[product.id] = 0;
}
const createShop = () => {
  const { subscribe, set, update } = writable(defaultShop);
  return {
    subscribe,
    increment: (id) =>
      update((n) => {
        n[id] += 1;
        return n;
      }),
    decrement: (id) =>
      update((n) => {
        n[id] -= 1;
        return n;
      }),
    reset: () => set(defaultShop),
  };
};

export const shop = createShop();
