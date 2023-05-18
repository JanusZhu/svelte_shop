import { writable } from "svelte/store";
import products from "../../data.json";

let defaultShop = {};
for (let product of products) {
  defaultShop[product.id] = 0;
}

let defaultInventory = {};
for (let product of products) {
  defaultInventory[product.id] = 10;
}
export const inventory = writable(defaultInventory);
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
    set: (n) => set(n),
  };
};

export const shop = createShop();
