// generare numero random da 1 a 6
const button = document.querySelector('button');
let risultato = document.querySelector('.risultato')

button.addEventListener('click',

    function () {
        const player = Math.floor(Math.random() * 6) + 1;
        console.log(player);
        const pc = Math.floor(Math.random() * 6) + 1;
        console.log(pc);

        if (player > pc) {
            console.log('hai vinto!');
        }
        
        else {
            console.log('hai perso!');
        }
        
        
    }



)