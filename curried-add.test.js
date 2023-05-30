const { curriedAdd } = require("./curried-add");

describe("curriedAdd", function() {
  it("returns 0 when called with no arguments", function() {
    expect(curriedAdd()).toBe(0);
  });

  it("returns a function when called with an argument", function() {
    expect(curriedAdd(3)).toBeInstanceOf(Function);
  });

  it("accumulates a total with repeated function calls", function() {
    expect(curriedAdd(1)()).toBe(1);
    expect(curriedAdd(1)(2)()).toBe(3);
    expect(curriedAdd(1)(2)(3)()).toBe(6);
    expect(curriedAdd(1)(2)(3)(4)()).toBe(10);
    expect(curriedAdd(1)(2)(3)(4)(-10)()).toBe(0);
  });
});


//  PASS  ./curried-add.test.js
//   curriedAdd
//   ✓ returns 0 when called with no arguments
//   ✓ returns a function when called with an argument
//   ✓ accumulates a total with repeated function calls

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.149 s, estimated 1 s