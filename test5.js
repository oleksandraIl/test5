function bubbleSort(arr) {
    const n = arr.length

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

const unsortedArray = [43, 65, 89, 28, 51, 19, 4]
bubbleSort(unsortedArray)
console.log(unsortedArray)
