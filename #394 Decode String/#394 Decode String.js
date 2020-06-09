/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s){
    var stack = [];
    
    for(var e of s){
        if(e !== "]"){
            stack.push(e);
            continue;
        }
        
        var cur = stack.pop();
        var str = '';
        
        while(cur !== "["){
            str = cur + str;
            cur = stack.pop();
        }
        
        var num = '';
        cur = stack.pop();
        
        while(!Number.isNaN(Number(cur))){
            num = cur + num;
            cur = stack.pop();
        }
        
        stack.push(cur);
        stack.push(str.repeat(Number(num)));
    }
    return stack.join("");
}