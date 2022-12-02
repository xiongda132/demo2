const func = () => {
  const obj = {};
  return {
    set: (key, val) => {
      obj[key] = val;
    },
    get: (key) => {
      return obj[key];
    },
  };
};

const instance = func();
instance.set("name", "john");
console.log(instance.get("name"));
