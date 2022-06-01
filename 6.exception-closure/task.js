//ЗАДАЧА 1:

function parseCount(meaning) {
  const result = Number.parseInt(meaning, 10);
    if (isNaN(result)) {
      throw new Error("Невалидное значение");
    } else {
      return result;
    }
}

function validateCount(meaning) {
  try {
    parseCount(meaning);
    return meaning;
    
  } catch (err) {
    return err;
  }
}

//ЗАДАЧА 2:

class Triangle {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
const value = new Triangle(1, 4, 434);

  if(((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
    throw new Error("Треугольник с такими сторонами не существует");
  }
  
  let getPerimeter = (a, b, c) => a + b + c;

  const p = (a+b+c)/2;
  let getArea = (a, b, c, p) => (Math.sqrt(p*(p-a)*(p-b)*(p-c))).toFixed(3);

function getTriangle (a, b, c) {
  try {
    return new Triangle;
  } catch (Error) {
    return
      getArea() => "Ошибка! Треугольник не существует";
      getPerimeter() => "Ошибка! Треугольник не существует";
  }

