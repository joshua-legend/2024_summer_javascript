// 함수 -> 마술상자
const luckybiky = (x) => {
  return x + " 럭키비키자낭~";
};
luckybiky("월요일 아침");
luckybiky("자바스크립트");

const ive = (x) => {
  console.log("아이브 멤버😊");
  x();
  console.log("끝");
};
const wonyoung = () => {
  console.log("러키비키!");
  console.log("장원영");
};
const youjin = () => {
  console.log("지락실!");
  console.log("안유진");
};

ive(wonyoung);
ive(youjin);
