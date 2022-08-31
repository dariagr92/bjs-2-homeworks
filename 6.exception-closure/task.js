//1
function parseCount(num) {
    let res = Number.parseInt(num);
    if (!res){
       throw new Error ("Невалидное значение");
    }
    return res;
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
    
    
        if (!((c < (a + b)) && (b < (a + c)) && (a < (b + c)))){
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
   

    getPerimeter(){
        let p = this.a + this.b + this.c;
        this.p = p;
        return this.p;    
    }
    
    getArea(){
        let p = this.getPerimeter() / 2;
        let s = +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        this.s = s;
        return this.s;
    }
    
}

function getTriangle(a,b,c){
    try{
        return new Triangle(a,b,c);
    }

    catch(error){
        return{
            getPerimeter(){
                return 'Ошибка! Треугольник не существует';
            },
            getArea(){
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}
