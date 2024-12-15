
const sortedArray=(arr)=>{
    for (let i=0; i< arr.length; i++){
        // console.log(`index ${i} and value is ${arr[i]} `)
         for (let j = 0; j < arr.length - i - 1; j++){
             
             if(arr[j] > arr[j+1]){
                 let temp=arr[j]
                 arr[j]=arr[j+1]
                 arr[j+1]=temp
             }
         }
    }
    return arr
}

console.log(sortedArray([17,9,13,11,10,9,7,3,1]))



const optimizedsortedArraysolution=(arr)=>{
    let swap;
    for (let i=0; i< arr.length; i++){
        swap=false
        // console.log(`index ${i} and value is ${arr[i]} `)
         for (let j = 0; j < arr.length - i - 1; j++){
             
             if (arr[j]>arr[j+1]){
                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                 swap=true
             }
         }
         
         if (!swap) break
    }

    return arr
}
console.log(optimizedsortedArraysolution([17,9,13,11,10,9,7,3,1]))








const arr = [17,9,13,11,10,7,3,1];
arr.sort((a, b) => a - b);  // For ascending order
console.log(arr);

const arr = [17,9,13,11,10,7,3,1];
arr.sort((a, b) => b - a);  // For ascending order
console.log(arr);




