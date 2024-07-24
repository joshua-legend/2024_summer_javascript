//1. 자동차 속도를 입력하고, 제한 속도 입력하여,
// 자동차 속도가 과속이면, 과속입니다! 아니면 안전운행 중이네요!

// const speed = Number(prompt("자동차 속도 입력"));
// const limit = Number(prompt("차로 제한 속도 입력"));
// const result = limit > speed ? "안전운행 중이네요!" : "과속입니다!";
// console.log(result);

//2. [영국,프랑스,독일,스페인,이탈리아,스위스] 중에서 가고 싶은 국가를
// 0~5까지 번호로 입력하면, 콘솔로 ~~나라를 가고싶어하군요! 다음에 같이가요!

const europe = ["영국", "프랑스", "독일", "스페인", "이탈리아", "스위스"];
const chocie = Number(prompt(`${europe} 어느 나라 가고 싶어?(번호입력)`));
console.log(`${europe[chocie]}나라를 가고 싶어하군요! 다음에 같이 ㄱㄱ`);
