let arr = 4;
// arr.foo = "hello";
// arr.smth = "smth"
console.log(typeof(arr))
for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}
console.log("\n")
for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}