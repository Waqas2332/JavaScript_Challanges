// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).




function string_end(str,endStr){
    if(str.slice(str.length-endStr.length,str.length) == endStr){
        return true
    }
    else{
        return false
    }    
}

console.log(string_end("Waqas","as"))