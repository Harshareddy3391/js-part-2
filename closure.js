function outer(){
    let count=0
    console.log("outer function excuted")
     function inner(){
        console.log(" i am inner function..")
        count++;

        console.log(count)
     }

    return inner()

    

}


let fun=outer()

console.log(fun)