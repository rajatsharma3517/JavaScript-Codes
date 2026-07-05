const student = {
    name: "Rajat",
    marks: {
        math: 90,
        science: 80
    }
};

const updatedStudent = {
    ...student,
    marks: {
        ...student.marks,
        science: 95
    }
};

console.log(updatedStudent);