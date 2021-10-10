document.getElementById("btn").addEventListener("click", makerequest);


// promise then | single data

function makerequest(){
    const myInit ={
        method:'POST',
        Headers:{
            'Content-type': 'application/json'
        },
        body:'{" name": "sonam", "job":"web dev"}'
    }
    fetch('https://reqres.in/api/users', myInit)
    .then((Response)=>{
        if(!Response.ok){
            throw error (Response.statusText)
        }
        return Response.json()
    }).then((data)=>{ console.log(data)
    }).catch((error)=> console.log(error))
}


// // async await
// async function makerequest (){
//     try{
//     const myInit ={
//         method:'POST',
//         Headers:{
//             'Content-type': 'application/json'
//         },
//         body:'{" name": "sonam", "job":"web dev"}'
//     }
//     const Response = await fetch('https://reqres.in/api/users', myInit)
//     if(!Response.ok){
//         throw error (Response.statusText)
//     }
//     const data = await Response.json()
//     console.log(data)
//     }catch(error){
//         console.log(error)

//     }
// }

