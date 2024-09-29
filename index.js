function receivesAFunction(callback){
    console.log( callback() )
    }


function returnsANamedFunction(yeeaah){
    return function yeeaah(){
        console.log("before all")
    }
}

function returnsAnAnonymousFunction (){
return function (){
    return "print me"
}

}