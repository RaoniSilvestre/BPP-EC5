import BinarySearchStrategy from "../classes/BinarySearchStrategy.ts";
import InventorySearchStrategy from "../classes/InventorySearchContext.ts";
import LinearSearchStrategy from "../classes/LinearSearchStrategy.ts";
import generateSortedRandomList from "./generateSortedRandomList.ts";

export function binaryBenchSearch(length: number) {
  const inventory: number[] = generateSortedRandomList(length);
  const binarySearch = new BinarySearchStrategy<number>();

  const ctx1 = new InventorySearchStrategy<number>(binarySearch, inventory);

  for (let i = 0; i < inventory.length; i++) {
    ctx1.executeSearch(inventory[i]);
  }
}

export function linearBenchSearch(length: number) {
  const inventory: number[] = generateSortedRandomList(length);
  const linearSearch = new LinearSearchStrategy<number>();

  const ctx1 = new InventorySearchStrategy<number>(linearSearch, inventory);

  for (let i = 0; i < inventory.length; i++) {
    ctx1.executeSearch(inventory[i]);
  }
}
