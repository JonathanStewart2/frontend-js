'use strict';
// HYPERTEXT TRANSFER PROTOCOL

// GET - READ/fetch
// POST - CREATE
// PUT / PATCH -> Update - partial for patch
// DELETE - DELETE -> remove data

// Representational State Transfer - standard for building APIs
// GUI -> mouse + leyboard
// CLI -> typing
// Application Programming Interface -> code

// REQUEST: URL, headers (metadata), body (content)
// RESPONSE: headers, body, status code


// HOW TO ADD EVENT LISTENER
// document.getElementById("duckform").addEventListener("submit", function(event) {
//     event.preventDefault():
//     console.log("EVENT:", event);

//     const form = event.target;

//     const reqBody = {
//         name: form.duckName.value,
//         habitat: form.duckHabitat.value
//     }
// })

// POST REQUEST
// const reqBody = {
//     name: "Donald",
//     habitat: "Disney World"
// }

// axios.post(url, reqBody)
//     .then(res => console.log(res))
//     .catch(err => console.error(err));



// EXERCISES
const url = "https://reqres.in/api/users";

axios.get(url)
.then(response => appendData(response.data))
.catch(err => console.error(err));

const appendData = (data) => {
    console.log(data.data);
    let subData = data.data;
    let dataList = document.getElementById("dataDiv");
    for(let i = 0; i< subData.length; i++){
        let person = document.createElement("div");
        let personID = document.createElement("p");
        let personIDStrong = document.createElement("h1");
        //console.log(data[i]);
        personIDStrong.innerText = "ID: " + subData[i].id;
        personID.appendChild(personIDStrong);
        console.log(personID.innerText);
        person.appendChild(personID);

        let personEmail = document.createElement("h4");
        personEmail.innerText = "Email: " + subData[i].email;
        person.appendChild(personEmail);
        
        let personName = document.createElement("p");
        let personNameUL = document.createElement("u");
        personNameUL.innerText = "Name: " + subData[i].first_name + " " + subData[i].last_name;
        personName.appendChild(personNameUL);
        person.appendChild(personName);

        let personImg = document.createElement("img");
        personImg.src = (`${subData[i].avatar}`);
        person.appendChild(personImg);

        let breakLine = document.createElement("hr");
        person.appendChild(breakLine);
        dataList.appendChild(person);
    }
}

//2. GET request for single user with ID: 2
fetch(url)
.then(function(response){
    return response.json();
})
.catch(function(err){
    console.error(err);
})
.then(function(data){
    let userDetails = data.data

    for (let i=0; i < userDetails.length; i++){
        if (userDetails[i].id == 2){
            console.log(userDetails[i]);
        }
    }
})

//3 POST request for 'Create'
// name with a value of "Morpheus"
// job with a value of "Leader"

fetch(url, {
    method: "post",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(
        {
            "first_name": "Morpheus",
            "job" : "Leader"
        }
    )
}).then(response => response.json())
.then(data => console.log(`Request succeeded: ${JSON.stringify(data)}`))
.catch(error => console.log(`Request Failed: ${error}`));

//4 POST request for 'Register - Successful'
// email with a value of "eve.holt@reqres.inheus"
// password with a value of "pistol"

let url2 = "https://reqres.in/api/register";

fetch(url, {
    method: "post",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(
        {
            "email": "eve.holt@reqres.inheus",
            "password": "pistol"
        }
    )
}).then(response => response.json())
.then(data => console.log(`Request succeeded ${JSON.stringify(data)}`))
.catch(error => console.log(`Request Failed: ${error}`));

//5 POST request for 'Login - Successful'
// email with a value of "eve.holt@reqres.inheus"
// password with a value of "cityslicka"
let loginURL = "https://reqres.in/api/login";

fetch(loginURL, {
    method: "post",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(
        {
            "email": "eve.holt@reqres.inheus",
            "password": "cityslicka"
        }
    )
}).then(response => response.json())
.then(data => console.log(`Request succeeded ${JSON.stringify(data)}`))
.catch(error => console.log(`Request Failed: ${error}`));
