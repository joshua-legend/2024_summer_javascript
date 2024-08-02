const starbucks = [
  { name: "americano", price: 3000, shots: 2, ingredients: ["water", "bean"] },
  { name: "latte", price: 4000, shots: 2, ingredients: ["water", "bean", "milk"] },
  { name: "frappuccino", price: 4500, shots: 2, ingredients: ["water", "bean", "milk", "shake"] },
  { name: "mocha", price: 4500, shots: 2, ingredients: ["water", "bean", "milk", "chocolate"] },
];

//1. starbucks 메뉴들의 이름과 가격을 콘솔로 출력하기
starbucks.forEach((x) => {
  console.log(x.name + x.price);
});
//2. starbucks 메뉴들의 이름을 대문자로 출력하기
starbucks.forEach((x) => {
  console.log(x.name.toUpperCase());
});

//3. 가격이 4000원인 메뉴만 콘솔로 나타내기!
starbucks.forEach((x) => {
  if (x.price == 4000) {
    console.log(x);
  }
});

//4. 이름을 대문자화 하고, 가격은 2000원 더하고, 성분은 ice 추가해서
// 바꾸기~
const newArray = starbucks.map((x) => {
  const name = x.name.toUpperCase();
  const price = x.price + 2000;
  x.ingredients.push("ice");
  return { name: name, price: price, ingredients: x.ingredients, shots: x.shots };
});

//5. 이름의 길이가 6글자 이상이면 대문자화, milk포함 되면 가격은 1000원 추가,
// 바꾸기고 배열로 나타내기

const newArray1 = starbucks.map((x) => {
  const name = x.name.length >= 6 ? x.name.toUpperCase() : x.name;
  const price = x.ingredients.includes("milk") ? x.price + 1000 : x.price;
  return { name: name, price: price, shots: x.shots, ingredients: x.ingredients };
});

console.log(newArray1);

//6. 각 가격을 10% 할인된 가격으로 바꾸고, 이름은 americano🧊
// shots 우유가 포함되면 하나더 추가하기, 성분은 빼버리기
const newArray2 = starbucks.map((x) => {
  const price = x.price * 0.9;
  const name = x.name + "🧊";
  const shots = x.ingredients.includes("milk") ? x.shots + 1 : x.shots;
  return { name: name, price: price, shots: shots };
});
console.log(newArray2);
