'use strict';


document.getElementById("fetch").addEventListener("click", function() {
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
})



// ASYNCRONUS
// POST in axios

// axios.post(url, {
//     name: "Morpheus",
//     role: "Leader"
// }).then()
// .catch()

function createUser() {
    const name = document.getElementById("userName").value;
    const url = "https://reqres.in/api/users";
    axios.post(url, {
        name
    }).then(res => console.log(res))
    .catch(err => console.error(err));

}