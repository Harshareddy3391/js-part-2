//callback function is function that passed an argument to another function and excute later usuvally after task complete..


//callback function or high order function...


function one(val){

    console.log(val+"hello iam one function...")


}

function two(){
    return "hell i am second function"
}

let twofun=two()

one(twofun)