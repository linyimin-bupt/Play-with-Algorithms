### 插入排序

**核心思想**

将数组分成两个部分
- 已排序部分
- 未排序部分

从头到尾遍历未排序部分,将未排序部分中最大的元素存入已排序部分.

![冒泡排序](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlra441u0006qjkhpia6eqat.png)

**实现思路**
选择未排序部分开始,比较两个相连的元素,如果第一个比第二个大,就交换他们两个.对每一对相邻的元素做同样的操作,从开始第一对到最后一对.最后得到一个最大的元素,此时这个元素为排序部分中最小的元素.接着对剩下未排序部分的元素重复以上步骤,直至未排序部分元素为空.

**代码实现**
```typescript
function bubbleSort (arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    // 比较,交换找出最大元素
    for (let j = 0; j < arr.length - i - 1; j ++) {
      if (arr[j] > arr[j + 1]) {
        const temp: number = arr[j]
        arr  [j]           = arr[j + 1]
        arr  [j + 1]       = temp
      }
    }
  }
}
```

**优化**
     
对冒泡排序的优化和插入排序一样,主要通过减少交换次数实现.但是区别在于冒泡排序的非有序部分是有序的,才会减少交换次数,插入排序的优化都能减少交换次数.

代码实现:

```typescript
function bubbleSortOptimization (arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let flag: boolean = false
    for (let j = 0; j < arr.length - i -1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp: number = arr[j]
        arr   [j]          = arr[j + 1]
        arr   [j + 1]      = temp
              flag         = true
      }
    }
    // 如果没有交换,说明已经排好序
    if (! flag) {
      break
    } 
  }
}
```

**性能**

在对有序数组进行排序的时候,优化之后的冒泡排序比普通的冒泡排序效率要高(O(N)比O($n^2$))
![冒泡排序对有序数组的排序](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlrfjn4i0007qjkh0tzbls3u.png)

在对近似有序数组进行排序时,优化之后的冒泡排序的效率和普通冒泡排序一样(都是O($n^2$))

![冒泡排序对近似有序的数组进行排序](http://linyimin-blog.oss-cn-beijing.aliyuncs.com/cjlrft57q0008qjkhr3z4wwes.png)


**冒泡排序,选择排序与插入排序的比较**

- 冒泡排序(选择排序)第二层循环每一次都会得到一个最终顺序的顺序部分(每扫描一轮，将确定一个元素的位置),插入排序并非最终顺序
- 冒泡排序(选择排序)中,对于任意一个数组,两层循环中每层循环都必须完成,时间复杂度(O($n^2$)), 插入排序可以提前中止,最优时间复杂度为O(N)
