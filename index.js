// Code your solutions in this file
const messages = [];
function writeCards(names, event){
    const messages = [];
    for (let i = 0; i < names.length; i++){
       messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return (messages);
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(n){
    while (n >= 0){
        console.log(n--);
    }
}

countDown(10);