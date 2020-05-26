let assign = function (obj, ...args) {
  for (let i = 0; i < args.length; i++) {
    for (let key in args[i]) {
        if (args[i].hasOwnProperty(key)) {
            obj[key] = args[i][key];
        }
    }
  }
  return obj;
};