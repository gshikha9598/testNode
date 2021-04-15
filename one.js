var arr = [10,20,33,55,12,34,88,56,33]
var newArr = []

for (let i=0 ; i<arr.length ; i++){
    let num = arr[i]
    if(num%2==0){
        newArr.push(num)
    }
}

console.log(newArr)