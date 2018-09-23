import {SortTestHelper} from '../../util/sort-test-helper'
export class QuickSort {

  /**
   * The implementation of quick sort
   * @param arr 
   */
  public static quickSort(arr: number[]) {
    QuickSort.__quickSort(arr, 0, arr.length - 1)
  }

  /**
   * Sort arr[l,...,r] use quick sort
   * @param arr 
   * @param l 
   * @param r 
   */
  private static __quickSort(arr: number[], l: number, r: number) {
    if (l >= r) {
      return
    }
    const p: number = QuickSort.__partition(arr, l, r)
    QuickSort.__quickSort(arr, l, p - 1)
    QuickSort.__quickSort(arr, p + 1, r)                                                                                                                                                                    
  }
  /**
   * Partition
   * @param arr 
   * @returns p, which satisfies arr[p] > arr[l, ..., p - 1] and arr[p] < arr[p+1, ..., r] 
   */
  private static __partition(arr: number[], l: number, r: number): number {
    const v = arr[l]
    let j = l
    for (let i = l + 1; i <= r; i++) {
      if (arr[i] < v) {
        QuickSort.swap(arr, j+1, i)
        j++
      }
    }
    QuickSort.swap(arr, l, j)
    return j
  } 

  // swap two elements position
  private static swap(arr: number[], i: number, j: number) {
    const temp = arr[i]
    arr  [i]   = arr[j]
    arr  [j]   = temp
  }
}

// Optimized quick sort with select a random element as base element 
export class QuickSortOptimization1 {
  public static quickSort(arr: number[]) {
    QuickSortOptimization1.__quickSort(arr, 0, arr.length - 1)
  }

  private static __quickSort(arr: number[], l: number, r: number) {
    if (l >= r) {
      return
    }
    const p = QuickSortOptimization1.__partition(arr, l, r)
    QuickSortOptimization1.__quickSort(arr, l, p - 1)
    QuickSortOptimization1.__quickSort(arr, p + 1, r)
  }

  private static __partition(arr: number[], l: number, r: number): number {
    // Select a random element as base element
    const random = Math.floor(Math.random() * (r - l + 1)) + l
    QuickSortOptimization1.__swap(arr, l, random)
    const v = arr[l]
    let i = l
    for (let j = l + 1; j <= r; j++) {
      if (arr[j] < v) {
        this.__swap(arr, i + 1, j)
        i++
      }
    }
    this.__swap(arr, l, i)
    return i
  }

  private static __swap(arr: number[], i: number, j: number) {
    const temp = arr[i]
    arr  [i]   = arr[j]
    arr  [j]   = temp
  }
}