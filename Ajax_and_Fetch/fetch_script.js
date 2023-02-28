'use strict'

const url = "https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=39SBa6EygP38f6E30TfpuL3daSd2xu4FpgVoe0LQ"

//save the potentional selected area in advance can save resource compare with select them when executing functions
const park = document.querySelector("#name")
// let parkLink = park.getAttribute("href")
const description = document.querySelector("#description")

const updateUISuccess = (data) =>{
    //const parseData = JSON.parse(data)
    const parseData = data
    console.log(parseData)
    const random = Math.floor(Math.random() * (parseData.total - 1))
    park.textContent = parseData.data[random].fullName
    park.href = parseData.data[random].url
    description.textContent = parseData.data[random].description
}

const updateError = (error) =>{
    console.error(error)
}

// const responseMethod = function(httpRequest) {
//     //respnse only works when get something
//     if(httpRequest.readyState === 4){
//         if(httpRequest.status ===200){
//             updateUISuccess(httpRequest.responseText)
//         }else{
//             updateError(httpRequest.status+": "+ httpRequest.responseText)
//         }
//     }else{
//         console.log("ReadyState: " + httpRequest.readyState)
//     }
// }

// const createRequest = function(url){
//     //1. create the request
//     const httpRequest = new XMLHttpRequest(url)
//     //4. set the eventListener method to deal with response when readystate changed
//     httpRequest.addEventListener('readystatechange', () => responseMethod(httpRequest))
//     //2. open the request
//     httpRequest.open('GET',url)
//     //3. send the request
//     httpRequest.send()
// }

const handleErrors = function (response) {
    //fetch success condition different with AJAX
    if(!response.ok){
        throw (response.status + ': ' + response.statusText)
    }
    return response.json()
}

const createRequest = function(url){
    //every fetch then needs a return to pass data to next step
    fetch(url)
        //fetch response is not plan json, so need to convert
        .then((response) => handleErrors(response))
        //after convert, it is a json node but not a json string, so don't need to JSON.parse() agian.
        .then((data) => updateUISuccess(data))
        .catch((error) => updateError(error))
}

window.addEventListener("DOMContentLoaded", createRequest(url))