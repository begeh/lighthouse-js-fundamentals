function range(start, end, step){
    if(start === undefined || end === undefined || step === undefined || step <= 0 || start > end){
      return [];
    }
    else{
      let arr = [];
      let count = Math.floor((end - start) / step);
      for(let i = 0; i <= count; i++){
        arr.push(start + (i * step));
      }
      return arr;
    }
  }
  
  console.log(range(0, 10, 2));
  console.log(range(10, 30, 5));
  console.log(range(-5, 2, 3));