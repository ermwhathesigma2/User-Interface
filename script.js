let student = [
    {id: 0, name: 'Jeremy', program: 'Bachelor of Science in Information Technology'},
    {id: 1, name: 'Rey', program: 'Bachelor of Science in Information Technology'},
    {id: 2, name: 'Mark', program: 'Bachelor of Science in Information Technology'},
    {id: 3, name: 'Francis', program: 'Bachelor of Science in Information Technology'},
    {id: 4, name: 'Remiel', program: 'Bachelor of Science in Information Technology'},
    {id: 4, name: 'Zinrick', program: 'Bachelor of Science in Information Technology'}
];


const createStudent = (name, program) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

    h2.innerHTML = name;
    p.innerHTML = program;
    button.innerHTML = "Delete";

    article.append(h2);
    article.append(p);
    article.append(button);

    article.classList.add("list-item");

    return article;
}

//console.log(createStudent(student[0].name, student[0].program,))

const studentList = student.map((s) =>{
    return createStudent(s.name, s.program)
});

const listContainer = document.querySelector("#listContainer")

studentList.forEach((s) => {
    listContainer.append(s);
});

