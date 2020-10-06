function double(x){
    return x * 2;
}

function printDouble(number){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve ({number, double: double(number)})
        }, Math.floor(Math.random()*100)+1)
    })
} 


async function printAll(){
    let result = await printDouble(5);
    console.log(`${result.number} * 2 = ${result.double}`)
    result = await printDouble(10);
    console.log(`${result.number} * 2 = ${result.double}`)
    result = await printDouble(22);
    console.log(`${result.number} * 2 = ${result.double}`)
    result = await printDouble(1);
    console.log(`${result.number} * 2 = ${result.double}`)
    result = await printDouble(89);
    console.log(`${result.number} * 2 = ${result.double}`)
}

printAll();