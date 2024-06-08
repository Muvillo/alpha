const dataContact = [
    {
        "sity": "САНКТ-ПЕТЕРБУРГ",
        "contacts": [
            {
                "numberPhone": "8 (812) 602-77-60",
                "email": "info@pplk.ru",
                "address": "<u> ул. Заозёрная, д. 8 к. 2, офис 202 <br> (7 мин. пешком от метро Фрунзенская)</u> ",
                "links": [
                    {
                        "youtube": "",
                        "vk": "",
                        "tg": ""
                    }
                ] //ссылки на соцсети
            }
        ]
    },
    {
        "sity": "МОСКВА"
    }
]

for (let i = 0; i<dataContact.length; i++){
    let btn = document.createElement('button')
    let p = document.createElement('p')
    p.innerHTML = dataContact[i].sity
    btn.className = "cardSection cardContactBtn"
    btn.onclick = () =>{
        dataContact[i].contacts.forEach(element =>{
            let container = document.createElement('div')
            let phoneIcon = document.createElement('div')
            let phoneNumber = document.createElement('p')
            let emailIcon = document.createElement('div')
            let emailText = document.createElement('p')
            let addressIcon = document.createElement('div')
            let addressText = document.createElement('p')
            let phone = document.createElement('div')
            let email = document.createElement('div')
            let address = document.createElement('div')
    
            phoneNumber.innerHTML = element.numberPhone
            emailText.innerHTML = element.email
            addressText.innerHTML = element.address

            phoneIcon.className = "contactIcon phoneIcon"
            emailIcon.className = "contactIcon emailIcon"
            addressIcon.className = "contactIcon addressIcon"
            phone.className = "containerContact"
            email.className = "containerContact"
            address.className = "containerContact"

            element.links.forEach(link =>{
                let youtube = document.createElement('img')
                let vk = document.createElement('img')
                let tg = document.createElement('img')
                let linkYoutube = document.createElement('a')
                let linkVk = document.createElement('a')
                let linkTg = document.createElement('a')
                let containerLink = document.createElement('div')

                linkYoutube.href = link.youtube
                linkVk.href = link.vk
                linkTg.href = link.tg
                youtube.src = "/images/youtube.svg"
                vk.src = "/images/vk.svg"
                tg.src = "/images/tg.svg"
                containerLink.className = "containerLink"

                linkYoutube.append(youtube)
                linkVk.append(vk)
                linkTg.append(tg)
                containerLink.append(linkYoutube, linkVk, linkTg)
                document.getElementById('linksContact').append(containerLink)
            })

            phone.append(phoneIcon, phoneNumber)
            email.append(emailIcon, emailText)
            address.append(addressIcon, addressText)
            container.append(phone, email, address)
            document.getElementById('contentContact').append(container)
        })
    }

    btn.append(p)
    document.getElementById('contentBlock8').append(btn)
}