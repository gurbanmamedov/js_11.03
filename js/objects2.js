//1. Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только те объекты, у которых все свойства имеют значения

// function filterObjectsWithValues(objects) {
//   return objects.filter((obj) => {
//     for (const key in obj) {
//       if (obj[key] === null || !obj[key]) {
//         return false;
//       }
//     }
//     return true;
//   });
// }
// const someArray = [
//   { name: "John", age: 25, city: "New York" },
//   { name: "Alice", age: null, city: "Los Angeles" },
//   { name: "Bob", age: 30, city: undefined },
//   { name: "Eve", age: 22, city: "Chicago" },
// ];

// const filteredArray = filterObjectsWithValues(someArray);
// console.log(filteredArray)

//2. Напишите функцию, которая принимает объект и проверяет, является ли он пустым (не содержит свойств).

// function isEmptyObject(obj) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return false;
//     }
//   }
//   return true;
// }

// const obj1 = {};
// const obj2 = { key: "value" };

// console.log(isEmptyObject(obj1));
// console.log(isEmptyObject(obj2));

//3. Напишите функцию, которая принимает объект и имя свойства, а затем проверяет, существует ли такое свойство у объекта.

// function hasProperty(obj, propertyName) {
//   return obj.hasOwnProperty(propertyName);
// }

// const exampleObject = { key: "value", age: 28 };

// console.log(hasProperty(exampleObject, "key"));
// console.log(hasProperty(exampleObject, "name"));

//4. Напишите функцию, которая принимает два объекта и проверяет, содержат ли они одинаковые наборы свойств (порядок не имеет значения).

// function areObjectsEqual(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (const key of keys1) {
//     if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// const objA = { a: 1, b: 2, c: 3 };
// const objB = { b: 2, a: 1, c: 3 };
// const objC = { a: 1, b: 2, c: 4 };

// console.log(areObjectsEqual(objA, objB));
// console.log(areObjectsEqual(objA, objC));

//5. Напишите функцию, которая принимает объект и возвращает новый объект, в котором ключи и значения поменяны местами.

// function swapKeysAndValues(obj) {
//   const swappedObj = {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       swappedObj[obj[key]] = key;
//     }
//   }

//   return swappedObj;
// }

// const originalObject = { a: "apple", b: "banana", c: "cherry" };
// const swappedObject = swapKeysAndValues(originalObject);

// console.log(swappedObject)

//6. Напишите функцию, которая принимает массив объектов и возвращает новый объект, где ключи - значения определенного свойства объектов, а значения - массив объектов с соответствующими значениями свойства.

// function groupByProperty(arr, property) {
//   const groupedObj = {};
//   for (const obj of arr) {
//     const propValue = obj[property];
//     if (!groupedObj[propValue]) {
//       groupedObj[propValue] = [];
//     }
//     groupedObj[propValue].push(obj);
//   }
//   return groupedObj;
// }

// const arrayOfObjects = [
//   { id: 1, category: "A", value: "apple" },
//   { id: 2, category: "B", value: "banana" },
//   { id: 3, category: "A", value: "avocado" },
//   { id: 4, category: "B", value: "blueberry" },
//   { id: 5, category: "C", value: "cherry" },
// ];

// const groupedByCategory = groupByProperty(arrayOfObjects, "category");

// console.log(groupedByCategory);

//7. Напишите функцию, которая принимает объект и возвращает новый объект, где ключи - значения всех свойств объекта, а значения - массивы ключей, имеющих такие значения.

// function groupByPropertyValues(obj) {
//   const groupedObj = {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const value = obj[key];

//       if (!groupedObj[value]) {
//         groupedObj[value] = [];
//       }

//       groupedObj[value].push(key);
//     }
//   }

//   return groupedObj;
// }

// const exampleObject = { a: "apple", b: "banana", c: "avocado", d: "banana" };

// const groupedByValues = groupByPropertyValues(exampleObject);
// console.log(groupedByValues);

//8. Напишите функцию, которая принимает два объекта и возвращает новый объект, содержащий только те свойства, которые отличаются в этих объектах.

// function diffObjects(obj1, obj2) {
//   const diffObj = {};
//   for (const key in obj1) {
//     if (obj1.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
//       diffObj[key] = { oldValue: obj1[key], newValue: obj2[key] };
//     }
//   }
//   for (const key in obj2) {
//     if (obj2.hasOwnProperty(key) && obj1[key] !== obj2[key] && !diffObj[key]) {
//       diffObj[key] = { oldValue: obj1[key], newValue: obj2[key] };
//     }
//   }

//   return diffObj;
// }
// const objA = { a: 1, b: 2, c: 3 };
// const objB = { a: 1, b: 5, d: 4 };

// const diffResult = diffObjects(objA, objB);
// console.log(diffResult);

//9.Напишите функцию, которая принимает массив объектов и возвращает новый объект, в котором ключи - значения свойств, а значения - количество раз, которое свойство встречается в объектах массива.

// function countProperty(objArray) {
//   const countObj = {};

//   objArray.forEach((obj) => {
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         const value = obj[key];
//         countObj[value] = (countObj[value] || 0) + 1;
//       }
//     }
//   });
//   return countObj;
// }

// const arrayOfObjects = [
//   { color: "red", type: "fruit" },
//   { color: "yellow", type: "fruit" },
//   { color: "red", type: "vegetable" },
//   { color: "green", type: "fruit" },
//   { color: "yellow", type: "fruit" },
// ];

// const result = countProperty(arrayOfObjects);

// console.log(result);

//10. Напишите функцию, которая принимает объект и возвращает массив его свойств, упорядоченный по убыванию длины их значений (если значения - массивы).
// function sortPropertiesByLength(obj) {
//   const properties = Object.keys(obj);

//   properties.sort((a, b) => {
//     const lengthA = (obj[a] && obj[a].length) || 0;
//     const lengthB = (obj[b] && obj[b].length) || 0;

//     if (Array.isArray(obj[a]) && Array.isArray(obj[b])) {
//       return lengthB - lengthA;
//     } else {
//       return lengthB - lengthA;
//     }
//   });

//   return properties;
// }

// // Пример использования
// const myObject = {
//   prop1: [1, 2, 3],
//   prop2: "abc",
//   prop3: [4, 5],
//   prop4: "xyz",
// };

// const sortedProperties = sortPropertiesByLength(myObject);
// console.log(sortedProperties);

//11.Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только те объекты, у которых свойство, переданное в качестве второго аргумента, равно значению, переданному в качестве третьего аргумента.
// function filterObjectsByProperty(arr, property, value) {
//   return arr.filter((obj) => obj[property] === value);
// }
// const arrayOfObjects = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 35 },
// ];

// const filteredArray = filterObjectsByProperty(arrayOfObjects, "age", 25);
// console.log(filteredArray);

//12.Напишите функцию, которая принимает объект и возвращает массив всех его свойств, у которых значения - функции.

// function getFunctionProperties(obj) {
//   return Object.keys(obj).filter((key) => typeof obj[key] === "function");
// }

// const myObject = {
//   prop1: 42,
//   prop2: "Hello",
//   prop3: function () {
//     console.log("I'm a function!");
//   },
//   prop4: [1, 2, 3],
//   prop5: function () {
//     console.log("Another function!");
//   },
// };

// const functionProperties = getFunctionProperties(myObject);

// console.log(functionProperties);

//13. Напишите функцию, которая принимает объект и возвращает новый объект, содержащий только те свойства, значения которых не являются функциями.
// function filterNonFunctionProperties(obj) {
//   return Object.keys(obj).filter((key) => typeof obj[key] !== "function");
// }

// const myObject = {
//   prop1: 42,
//   prop2: "Hello",
//   prop3: function () {
//     console.log("I'm a function!");
//   },
//   prop4: [1, 2, 3],
//   prop5: function () {
//     console.log("Another function!");
//   },
// };

// const filteredObject = filterNonFunctionProperties(myObject);
// console.log(filteredObject);
