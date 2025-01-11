export default function generateSortedRandomList(size: number): number[] {
    if (size <= 0) return [];

    const list: number[] = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    return list.sort((a, b) => a - b);
}
