let currentExpression = ''
function update(value) {
    currentExpression += value;
    document.querySelector('.current').textContent = currentExpression;
}

function clearDisplay() {
    currentExpression = "";
    document.querySelector('.current').textContent = "";
}
function evaluateExpr() {
    let oprnd = [];
    let currnum = ''
    for (let index = 0; index < currentExpression.length; index++){
        if ('+-×÷'.includes(currentExpression[index])){
            oprnd.push(Number(currnum));
            oprnd.push(currentExpression[index])
            currnum = '';
        }
        else{
            currnum += currentExpression[index];
        }
    }
    oprnd.push(Number(currnum));
    let calc = oprnd[0];
    for (let i = 1; i < oprnd.length; i++) {
        if (oprnd[i]=='+'){
            calc += oprnd[i+1];
        }
        else if (oprnd[i]=='-'){
            calc -= oprnd[i+1];
        }
        else if (oprnd[i]=='×'){
            calc *= oprnd[i+1];
        }
        else if (oprnd[i]=='÷'){
            calc /= oprnd[i+1];
        }
        i+=1
    }
    document.querySelector('.current').textContent = calc;
    currentExpression = calc;



}