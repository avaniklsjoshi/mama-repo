export default function Closures() {
  function outer() {
    // Function bundled with its lexical environment forms a closure
    const x = 11;
    function inner() {
      console.log("x1", x);
    }
    inner();
  }
  outer();
  //----------------Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to
  function outer2() {
    const x = 12;
    function inner() {
      console.log("x2", x);
    }
    return inner;
  }
  const inner2 = outer2();
  inner2();
  //----------------
  function outer3() {
    let x = 13;
    function inner() {
      console.log("x3", x);
    }
    x = 3; // will return the referrence, not the value
    return inner;
  }
  //   const inner3 = outer3();
  //   inner3(); or
  outer3()();
  //----------------
  function outmost() {
    const y = 900;
    function outer4() {
      const x = 13;
      function inner4() {
        console.log("x4", x, "y", y);
      }
      inner4();
    }
    outer4();
  }
  outmost();
  //----- data encapsulation-----------
  function counter() {
    let counter = 0;
    return function incrementCounter() {
      ++counter;
      console.log("counter", counter);
    };
  }
  const count1 = counter();
  count1();
  count1();
  const count2 = counter();
  count2();
  //----- data encapsulation scalable approach-----------
  function Counter2(this: any) {
    let counter = 0;
    this.incrementCounter = function () {
      ++counter;
      console.log("Counter2 inc", counter);
    };
    this.decrementCounter = function () {
      --counter;
      console.log("Counter2 dec", counter);
    };
  }
  const countPlus = new (Counter2 as any)();
  countPlus.incrementCounter();
  countPlus.decrementCounter();
  //----- garbage collected by browser -----------
  function a() {
    const x = 0;
    // z = 9; //z is garbage collected, as it is not used by function b
    return function b() {
      console.log("x", x);
    };
  }
  a()();
  return (
    <p>
      Closure :Function bundled with its lexical environment forms a closure.
      Whenever function is returned, even if its vanished in execution context
      but still it remembers the reference it was pointing to. Its not just that
      function alone it returns but the entire closure. <br />
      setTimeout, function currying, data encapsulation,HOC, DRAWBACK: consumes
      lot of memory. check console:
    </p>
  );
}
