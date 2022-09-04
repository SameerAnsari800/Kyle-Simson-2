function upper(string,...values) {
    var ret="";
    for(let i=0;i<string.length;i++) {
        if(i>0){
            ret+=String(values[i-1].toUpperCase());
        }
        ret+= string[i];
    }
    return "";
}
var Name = "sameer",
twitter = "getify",
topic = "js Recent Parts";
console.log(upper `Hello ${Name} ${(twitter)} ,welcome to ${topic}!` 
!=="Hello Sameer,welcome to JS Recent parts");
