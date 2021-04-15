let url = "www.example.com/api/get/1"

fetch(url ,{ 
    method :"GET", 
    "Content-Type" : "application/json"
})
.then(res => res.json() )
.then(data => console.log(data))