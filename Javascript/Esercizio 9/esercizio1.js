const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
    { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
    { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
    { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
    ];

    let younger = {
        name: students[0].name,
        age: students[0].age
    }

    let longerSurname = students[0].surname;

    function rassegna(studentsArray) {
        for(let i = 0; i < studentsArray.length; i++) {
            console.log(studentsArray[i].name)
            checkHobby(studentsArray[i].hobby)
            checkAge(studentsArray[i].age, studentsArray[i].name)
            checkSurname(studentsArray[i].surname)
        }
        console.log("Il più giovane è " + younger.name)
        console.log("Il cognome più lungo è " + longerSurname) 
    }

    function checkHobby(hobby) {
        if(hobby == "gamer") {
            console.log ("Life Is a Game, Play to Win!")
        } else if(hobby == "sportsman") {
            console.log ("Never give up!")
        } else if(hobby == "photographer") {
            console.log ("A picture is worth a thousand words!")
        }
    }

    function checkAge(age, name) {
        if(age < younger.age) {
            younger.name = name
            younger.age = age
        } 
    }

    function checkSurname(surname) {
        if(surname.length > longerSurname.length) {
            longerSurname = surname
        }
    }

    rassegna(students)

    let Elena = { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'}
    students.splice(2, 0, Elena)

    console.log("")

    rassegna(students)

