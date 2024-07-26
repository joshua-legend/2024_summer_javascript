//function [함수]
// 마술상자
// 100 -> 200
// 200 -> 300
// 300 -> 400
// 400 -> 500
// x -> x + 100

function add100(x) {
  return x + 100;
}

function minus100(x) {
  return x - 100;
}

function wonyoungthinking(x) {
  return x + " 럭키비키잖아😋";
}

function test(x, y) {
  return (x + y) ** 2;
}

function test1(x) {
  if (x % 2 == 1) {
    return "홀수";
  } else {
    return "짝수";
  }
}

// 두 숫자를 넣어서 큰숫자 돌려주기
function test2(x, y) {
  return x > y ? x : y;
}

const a = add100(3000); // 3100
const b = minus100(1000); // 900
const c = wonyoungthinking("수업을 하고 있는데 마침 휴강이라서");

function test4(x, y) {
  return x > y ? x : y;
}

// 두 숫자 넣을때 같으면 같아요!, 아니면 달라요!
function test5(x, y) {
  return x == y ? "같아요" : "달라요";
}

test5(100, 200);
test5(200, 200);
test5(100, 100);

prompt("너가 쓰고 싶은말 쓰셈");
alert("비상비상비상");
