export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      const a = arr[j - 1];
      const b = arr[j];

      if (a > b) {
        arr[j - 1] = b;
        arr[j] = a;
      }
    }
  }
}
