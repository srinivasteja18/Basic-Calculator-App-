
const screen = document.querySelector('.inputNumbers');
const keys = document.querySelectorAll('.keys input');


function reset(){
    screen.value = ""
}
function calculation(e){
    screen.value += e.value;
}
function deleteNumber(){
    const string = screen.value
    screen.value = string.slice(0,-1);
}
function performOperation(e){
    let val = screen.value;
    if(val.length ==0) return;
    if(val[val.length-1] === '+' || val[val.length-1] === '-' || val[val.length-1] === 'x' || val[val.length-1] === '/' ){
        val = val.slice(0,-1);
        val +=  e.value;
        screen.value = val;
    }
    else{
        screen.value = val+e.value;
    }
}

function displayResult(){
    const val = screen.value;
    let res = calculate(val);
    screen.value = res;

}
function calculate(s){
    s = s.trim()
    let len = s.length
    let num = ""
    let arr = ["+"]
    for(let i = 0; i < len; i++) {
        if (s[i] === " ") {
            continue
        }
        if ( !isNaN(s[i]) || s[i] == '.') {
            num += s[i]
        } else {
            arr.push(JSON.parse(num).toFixed(2))
            num = ""
            arr.push(s[i])
        }
        if ( i === len - 1 && num !== "" ) {
            arr.push(JSON.parse(num).toFixed(2))
        }
    }
    
    let result = []
    let l = arr.length
    for (let i = 0; i < l; i++) {
        if (arr[i] === "+") {
            result.push(arr[i+1])
        }
        if (arr[i] === "-") {
            result.push(-arr[i+1])
        }
        if (arr[i] === "x") {
            let lastNum = result.pop()
            result.push(lastNum * arr[i+1])
        }
        if (arr[i] === "/") {
            let lastNum = result.pop()
            result.push((lastNum / arr[i+1]).toFixed(2));
        }
        i++
    }
    let res=0;
    for(let i=0;i<result.length;i++){
        console.log(result[i]);
        res += JSON.parse(result[i]);
    }
    res = res.toFixed(2);
    return res;
}















function changeTheme(e){
    document.documentElement.className=e;
}