 let file = 'http://dk.бонч.рф/api/Document/GetById/470a5533-e8db-4c68-b842-39ebaba83645'

 fetch (file)
 .then ((response) => {return response.json();})
 .then ((data) => {
     document.getElementById('test').innerHTML = "Date: " + data.createdDate;
     console.log(data)
 })
