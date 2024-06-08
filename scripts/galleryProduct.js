const dataProduct = [
    {
        "name": "Бани",
        "content": ["1", "2", "3", "4", "5", "6", "7"] //указываются URL фотографий
    },
    {
        "name": "Дома",
        "content": ["", "", "", "", ""] //указываются URL фотографий
    }
]

let containerForBtn = document.createElement('div')

for (let i=0; i < dataProduct.length; i++){
    let btn = document.createElement('button')
    let containerProduct = document.createElement('div')
    let galleryProduct = document.createElement('div')
    let arrowLeft = document.createElement('img')
    let arrowRight = document.createElement('img')

    btn.innerHTML = dataProduct[i].name

    containerForBtn.className = "conteinerBtn"
    btn.className = "cardSection cardProductBtn"
    galleryProduct.className = "galleryProduct"
    arrowLeft.className = "arrow arrowLeft"
    arrowRight.className = "arrow arrowRight"

    arrowLeft.src = "/images/arrowLeft.svg"
    arrowRight.src = "/images/arrowRight.svg"

    containerForBtn.append(btn)
    galleryProduct.append(arrowLeft, arrowRight)
    document.getElementById('block5').append(containerForBtn)

    let ids = []

    btn.onclick = ()=>{
        for (let j=0; j<dataProduct[i].content.length; j++){
            let product = document.createElement('div')
            product.innerHTML = dataProduct[i].content[j] 
            product.id = "product" +  j 

            ids.push(product)

            product.className = "productCard"
            
            galleryProduct.append(product)
            containerProduct.append(galleryProduct)
        }
        
        document.getElementById('block5').append(containerProduct)

        const sliders = ids
        const slideCount = sliders.length
        let slideIndex = 0

        arrowLeft.addEventListener('click', showPreviousSlide)
        arrowRight.addEventListener('click', showNextSlide)

        function showPreviousSlide(){
            slideIndex = (slideIndex -1 + slideCount) % slideCount
            updateSlider()
        }

        function showNextSlide(){
            slideIndex = (slideIndex+1)% slideCount
            updateSlider()
        }

        function updateSlider(){
          let index
          sliders.forEach(element => {
            element.id ="none"
          });
          for (index = 0; index < sliders.length; index++){
            if (index === slideIndex){
              sliders[index].id = "product" + 1
              sliders[index -1 ].id = "product" + 0
              sliders[index + 1].id = "product" + 2
            }
          }
        }

        updateSlider();
    }
}

