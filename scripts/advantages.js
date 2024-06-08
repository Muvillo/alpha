const advantages = [
    {
        "name": "Качество продукта",
        "description": "Мы гордимся результатами своей работы! Мы убеждены, что именно качество — это самое главное, это то, что даёт Нам уверенность в завтрашнем дне."
    },
    {
        "name": "Популярность бренда в сети",
        "description": "Мы занимаем высокие позиции в поисковой выдаче и имеем многочисленные отзывы, привлекающие новых заказчиков независимо от времени года."
    },
    {
        "name": "Передовое рабочее место",
        "description": "Комфортный офис в центре г. Санкт-Петербург, оборудованный передовыми технологиями. Твой рабочий компьютер может быть даже в твоём смартфоне!"
    },
    {
        "name": "Свои автоматизированные системы обучения",
        "description": "Создали и постоянно улучшаем собственные автоматизированные системы обучения специалистов и повышения их квалификации внутри компании."
    },
    {
        "name": "Сотрудничество с ведущими Компаниями рынкая",
        "description": "Сотрудничаем с ведущими Компаниями рынка строительных материалов: «Grand Line», «Петрович», «Окна Петербурга», «КраскиДоски», «Technonicol» и другими."
    }
]

for (let i = 0; i < advantages.length; i++) { 
    let content = document.createElement('div')
    let nameContent = document.createElement('div')
    let nameAdv = document.createElement('p')
    let iconMore = document.createElement('div')
    let description = document.createElement('div')

    nameAdv.innerHTML = advantages[i].name
    description.innerHTML = advantages[i].description
    iconMore.innerHTML = "+"

    iconMore.className = "iconMore"
    nameAdv.className = "nameAdv"
    nameContent.className = "nameContent"
    description.className = "descriptionAdv"
    content.className = "contentAdv"

    nameContent.append(nameAdv, iconMore)
    content.append(nameContent, description)
    document.getElementById('block4').append(content)  

    content.onclick = () =>{
        description.classList.toggle('descriptionAdvBlock')
        iconMore.classList.toggle('animatIcon')
    }
  }

