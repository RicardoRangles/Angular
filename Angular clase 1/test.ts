let age: number = 29;
let nombre: string = "RIKI";  // Fixed the variable name to be case-sensitive
let isAdmin: boolean = true;

let numbers: number[] = [1, 2, 3, 4, 5];

// Fixed the type of the 'persons' array
let persons: {[key: string]: number} = {"DANIEL": 35};

enum Colors {
    Red,
    Green,
    Blue
}

let selectedColor: Colors = Colors.Green;

// funcion básica
function sumanumeros(x: number, y: number): number {
    return x + y;
}

const result: number = sumanumeros(4, 4);

console.log(result);

// funcion con parametros opcionales y valores por defecto

function introducetos(name: string, age?: number): string{
    if(age){
        return `Hola soy ${name} y tienes ${age} años`;
    }else{
        return `Hola soy ${name}`;
    }
}

console.log(introducetos("Daniel"));
console.log(introducetos("Daniel",28));


class Persona{
    private nombre : string;
    private edad : number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
      introduce(): string {
        return `Hi, I'm ${this.nombre} and I'm ${this.edad} years old.`;
      }
}


const newUser = new Persona("Carlos", 35);
const newuser1 = new Persona("Ricardo", 29);
console.log(newUser.introduce()); // Output: Hi, I'm Carlos and I'm 35 years old.
console.log(newuser1.introduce()); 