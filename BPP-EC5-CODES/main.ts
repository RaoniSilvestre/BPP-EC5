import BinarySearchStrategy from "./src/classes/BinarySearchStrategy.ts";
import InventorySearchStrategy from "./src/classes/InventorySearchContext.ts";
import LinearSearchStrategy from "./src/classes/LinearSearchStrategy.ts";

if (import.meta.main) {
  const binarySearch = new BinarySearchStrategy<number>();
  const linearSearch = new LinearSearchStrategy<number>();

  const inventory: number[] = [1, 2, 4, 6, 8, 10, 50];

  const ctx1 = new InventorySearchStrategy<number>(binarySearch, inventory);

  console.log(ctx1.executeSearch(10));
  console.log(ctx1.executeSearch(20));
  console.log(ctx1.executeSearch(50));
  console.log(ctx1.executeSearch(6));
}
