'use strict'

const url = "https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=39SBa6EygP38f6E30TfpuL3daSd2xu4FpgVoe0LQ"

const createRequest = function(url){
    //1. create the request
    const httpRequest = new XMLHttpRequest(url)
    httpRequest.addEventListener('readystatechange',(url)=>{
        //when readyState is 4, means get the response(possible success or error)
        if(httpRequest.readyState == 4){
            console.log(httpRequest.responseText)
        }
    })
    //2. open the request
    httpRequest.open('GET',url)
    //3. send the request
    httpRequest.send()
}

createRequest(url);