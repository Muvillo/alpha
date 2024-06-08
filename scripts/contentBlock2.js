parent = document.getElementById("block2");
const data = [
    {
        "info": "2",
        "signature": "Города присутствия: <br> Санкт-Петербург и Москва"
    },
    {
        "info": ">30",
        "signature": "Лет среди лидеров рынка"
    },
    {
        "info": "100",
        "signature": "Домов и бань сдаём ежегодно"
    }
]

data.forEach(element =>{
    createContent(element.info, element.signature)
})

function createContent(info, signature){
    let content = document.createElement('div')
    content.className = "contentBlock2"
    let span = document.createElement('span')
    span.className = "square"
    span.innerHTML = info
    let p = document.createElement('p')
    p.className = "signature"
    p.innerHTML = signature
    parent.append(span, p)
}
