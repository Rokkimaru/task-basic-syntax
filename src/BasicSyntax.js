export function romanToInteger(str) {
    let result = 0;
    let comparison = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let ints = Object.keys(comparison);
    str = str.toUpperCase();
    for(let i=0; i<str.length;i++){
        if(ints.indexOf(str[i])<ints.indexOf(str[i+1])){
            result -=comparison[str[i]];
        } else{
            result +=comparison[str[i]];
        }
    }
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    return result;
}
