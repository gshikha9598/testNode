var arr = [0,1,1,0,0,1,1,1,1,1,1,0,0,0,1]
var count = 0
var localCount = 0
for (let i=0 ; i<arr.length ; i++){
    let num = arr[i]
    // console.log(num) 
    if(num==1){
        localCount = localCount+1
    } 
    // console.log(localCount)
    else if(num ==0) {
        if(count < localCount){
            count = localCount
            localcount = 0
        }else {
            localCount =0
        }
    }
}

console.log(count)