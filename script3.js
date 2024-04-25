// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и
// возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootElement, className) {
  var storage = [];

  function findClass(element) {
    if (element.classList && element.classList.contains(className)) {
      storage.push(element);
    }
  }

  function checkElems(elem, check) {
    check(elem);
    elem = elem.firstElementChild;
    while (elem) {
      checkElems(elem, check);
      elem = elem.nextElementSibling;
    }
  }

  checkElems(rootElement, findClass);

  if (storage.length > 0) {
    return storage[0];
  } else {
    return null;
  }
}

const rootEl = document.getElementById("root");
const targetElement = findElementByClass(rootEl, "my-class");
console.log(targetElement);
