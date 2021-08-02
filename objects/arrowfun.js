function fn1(x, y) {
    console.log("Some process");
    return x + y;
  }
  // it is use in react
  let fa1 = (x, y) => {
    console.log("Some process");
    return x + y;
  };
  
  // -----------------------------------
  
  function fn2(x) {
    console.log("Some process");
    return 2 * x;
  }
  
  let fa2 = x => {
    console.log("Some process");
    return 2 * x;
  };
  
  // -----------------------------------
  
  function fn3(x) {
    return 3 * x;
  }
  
  let fa3 = x => 3 * x;//if only one return statment is there we can use arroy function like this