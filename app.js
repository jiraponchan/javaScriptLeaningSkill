//* Diamond shape
// var strs = "";
// for (i = 1; i <= 5; i++) {
//   strs = "";
//   for (j = 5; j >= i; j--) {
//     strs += "-";
//   }
//   for (k = 1; k <= i; k++) {
//     strs += '*';
//   }
//   for (l = j; l >= 1 ; l--) {
//     strs += '*';
//   }
//   console.log(strs);
// }

// var str = "";
// for (i = 1; i <= 5; i++) {
//   str = "";
//   for (j = 1; j <= i; j++) {
//     str += "-";
//   }
//   for (k = i; k <= 5; k++) {
//     str += '*';
//   }
//   for (l = 5; l >= j; l--) {
//     str += '*';
//   }
//   console.log(str);
// }

// let arr1=[1,2,3,4,5]
// let sum = arr1.reduce((acc,curr) => acc + curr,);
// console.log(sum);

// let arr =[1,2,3,4,5]
// for(let i = 0; i< arr.length; i++){
//   arr[i] += 1
// }
// console.log(arr);

//! สร้าง array 1 - 100 แล้วเอามาบวกกัน
// let a = [ ...Array(100).keys() ].map( i => i+1);
// let sum = a.reduce((acc,curr) => acc + curr,);
// console.log(sum);

// Setup
// function phoneticLookup(val) {
//     let result = "";

//     // Only change code below this line
//     var lookUp = {
//       "alpha": "Adams",
//       "bravo": "Boston",
//       "charlie": "Chicago",
//       "delta": "Denver",
//       "echo": "Easy",
//       "foxtrot": "Frank"
//     }
//      result = lookUp[val];

//     // Only change code above this line
//     return result;
//   }

//   phoneticLookup("charlie");

// let cars = [
//   {
//     name :'benz',
//     color:'red',
//     year:'1669'
//   },
//   {
//     name :'Rom',
//     color:'yel',
//     year:'1669'
//   },
//   {
//     name :'bz',
//     color:'Balck',
//     year:'1779'
//   },
//   {
//     name :'zm',
//     color:'puple',
//     year:'1996'
//   },
//   {
//     name :'BMW',
//     color:'Green',
//     year:'1699'
//   },
//   {
//     name :'Ducati',
//     color:'white',
//     year:'2016'
//   },

// ]

// // console.log(Object.values(cars));
// console.log(cars.map());

//? Do while loop

// let text1 = ''
// let i1 = 0
// do {
//   text1 = 'Hi im' + i1
//   i1++
// }
// while (i1<3)
// console.log(text1)

// //? While loop
// let i = 0
// let text =''
// while (i<3){
//   text += "the number is " + i
//   i++
// }
// console.log(text)

//! test

// prompt รอรับ imput จากผู้ใช้
// let name1 = prompt('ใส่ชื่อหน่อย')
// console.log('hellow' + ' '+ name1)

//?

//let lotto = prompt('เลขที่ต้องการซื้อ')

//console.log(Math.floor(Math.random(lotto) * 100));
// Math.random สุ่มเลข Math.floor ปัดเศษลง
//document.getElementById("hanoy").innerHTML = Math.floor(Math.random(lotto) * 100)
//? Code ที่ใช้ให้แสดงเป็นหน้าเว็บ
// การเรียกใช้ document คือเชื่อมโยงกับหน้า HTML โดยใช้ GetelementById เพื่อระบุตำแหน่งของตัวที่ต้องการ
// innerHTML ให้เลือกว่าจะใช้แสดงแบบ HTML

//! บททดสอบ ให้ผู้ใช้กรอกเลขที่ซื้อ และแสดงเลขที่ผู้ใช้ซื้อ และแสดงเลขที่ออก เป็นตัวใหญ่ๆ

// let bye_lotto =prompt('หวย ลาว HD')

// document.getElementById("HD").innerHTML = Math.floor(Math.random() * 100)
// document.getElementById("Buy").innerText = bye_lotto

const cars = [
  {
    name1: "benz",
    color: "red",
    year: "1669",
  },
  {
    name1: "Rom",
    color: "yel",
    year: "1669",
  },
  {
    name1: "bz",
    color: "Balck",
    year: "1779",
  },
  {
    name1: "zm",
    color: "puple",
    year: "1996",
  },
  {
    name1: "BMW",
    color: "Green",
    year: "1699",
  },
  {
    name1: "Ducati",
    color: "white",
    year: "2016",
  },
];

const buy_car = () => {
  let car = "";

  for (let i = 0; i <= cars.length; i++) {
    car =
      "Name : " +
      cars[i].name1 +
      " " +
      "Color : " +
      cars[i].color +
      " " +
      "Year : " +
      cars[i].year;
    console.log((car += car));
  }
};

// let show = JSON.stringify(buy_car());

const element = document.getElementById("myBt");
element.addEventListener("click", function () {
  const myName = prompt("What is your name ?");
  document.body.innerHTML = "<h2>Hello , " + myName + "</h2>";
});
// element.addEventListener('click', function(e))
