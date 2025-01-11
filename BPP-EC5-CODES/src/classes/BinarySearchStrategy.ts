import SearchStrategy from "../interfaces/SearchStrategy.ts";

export default class BinarySearchStrategy<T> implements SearchStrategy<T> {
    constructor() {}

    public search(vec: T[], target: T): boolean {
        let left = 0;
        let right = vec.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (vec[mid] === target) {
                return true;
            }

            if (vec[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}