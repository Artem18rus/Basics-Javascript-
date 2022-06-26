//Задача 1:
function cachingDecoratorNew(func) {
let cache = [];
  function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    let idx = cache.findIndex((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
      if (idx !== -1) { // если элемент не найден
        let result = cache[idx].result;
        console.log("Из кэша: " + result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + result;
      }

    let result = func(...args); // в кэше результата нет - придётся считать
      if (cache.length > 5) {
        cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый)
      }
    cache.push({
      result:result,
      hash:hash
    });// добавляем элемент с правильной структурой
      
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//Задача 2
function debounceDecoratorNew(f, ms) {
  let timeout;
  let flag = false;
  return function wrapper(...args) {
    if (!flag) {
    f.apply(this, args);
    }
    flag = true;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
    f.apply(this, args);
    flag = false;
    }, ms);
  };
}

//Задача 3
function debounceDecorator2(f, ms) {
  let timeout;
  let flag = false;
  wrapper.count = 0;
  function wrapper(...args) {
  wrapper.count ++;
    if (!flag) {
    f.apply(this, args);
    }
  flag = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
    f.apply(this, args);
      flag = false;
    }, ms);
  };
  return wrapper;
}