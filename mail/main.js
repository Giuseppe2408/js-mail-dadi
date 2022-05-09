
const accesso = document.getElementById('accesso');

let registrazione = document.getElementById('registrazione');
const button = document.getElementById('button');
// creare una lista di persone che possono accedere
const myList = ["giuseppe@gmail.com", "paolo@gmail.com", "simone@hotmail.it", "giovanni@libero.it", "manuele@gmail.com"];

// controllare se l'utente è nella lista
button.addEventListener('click',

    function() {
        for (let index = 0; index < myList.length && controllo != myList; index++) {
            let controllo = myList[index];
            let input = document.getElementById('input').value;
            
            if (controllo == input) {
                accesso.style.display = 'block';
            }

            else {
                registrazione.style.display = 'block';
            }
        
        }
        
    }   
)


