import SearchStrategy from "../interfaces/SearchStrategy.ts";

export default class LinearSearchStrategy<T> implements SearchStrategy<T> {
  constructor() {}

  search(vec: T[], target: T): boolean {
    vec.forEach((item) => {
      if (item === target) return true;
    });

    return false;
  }
}
