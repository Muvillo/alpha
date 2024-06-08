let modal = document.getElementById('modal')
let sent = document.getElementById('sent')

function sendQeust(){
    modal.style.display = 'block'
}

function closeQuest(){
    modal.style.display = 'none'
    sent.style.display = 'none'
}

function sendFillesQuest(){
    sent.style.display = 'block'
}