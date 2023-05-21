/*
숫자에 3칸씩 넣어주는 정규표현식
*/
const nums = [1, 10, 100, 1000, 10000, 100000000, 12345678901, 1234567.123456];
// 앞, 뒤 3자리
// 10000,  10 000,  10_000_000_000 =>   10
// nums.forEach((num) => {
//   let temp = num.toString();
//   let ans = "";

//   for (let i = temp.length - 1, j = 0; i >= 0; i--) {
//     j++;
//     if (j % 4 === 0) {
//       ans = `${temp[i]},${ans}`;
//       j = 1;
//     } else {
//       ans = temp[i] + ans;
//     }
//   }
//   console.log(ans);
// });
/*
sol 1.
7,654,321  (i+1) % 4 === 0
1. 뒤에서 숫자 3개 카운트 , ans =  i + ans  
2. 4번째 숫자가 나왔을때 , cnt를 1로 변경시켜준다.

*/

/*
replace를 어떻게 할 것인가?


123456

$1,$2,$3

3n + 1의 위치를 찾아라


12,345,678


뒤에서 3개 잡고 ,찍고 다시 그 위치부터 3개 잡고 ,

1234567 => 4가 $1로 잡힘 => 1234,567

12345678.123456
/(\d)(?=(\d{3})+$)/g, $1,

중간에 .이 섞이면 패스하고
split하면 안됨?

*/

nums.forEach((num) => {
  const [Z, fraction] = num.toString().split(".");

  //   console.log(temp.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  const res = Z.replace(/(\d)(?=(\d{3})+$)/g, "$1,").concat(
    fraction ? `.${fraction}` : ""
  );

  console.log(res, res.length);
});

nums.forEach((num) => {
  const part = num.toString().split(".");

  //   console.log(temp.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  part[0] = part[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  const res = part.join(".");

  console.log(res, res.length);
});

nums.forEach((num) => {
  const part = num.toString().split(".");
  const reg = /(\d)(?=(\d{3})+$)/g;

  //   console.log(temp.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  part[0] = part[0].replace(reg, "$1,");

  //   if (part[1]) {
  //     part[1] = part[1].replace(reg, "$1,");
  //   }
  part[1] && (part[1] = part[1].replace(reg, "$1,"));

  const res = part.join(".");

  console.log(res, res.length);
});
