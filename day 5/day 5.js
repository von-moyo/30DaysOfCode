function studentInfo(student){
    let arr = [];
    for (var i = 0; i < student.length; i++){
        let newArray = student[i].split("/");
        let obj = {
            name : newArray[0],
            age  : newArray[1],
            level: newArray[2]
        }
        arr.push(obj);
    }
    return arr;
}

console.log(studentInfo(['Joel/21/200 level', 'Peace/23/300 level', 'Kanyin/18/100 level']));