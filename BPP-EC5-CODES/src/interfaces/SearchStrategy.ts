export default interface SearchStrategy<T> {
    search(vec: T[], target: T): boolean
}