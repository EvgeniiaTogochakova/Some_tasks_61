// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(counter) {
  return {
    value: counter,
    increment() {
      return (this.value += 1);
    },
    decrement() {
      return (this.value -= 1);
    },
  };
}

const counter1 = createCounter(12);
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());

const counter2 = createCounter(-90);
console.log(counter2.decrement());
console.log(counter2.decrement());
console.log(counter2.decrement());
