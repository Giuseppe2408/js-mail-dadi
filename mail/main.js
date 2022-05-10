
const accesso = document.getElementById('accesso');

let registrazione = document.getElementById('registrazione');
const button = document.getElementById('button');
// creare una lista di persone che possono accedere
const myList = ["giuseppe@gmail.com", "paolo@gmail.com", "simone@hotmail.it", "giovanni@libero.it", "manuele@gmail.com"];
let mail = false;
// controllare se l'utente è nella lista
button.addEventListener('click',

    function() {
        for (let index = 0; index < myList.length; index++) {
            let controllo = myList[index];
            let input = document.getElementById('input').value;
            
            if (controllo == input) {
                mail = true;
                
                document.querySelector('.text').innerHTML = "l'email inserita è:" + input;
            }

            else {
                document.querySelector('.text').innerHTML = "l'email inserita è:" + input;
                
            }
        
        }
        
        if (mail == true) {
            document.getElementById('accesso').innerHTML = 'email riconosciuta'
        }   

        else {
            document.getElementById('registrazione').innerHTML = 'email non riconosciuta'
        }
    }   

    
    
)


