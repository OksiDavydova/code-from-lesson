// Ошибки в консоли

// const x = 6;
// const y = 5;
// console.log(x + y);

// console.log(x % y);
// console.log(Math.round(1.8));

// console.log(Math.random() * (20 - 1) + 1);
// console.log(Math.floor(1.9));
// console.log(Math.ceil(1.7));
// const valueA = '55555.25px';
// console.log(Number.parseFloat(valueA));
// console.log(typeof Number(valueA));
// const message = 'Welcome to Bahamas!';

// console.log(message.length); // 19
// console.log('There is nothing impossible to him who will try'.length);
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());

// console.log(message.indexOf('ah'));
// console.log(message.indexOf('hello'));

// console.log(message.includes('Welcome'));

// const num = 20;
// const result = num > 10 && num < 30;
// console.log(result);

// const num = 40;
// const result = num > 10 && num < 30;
// console.log(result); // false

// const num = 5;
// const result = num < 10 || num > 30;
// console.log(result); // true

// console.log(!true);
// console.log(!false);
// console.log(!1);
// console.log(!0);






// const name;

// console.log(age);
// let age;

// Определение типа значения, оператор typeof
// Валидация форм

// const productName = 'Mango';
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;
// let quantity;

// Шаблонные строки
// // Написать фразу с помощью шаблонных строк Здравствуйте, меня зовут А, мне Б лет и мне нравится Ц, где А, Б, Ц - переменные вставленные в строку.

// const name = 'Манго';
// const age = 5;
// const hobby = 'плавать';
// const message = `Здраствуйте, меня зовут ${name} мне ${age} лет и мне нравиться ${hobby}`;
// console.log(message);

// console.log(message);

// Prompt и confirm

// Спросить у пользователя имя, почту,  телефон и показать в консоле фразу "Пользоваель под именем ____ использует ____ почту и ____ телелефон"

// let userName, email, phone;

//  Базовые операторы +,-,*,/

// Проверка сложения

// let a = "Join ";
// let b = "us";
// console.log(a + b);
// console.log(typeof a + b)

// let a = 3;
// let b = ' join';
// console.log(a + b);

// let a = true;
// let b = " join";
// console.log(a + b);

// let a = true;
// let b = 12;
// console.log(a + b);

// let a = true;
// let b = true;
// console.log(a + b);

// let a = true;
// let b = "false";
// console.log(a + b);

// let a = 12;
// let b = null;
// console.log(a + b);

// let a = undefined;
// let b = 10;
// console.log(a + b);

// let a = undefined;
// let b = false;
// console.log(a + b);

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;
// console.log(result);
// console.log(typeof result);


// // Вывести на экран сумму: количество яблок + количество винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);


// Обьект Math
// // Определить площадь круга с радиусом 10см (ПR(2)). Math.pow(a, b) - возведение в степень

// const rad = 10;
// const area = Math.PI * Math.pow(rad, 2);
// console.log(area);



//Операторы сравнения и приведение типов
// // Каким будет результат этих выражений?

// console.log(5 > 4);
// console.log(10 >= "7");
// console.log("2" > "12");
// console.log("2" < "12");
// console.log("4" == 4);
// console.log("6" === 6);
// console.log("false" === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log("0" == false);
// console.log("0" === false);
// console.log("Ёнанас" < "ёжик");
// console.log("Ёнанас" === "ёжик");
// console.log(undefined == null);
// console.log(undefined === null);

// Посчитать суму товаров в козине магазина
// Нужно ввести цену 3-х товаров и посчитать их суму

// const phonePrice = Number(prompt('Enter phone price'));
// const tvPrice = Number(prompt('Enter tv price'));
// const playStationPrice = +prompt('Enter ps price');
// const result = phonePrice + tvPrice + playStationPrice;

// console.log(result);

// if 
// let cost = 0;
// const subs = 'pro';

// if (subs === 'pro') {
//   cost = 100;
// }
// console.log(cost);

// let costs = 0;
// const subst = 'free';

// if (subst === 'pro') {
//   costs = 100;
// }
// console.log(costs);


// if...else

// let cost;
// const subscripton = 'free';

// if (subscripton === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); //0

// let cost;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100


//else ...if
// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log('Invalid subscription type');
// }

// console.log(cost); // 500

// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost); // 500





// if...else и prompt
// // Используя конструкцию if..else, напишите код, который будет спрашивать: «Какое количество месяцев в году». Если пользователь вводит 12 , то показать: «Верно!», в противном случае – отобразить: «Не знаете? 12t!»

// Тернарный оператор
// // Перепишите if...else с использованием тернарного оператора.

// const a = 2;
// const b = 2;
// let result;

// // if (a + b < 4) {
// //   result = 'Мало';
// // } else {
// //   result = 'Много';
// // }

// result = (a + b) < 4 ? 'Мало' : 'Много';
// console.log(result);


// // Пример 9 - Логические операторы
// // Что выведет код?

// console.log(true && 3);//3

// console.log(false && 3);//false

// console.log(true && 4 && "hello");//hello

// console.log(true && 0 && "hello");//0

// console.log(true || 3);//true

// console.log(true || 3 || 4);//true

// console.log(true || false || 7);//true

// console.log(null || 2 || undefined);//2

// console.log(null || 2 && 3 || 4);//3

//  Логические операторы и if
// // Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно. «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// const min = 14;
// const max = 90;
// let age;
// age = prompt('vved age', '');

// if (age >= 14 && age <= 90) {
//   console.log('age:', age);
// }
// console.log(age);

// Опертор %
// // Написать программу которая получит от пользователя число и определит четное это число или не четное.

// Написать программу где мы спрашиваем у пользователя месяц его рождения и показываем в какое время года он родился

// Если пользователь вводит 2 - показываем слово Зима
// Добавить проверку на ввод данных - ето должно быть числом целым и положительным


// Написать программу которая проверяет логин и пароль пользователя и выводит приветствие - если все отлично и ошибку если неверный логин

// const login = 'user@gmail.com';
// const password = '12345'


// Написать программу которая получит от пользователя число (количество минут) и выведёт на экран строку в формате часов и минут.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:1



// Написать игру камень - ножницы - бумага для игры с компютером
// Компютер загадывает свой вариант, юзер вводит свой и ми видим кто вииграл

// let counter = 0;
// while (counter < 15) {
//   console.log('counter:', counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);