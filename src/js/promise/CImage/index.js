const promise = new Promise((resolve, reject) => {
  console.log("执行了1");
  resolve();
})
  .then(() => {
    throw new Error("有哪里不对了")
    console.log("执行了2");
  })
  .catch(() => {
    console.log("执行了3");
  })
  .then(() => {
    console.log("执行了4");
  });
