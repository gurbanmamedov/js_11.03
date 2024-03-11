//1. Создать объект, описывающий автомобиль (производитель,
//модель, год выпуска, средняя скорость), и следующие функции
//для работы с этим объектом.
//1. Функция для вывода на экран информации об автомобиле.
//2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час

// const car = {
//   manufacturer: "Hyundai",
//   model: "i30",
//   year: "2009",
//   averageSpeed: 60,
// };

// function displayCarInfo(car) {
//   console.log(`Информация об автомобиле:
//     Производитель: ${car.manufacturer}
//     Модель: ${car.model}
//     Год выпуска: ${car.year}
//     Средняя скорость: ${car.averageSpeed} Км/час`);
// }

// function calculateTravelTime(distance) {
//   const travelTime = distance / car.averageSpeed;
//   const breaks = Math.floor(travelTime / 4);
//   const totalTravelTime = travelTime + breaks;
//   console.log(
//     `Для преодоления расстояния в ${distance} миль потребуется ${totalTravelTime.toFixed(
//       2
//     )} часов`
//   );
// }

// displayCarInfo(car);
// calculateTravelTime(200);

//Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
//1. Функция сложения 2-х объектов-дробей.
//2. Функция вычитания 2-х объектов-дробей.
//3. Функция умножения 2-х объектов-дробей.
//4. Функция деления 2-х объектов-дробей.
//5. Функция сокращения объекта-дроби


//3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
//1. Функция вывода времени на экран.
//2. Функция изменения времени на переданное количество
//секунд.
//3. Функция изменения времени на переданное количество
//минут.
//4. Функция изменения времени на переданное количество
//часов.
//Учтите, что в последних 3-х функциях, при изменении одной
//части времени, может измениться и другая. Например: если ко
//времени «20:30:45» добавить 30 секунд, то должно получиться
//«20:31:15», а не «20:30:75»

// const time = {
//   hours: 20,
//   minutes: 30,
//   seconds: 45,
// };

// function displayTime(time) {
//   console.log(`Текущее время: ${time.hours}:${time.minutes}:${time.seconds}`);
// }

// function addSeconds(time, seconds) {
//   time.seconds += seconds;
//   normalizeTime(time);
//   displayTime(time);
// }

// function addMinutes(time, minutes) {
//   time.minutes += minutes;
//   normalizeTime(time);
//   displayTime(time);
// }

// function addHours(time, hours) {
//   time.hours += hours;
//   normalizeTime(time);
//   displayTime(time);
// }

// function normalizeTime(time) {
//   time.minutes += Math.floor(time.seconds / 60);
//   time.seconds %= 60;
//   time.hours += Math.floor(time.minutes / 60);
//   time.minutes %= 60;

//   time.hours %= 24;
// }

// displayTime(time);
// addSeconds(time, 30);
// addMinutes(time, 15);
// addHours(time, 2);
