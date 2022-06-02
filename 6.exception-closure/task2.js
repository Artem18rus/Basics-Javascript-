//ЗАДАЧА 1:

function parseCount(meaning) {
  const result = Number.parseInt(meaning, 10);
    if (isNaN(result)) {
      throw new Error("Невалидное значение");
    }
    return result;
}


function validateCount(value) {
  try {
    return parseCount(value);
  } catch (err) {
    return err;
  }
}

//ЗАДАЧА 2:

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if(((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  getPerimeter() {
    return (this.a + this.b + this.c);
  }
  
  getArea() {
    const p = +(this.a+this.b+this.c)/2;
    const S = +(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3);
    return S;
  }
}

function getTriangle(a, b, c) {
  try {
    return (new Triangle(a, b, c));
  } catch (err) {
    return {
      getArea: () => "Ошибка! Треугольник не существует",
      getPerimeter: () => "Ошибка! Треугольник не существует",
    }
  }
}

