import SearchStrategy from "../interfaces/SearchStrategy.ts";

export default class InventorySearchStrategy<T> {
  private searchStrategy: SearchStrategy<T>;
  private inventory: T[];

  constructor(searchStrategy: SearchStrategy<T>, inventory: T[]) {
    this.searchStrategy = searchStrategy;
    this.inventory = inventory;
  }

  setSearchStrategy(s: SearchStrategy<T>) {
    this.searchStrategy = s;
  }

  executeSearch(target: T): boolean {
    return this.searchStrategy.search(this.inventory, target);
  }
}
