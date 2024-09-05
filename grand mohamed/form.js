let myForm = document.getElementById('myForm').addEventListener
    ('submit', (event) => {
        event.preventDefault();
        let name = document.getElementById('nom').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        if(name.length < 6){
            alert("Le nom doit comporter au moins 6 caractères")
            return;
        }
        if(!email.includes('@')){
            alert("L'email doit contenir un @")
            return;
        }
        if(password.length < 10){
            alert("Le mot de passe doit comporter au moins 10 caractères")
            return;
        }
    })


///////                    exo js 

// // exo js 
// // const someArr = [1, 2, 3, 4, 5];

// // exo 1
// // const doubleArr = ???
// /// on utilise la fonction map pou la projection

// const doubleArr = somArr.map(e => e* 2)

// exo 2
// const eventArr = someArr.filter(e => e % 2 == 0)
// const oddArr = someArr.filter(e => e % 2 !== 0)
// exo 3
// const sum = someArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)


// exo 4

