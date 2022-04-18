function studentDetails(objArray) {
    let arr = [];
    for (var i = 0; i < objArray.length; i++){
        let result = objArray[i].name + '/' + objArray[i].age + '/' + objArray[i].level; 
        arr.push(result);
    }
    return arr;
}

console.log(
    studentDetails([
        {
            name : 'Joel',
            age  : '21',
            level: '200 level'
        },
    
        {
            name : 'Peace',
            age  : '23',
            level: '300 level'
        },
    
        {
            name : 'Kanyin',
            age  : '18',
            level: '100 level'
        }
    ])
);