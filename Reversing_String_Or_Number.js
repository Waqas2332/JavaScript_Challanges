// This program will reverse whatever will be passed into its function

let a = "Programming is fun";
let arr = [];
const reverse = (param) => {
  if (typeof a === "number") {
    let num = String(param);
    for (let i = 0; i < num.length; i++) {
      arr[i] = a % 10;
      a = Math.floor(a / 10);
    }
    return Number(arr.join(""));
  } else if (typeof a === "string") {
    for (let i = a.length - 1, j = 0; i >= 0, j < a.length; i--, j++) {
      arr[i] = a[j];
    }
    return arr.join("");
  } else {
    console.log("This Data Type is not supported\nIt only supports Number and String Data Types for reversing");
    return a;
  }
};

const sol = reverse(a);
console.log(sol);
console.log(typeof sol);
