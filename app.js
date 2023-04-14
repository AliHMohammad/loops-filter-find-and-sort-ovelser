"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = ["Peter", "Magdalena", "Frederikke", "Oskar", "Rasmus", "Sofie", "Anders", "Birgitte"];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
    {
        name: "Magdalena Maria Otap",
        mail: "mago@kea.dk",
        phone: "77880000",
        title: "Lecturer",
        age: 36,
        image: "https://share.cederdorff.com/images/mago.jpg",
    },
    {
        name: "Birgitte Jensen",
        mail: "birgitte@mail.dk",
        phone: "77226010",
        title: "Senior Lecturer",
        age: 49,
        image: "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
    },
    {
        name: "Dan Nielsen",
        mail: "dan@mail.dk",
        phone: "77226027",
        title: "Lecturer",
        age: 36,
        image: "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
    },
    {
        name: "Rasmus Cederdorff",
        mail: "race@kea.dk",
        phone: "72286318",
        title: "Senior Lecturer",
        age: 33,
        image: "https://share.cederdorff.com/images/race.jpg",
    },
    {
        name: "Martin Hansen",
        mail: "martin@mail.dk",
        phone: "77886620",
        title: "Lecturer",
        age: 34,
        image: "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
    },
    {
        name: "Peter Lind",
        mail: "petl@kea.dk",
        phone: "77886699",
        title: "Senior Lecturer",
        age: 46,
        image: "https://share.cederdorff.com/images/petl.jpg",
    },
];

const teacher = {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
};

// ========== initApp ========== //

function initApp() {
    console.log("initApp: app.js is running 🎉");
    // console.log(names);
    // console.log(years);
    // console.log(teacher);
    // console.log(teachers);
}

// ========== forEach ========== //

names.forEach(loopThroughNames);

function loopThroughNames(name, index) {
    const html = /*html*/ `
    <li>${name}</li>
    `;

    document.querySelector("#output").insertAdjacentHTML("beforeend", html);
}

// ========== for loop ========== //

// loopThroughYears()

function loopThroughYears() {
    
    for (let i = 0; i < years.length; i++){
        console.log(i);
        if (i == years.length - 1) {
            console.log("This is the last year in the list");
        }

        if (years[i] == 2023) {
            console.log("Current year");
        } else {
            console.log(years[i]);
        }
    }
}

// loopThroughFiveFirstYears()

function loopThroughFiveFirstYears() {
    let count = 0;
    for (let i = years.length-1; i >= 0; i--){
        console.log(years[i]);
        count++;
        if (count == 5) {
            break;
        }
    }
}

// logNumbers()

function logNumbers() {
    
    for (let i = 100; i >= 0; i-= 10) {
        console.log(i);
    }
}


// ========== for of loop ========== //

// forOfTeachers()

function forOfTeachers() {
    
    for (const teacher of teachers) {
        console.log(teacher);
    }
}


// teachersOver40()

function teachersOver40() {
    const result = [];

    for (const teacher of teachers) {
        
        if (teacher.age > 40) {
            result.push(teacher)
        }
    }

    console.log(result);
}


// forOfSearchTeachersByName("maria")

function forOfSearchTeachersByName(searchValue) {
    const result = [];
    searchValue = searchValue.toLowerCase();

    for (const teacher of teachers) {
        
        if (teacher["name"].toLowerCase().includes(searchValue)) {
            result.push(teacher)
        }
    }

    console.log(result);
}

// ========== for in loop ========== //

// forInTeacher()

function forInTeacher() {
    
    for (const key in teacher) {
        console.log(key);
        const value = teacher[key];
        console.log(value);
    }
}

// ========== while loops ========== //

// whileTeachersLength()

function whileTeachersLength() {
    let count = 0;
    while (count < teachers.length) {
        console.log(teachers[count]);
        count++
    }
}

// whileTeacherIsLecturer()

function whileTeacherIsLecturer() {
    let count = 0;
    while (count < teachers.length) {

        if (teachers[count].title == "Lecturer") {
            console.log(teachers[count]);
        }

        count++;
    }
}

// whileSearchByName("Ras")

function whileSearchByName(searchValue) {
    const result = []
    searchValue = searchValue.toLowerCase()
    let i = 0;

    while (i < teachers.length) {
        
        if (teachers[i].name.toLowerCase().includes(searchValue)) {
            result.push(teachers[i])
        }
        i++;
    }

    console.log(result);
}

// ========== Filter items: array.filter(...) ========== //

function filterTeachers() {
    // const result = teachers.filter(filterTeachersOver40);
    
    // function filterTeachersOver40(user) {
    //     return user.age > 40
    // }
    
    const result = teachers.filter((teacher) => teacher.age > 40)
    
    console.log(result);
}

// filterName()

function filterName() {
    
    const result = teachers.filter(filterTeachersByName)


    function filterTeachersByName(teacher) {
        return teacher.title == "Lecturer"
    }

    console.log(result);
}

// ========== Find: array.find() ========== //

// findTeacherByAge()

function findTeacherByAge() {
    
    const result = teachers.find(age36);

    function age36(teacher) {
        
        return teacher.age == 36;
    }

    console.log(result);
}

// findTeacherByName()

function findTeacherByName() {
    
    const result = teachers.find(matchName);

    function matchName(teacher) {
        return teacher.name == "Martin Hansen";
    }

    console.log(result);
}

// ========== Sorting: array.sort() ========== //

// sortNames()

function sortNames() {

    names.sort();

    console.log(names);
}

// sortTal();

function sortTal() {
    
    years.sort();

    console.log(years);
}

sortTeachers()

function sortTeachers() {
    
    teachers.sort(sortAge);

    function sortAge(teacher1, teacher2) {
        return teacher1.age - teacher2.age
    }
    
    teachers.sort(sortName);
    
    
    function sortName(teacher1, teacher2) {
        return teacher1.name.localeCompare(teacher2.name)
        
    }

    console.log(teachers);
}