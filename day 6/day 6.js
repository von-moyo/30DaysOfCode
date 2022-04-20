function check (params, num) {
    let arr = [];
    dance:
       for  (let i = 0; i < params.length; i++){
           for (let j = 0; j < params.length; j++){
           if (i === j) 
           { continue;}
           if (params[i] + params[j] === num){
               arr.push(i,j);
             //  break dance;
             return [i,j];
            }
            
           }
       }
       return [-1,-1]
}

console.log(check([1,2,3,4,0], 6));
