function sum(a){

	return function(b){
               return (a + b);
  }
  }
  const resultFunc = sum(6);
  console.log( resultFunc(0), resultFunc(1), resultFunc(2));

  console.log(sum(1)(2), sum(2)(2), sum(40)(2));