
const accesso = document.getElementById('accesso');

const registrazione = document.getElementById('registrazione');
const button = document.getElementById('button');
// creare una lista di persone che possono accedere
const myList = ["giuseppe@gmail.com", "paolo@gmail.com", "simone@hotmail.it", "giovanni@libero.it", "manuele@gmail.com"];
let input = document.getElementById('input').value = myList;
// controllare se l'utente è nella lista
button.addEventListener('click',

    function() {
        for (let index = 0; index < myList.length; index++) {
            let controllo = myList[index];
            
        }
        if (input = controllo) {
            accesso.style.display = 'block';
        }
    
        else {
            registrazione.style.display = 'block';
        }
}
)

// stampare un messaggio appropriato per l'utente