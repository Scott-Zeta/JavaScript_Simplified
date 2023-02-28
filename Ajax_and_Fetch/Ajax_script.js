'use strict'

const url = "https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=39SBa6EygP38f6E30TfpuL3daSd2xu4FpgVoe0LQ"

const updateUISuccess = (data) =>{
    console.log(data)
}

const updateError = (error) =>{
    console.error(error)
}

const responseMethod = function(httpRequest) {
    //respnse only works when get something
    if(httpRequest.readyState === 4){
        if(httpRequest.status ===200){
            updateUISuccess(httpRequest.responseText)
        }else{
            updateError(httpRequest.status+": "+ httpRequest.responseText)
        }
    }else{
        console.error("ReadyState: " + httpRequest.readyState)
    }
}

const createRequest = function(url){
    //1. create the request
    const httpRequest = new XMLHttpRequest(url)
    //4. set the eventListener method to deal with response when readystate changed
    httpRequest.addEventListener('readystatechange', () => responseMethod(httpRequest))
    //2. open the request
    httpRequest.open('GET',url)
    //3. send the request
    httpRequest.send()
}

createRequest(url);