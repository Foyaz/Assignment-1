const reverseSeq = (n) => {
    let answer = [];          
    
    for (let i=n; i>0; i--){  
      answer.push(i);        
    }
    
    return answer;         
  };