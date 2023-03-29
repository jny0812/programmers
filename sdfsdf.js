function solution(common) {
    let ed = 0;
    let er = 0;
    let answer = 0;
    
    if((common[1]-common[0]) == (common[2]-common[1])){
        ed = common[2]-common[1]
        answer = common[common.length -1] + ed;
    } 
    else{
        er = common[1]/common[0];
        answer = common[common.length -1] * er;
    }

    
    return answer;
}