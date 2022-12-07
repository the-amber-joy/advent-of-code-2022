const check = (data, numToFind) => {
    let answer;

    for (let i = 0; i < data.length; i++) {
        const chunk = data.slice(i, i + numToFind);
        if (new Set(chunk).size == numToFind) { 
            answer = data.indexOf(chunk) + numToFind; 
            break; 
        }
    }
    
    return answer;
}

exports.check = check;