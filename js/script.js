
//==========MILESTONE 0==========//
//Creare l’array di oggetti con le informazioni fornite.

const employees = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
]



//==========MILESTONE 1==========//
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < employees.length; i++) {
    console.log('Employee #',i)
    for (let key in employees[i]) {
        console.log('\t',key,' => ',employees[i][key]);
    }
}



//==========MILESTONE 2==========//
//Stampare le stesse informazioni su DOM sottoforma di stringhe

const employeesDiv = document.getElementById('employees');

for (let i = 0; i < employees.length; i++) {
    const elem = createProfile(employees[i]);
    employeesDiv.appendChild(elem);
}


//==========BONUS 1==========//
//Trasformare la stringa foto in una immagine effettiva












  //======================================================================= //
 //============================== fUNCTIONS  ============================= //
//======================================================================= //

function createProfile (employeeObj) {
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile', 'p-3', 'border-bottom');
    const root = './img/';
    
    for (let key in employeeObj) {
        if (key == 'img') {
            const tmpElem = document.createElement('img');
            tmpElem.src = root + employeeObj[key];
            tmpElem.classList.add('w-25');
            profileDiv.appendChild(tmpElem);
        } else {
            const tmpElem = document.createElement('p');
            tmpElem.classList.add(key);
            tmpElem.innerHTML = employeeObj[key];
            profileDiv.appendChild(tmpElem);
        }
    }

    return profileDiv;
}