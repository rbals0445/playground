// const replacement = (matchedString) => {
//   const result = swapMap[matchedString];

//   return result ?? matchedString;
// };

// const markup = `<div>
//   <main>Hello World</main>
//   <div>god<>o</div>
//   <div>di</>v</div>
//   <img>img<img />Tag</img>
// </div>`;

// const test1 = (markup) => {
//   return markup
//     .replace(
//       /\<([^\s\>]*)([^\>\/]*)\>/g,
//       (_, r, r2) => `<${replacement(r)}${r2}>`
//     )
//     .replace(/\<\/([^\>]*)\>/g, (_, r) => `</${replacement(r)}>`);
// };

// // console.log(test1(markup));

// const markup2 = `<div className="div">
//   <div /> <div/>
//   <main>Hello World</main>
//   <img>img<img />Tag</img>
// </div>`;

// /*
// 규칙 1.
// <(xxx$1)(띄어쓰기나 뭐가 나오든간에 캐치$2)/>
// <xxx (띄어쓰기 나오면 끝임)

// /\<([^\s\/]*)([^\/]*)\/\>)/

// selfclose 되는것만 원하는거야
// <(span)(나머어엉지)\>

// 3단계로 나눔
// 1. <span className="xx">, <span>
// 2. </span>
// 3. <span /> or <span/>

// */

// const test2 = (markup) => {
//   return markup.replace(/\<([^\s\/]*)([^\/\>]*)\/\>/g, (_, r, r2) => {
//     return `<${replacement(r)}${r2}/>`;
//   });
// };

// console.log(test2(markup2));
// // const test = `<div /> <div/>`;
// // const test1 = `<div className="cl" />`;

// // const result = markup.replace(/\<([^\>\/]*)\>|\<\/([^\>]*)\>/g, (match,...rest) => {
// // 	console.log(match)
// //   const [first,second] = rest;
// //   const res1 = swapMap[first];
// //   const res2 = swapMap[second]

// //   if(res1) {
// //     return `<${res1}>`;
// //   }

// //   if(res2) {
// //     return `</${res2}>`;
// //   }

// //   return match

// // })

const swapMap = {
  main: "코끼리",
  div: "고양이",
  ul: "사슴",
  li: "말",
  table: "기린",
};

// const swapMap = {
//   div: "span",
//   main: "realmain",
//   img: "imgtag",
// };

let markup = `<div className="div">
  <div /> <div/>
  <main>Hello World</main>
  <img>img<img />Tag</img>
</div>`;

// for ([key, value] of Object.entries(swapMap)) {
//   markup = markup
// .replace(new RegExp(`<${key}`, "g"), `<${value}`)
// .replace(new RegExp(`</${key}`, "g"), `</${value}`);
// }
// console.log(markup);

const res = Object.entries(swapMap).reduce((acc, val) => {
  const [key, value] = val;
  return acc
    .replace(new RegExp(`<${key}`, "g"), `<${value}`)
    .replace(new RegExp(`</${key}`, "g"), `</${value}`);
}, markup);

console.log(res);

// const res = markup
//   .replace(/\<div/g, "<span")
//   .replace(/\<\/div/g, "</span")
//   .replace(/\<main/g, "<realmain")
//   .replace(/\<\/main/g, "</realmain")
//   .replace(/\<img/g, "<imgtag")
//   .replace(/\<\/img/g, "</imgtag");
