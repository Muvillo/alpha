let parent = document.getElementById('block3')

const dataCard = [
    {
        "section": "СТРОИТЕЛЬНЫЙ ОТДЕЛ",
        "divisions": [
            {
                "name": "Прораб",
                "salary": "ОТ 00 000 РУБ",
                "description": [
                    {
                        "nameDesc": "Задачи:",
                        "points": ["описание", "описание", "описание"]
                    },
                    {
                        "nameDesc": "Наши ожидания:",
                        "points": ["описание", "описание"]
                    },
                    {
                        "nameDesc": "Мы предлагаем:",
                        "points": ["график 5/2 с гибким началом рабочего дня;", "оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;", "ежеквартальную премию по итогам работы;"]
                    }
                ]
            },
            {
                "name": "Специалист службы снабжения",
                "salary": "ОТ 00 000 РУБ"
            },
            {
                "name": "Логист",
                "salary": "Обсуждается на собеседовании"
            },
            {
                "name": "Проектировщик",
                "salary": "ОТ 00 000 РУБ"
            }
        ]
    },
    {
        "section": "ОФИС"
    },
    {
        "section": "ФИНАНСОВЫЙ ОТДЕЛ"
    },
    {
        "section": "ОТДЕЛ ПРОДАЖ"
    },
    {
        "section": "ВНЕШТАТНЫЙ СОТРУДНИК"
    }
]

for (let i = 0; i < dataCard.length; i++) { 
    let btn = document.createElement('button')
    let p = document.createElement('p')
    p.innerHTML = dataCard[i].section
    btn.className = "cardSection"
    btn.onclick = () =>{
        if (typeof dataCard[i].divisions != "undefined"){
            dataCard[i].divisions.forEach(element => {
                let content = document.createElement('div')
                let generalInfo = document.createElement('div')
                let info = document.createElement('div')
                let name = document.createElement('div')
                let nameText = document.createElement('p')
                let price = document.createElement('div')
                let priceText = document.createElement('p')
                let iconPrice = document.createElement('div')
                let iconMore = document.createElement('div')
                let iconVacancy = document.createElement('div')
                let iconClose = document.createElement('div')

                iconClose.className = "iconMore animatIcon"
                generalInfo.className = "borderCard"
                iconVacancy.className = "iconVacancy"
                content.className = "contentcard"
                name.className = "Vacancy"
                nameText.className = "nameTextVacancy"
                iconPrice.className = "iconPrice"
                priceText.className = "priceTextVacancy"
                price.className = "Vacancy"
                iconMore.className = "iconMore"

                nameText.innerHTML = element.name
                priceText.innerHTML = element.salary
                iconPrice.innerHTML = "₽"
                iconMore.innerHTML = "+"
                iconClose.innerHTML = "+"

                name.append(iconVacancy, nameText)
                price.append(iconPrice, priceText)
                info.append(name, price)
                content.append(info, iconMore)
                generalInfo.append(content)
                document.getElementById('cardContent').append(generalInfo) 

                function test(){
                if (typeof element.description != "undefined"){
                    let descr = element.description
                    iconMore.remove()
                    content.append(iconClose)
                    let infoMore = document.createElement('div')

                    for (let j=0; j<descr.length; j++){
                        let title = document.createElement('p')

                        title.innerHTML = descr[j].nameDesc

                        infoMore.className = "infoMoreCard"
                        title.className = "titleMore"

                        infoMore.append(title)

                        descr[j].points.forEach(point =>{
                            let points = document.createElement('ul')
                            let pointInfo = document.createElement('li')

                            pointInfo.innerHTML = point
                            points.append(pointInfo)
                            infoMore.append(points)
                        })
                        generalInfo.append(infoMore)
                        iconClose.onclick = ()=>{
                            infoMore.remove()
                            iconClose.remove()
                            content.append(iconMore)
                        }
                    }
                }
                else{
                    console.log("NO!")
                    iconMore.remove()
                    content.append(iconClose)
                    iconClose.onclick = ()=>{
                        content.append(iconMore)
                    }
                }}
                
                iconMore.onclick = ()=>{
                    test()
                }
            });
        }
        else{
            document.getElementById('cardContent').innerHTML = ""
        }
    }
    btn.append(p)
    parent.append(btn)
  }

  function More(description){  
    description.forEach(elem =>{
        console.log(elem.nameDesc)
    })
  }