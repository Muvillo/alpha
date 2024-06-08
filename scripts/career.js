const dataCareer = [
    {
        "name": "Олег Воробьев",
        "post": "Прораб",
        "evidence": ["В Компании с 2018 года. Начал с позиции плотника в строительной бригаде.", "В течение года работы Олег стал бригадиром и был приглашён в офис Компании на должность штатного Производителя строительных работ.", "На данный момент в Его подчинении находятся 9 строительных бригад. Олег вносит весомый вклад в итоговый результат Компании, а это реализация 100 объектов в год!"],
        "photo": "/images/Олег.webp"
    },
    {
        "name": "Мария Обухова",
        "post": "Руководитель финансовой службы",
        "evidence": ["В декабре 2018 года заступил на должность Менеджера отдела продаж.", "После 9 месяцев стабильных результатов, зарекомендовав себя как надёжный сотрудник, получил ответственную должность Логиста.", "Через год Даниил занял должность Специалиста службы снабжения, взяв на себя помимо закупа материала ещё и крайне важную роль Сметчика."],
        "photo": "/images/Мария.webp"
    },
    {
        "name": "Даниил Басенков",
        "post": "Менеджер по снабжению",
        "evidence": ["В декабре 2018 года заступил на должность Менеджера отдела продаж.", "После 9 месяцев стабильных результатов, зарекомендовав себя как надёжный сотрудник, получил ответственную должность Логиста.", "Через год Даниил занял должность Специалиста службы снабжения, взяв на себя помимо закупа материала ещё и крайне важную роль Сметчика."],
        "photo": "/images/Данил.webp"
    }
]

const slides = []
let arrowLeft = document.createElement('img')
let arrowRight = document.createElement('img')

arrowLeft.className = "arrow arrowLeft"
arrowRight.className = "arrow arrowRight"

arrowLeft.src = "/images/arrowLeft.svg"
arrowRight.src = "/images/arrowRight.svg"

document.getElementById('slideCareer').append(arrowLeft, arrowRight)

for (let i=0; i<dataCareer.length; i++){
    let containerPhoto = document.createElement('div')
    let photo = document.createElement('img')
    let name = document.createElement('p')
    let post = document.createElement('p')
    let containerSlider = document.createElement('div')
    let containerInfo = document.createElement('div')

    name.innerHTML = dataCareer[i].name
    post.innerHTML = dataCareer[i].post
    dataCareer[i].evidence.forEach(element =>{
        let info = document.createElement('ul')
        let point = document.createElement('li')

        info.className = "infoCareer"
    
        point.innerHTML = element
        info.append(point)
        containerInfo.append(info)
    })

    photo.src = dataCareer[i].photo

    containerPhoto.className = "containerPhotoCareer"
    name.className = "nameCareer"
    post.className = "nameCareer postCareer"
    containerInfo.className = "containerInfoCareer"

    containerPhoto.append(photo)
    containerSlider.append(containerPhoto, name, post, containerInfo)
    document.getElementById('slideCareer').append(containerSlider)

    slides.push(containerSlider)

}

const slideCount = slides.length;
let slideIndex = 0;

arrowLeft.addEventListener('click', showPreviousSlide);
arrowRight.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider(){
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
}

updateSlider();
