function curriedAdd(total) {
    // If 'total' is not defined (i.e., the function was called without any arguments), it returns 0.
    if (total === undefined) return 0;
    // If 'total' is defined, it returns a new function, 'addNext'.
    return function addNext(num) {
      // 'addNext' takes a 'num' argument. If 'num' is not defined (i.e., the function was called without any arguments),
      // 'addNext' returns the current value of 'total'.
      if (num === undefined) return total;
      // If 'num' is defined, 'addNext' adds it to 'total', updates 'total' to the new sum,
      // and then returns itself to allow for additional chained calls.
      total += num;
      return addNext;
    };
}


module.exports = { curriedAdd };
