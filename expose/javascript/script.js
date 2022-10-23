// function sumvalues(num1, num2, add){
//     if(add)
//     {
//         const result = 0;
//         result = num1 + num2;
//         console.log('values added: ', result);
//     }
//     else return;
//     console.log('final result: ', result);
// }
// sumvalues(10,10,true);
// function discountPrices(prices, discount)
// {
//     const discounted = [];
//     const length = prices.length;
//     for (let i=0; i<length; i++)
//     {
//         const discountedPrice = prices[i] * (1 - discount);
//         discounted.push(discountedPrice);
//     }
//     console.log(discounted);
//     return discounted;

// }
// discountPrices([100, 200, 300], 0.5);
function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
        console.log(newArr[i]);
    }
    for (let i = 0; i < array.length; i++) {
        console.log(newArr[i]);
    }
    return newArr;
    
}

function doSomething (num) {
    console.log(num);
    return num * 2;
}
modifyArray([1,2,3], doSomething);