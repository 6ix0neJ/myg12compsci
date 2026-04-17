let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

permute(arr, arr.length);
function permute (arr,r, index = 0) {
    if(index == r - 1) {
        console.log(arr)
        console.log("--------------")
        return
    }
    for (let i = index; i < r; i++) {
        [arr[index],arr[i]] = [arr[i], arr[index]]
        permute(arr, r, index + 1)
    }
}
