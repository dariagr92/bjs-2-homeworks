//1
function parseCount(num) {
    if (!(Number.parseInt(num))){
       throw new Error ("Невалидное значение");
    }
    return (Number.parseInt(num));
}


function validateCount(num){
    try {
        return parseCount(num);
    }
    catch (error) {
        return error;
    }

}

//2
class Triangle {
    constructor (a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    if (a + b)
}
