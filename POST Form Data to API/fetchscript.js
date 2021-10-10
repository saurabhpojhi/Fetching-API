document.getElementById("btn").addEventListener("click", makerequest);


// POST DATA
// promise then 


function makerequest(e) {
    e.preventDefault()
    let name = document.getElementById("name").value
    let job = document.getElementById("job").value
    console.log("Button Clicked")
    const myInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, job: job })
    }
    console.log("Body:", myInit.body)
    fetch('https://reqres.in/api/users', myInit)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      }).then((data) => {
        console.log(data)
      }).catch((error) => console.log(error))
  }




// // promise then 

// function makerequest(e){
//     e.preventDefault()
//     let name = document.getElementById("name").value
//     let job = document.getElementById("job").value
//     const myInit ={
//         method:'POST',
//         Headers:{
//             'Content-type': 'application/json'
//         },
//         body:json.stringify({name:name, job:job})
//     }
//     console.log("Body:", myInit.body)
//     fetch('https://reqres.in/api/users', myInit)
//     .then((Response)=>{
//         if(!Response.ok){
//             throw error (Response.statusText)
//         }
//         return Response.json()
//     }).then((data)=>{ console.log(data)
//     }).catch((error)=> console.log(error))
// }


//  // async await
//   async function makerequest(e){
//     e.preventDefault()
//     let name = document.getElementById("name").value
//     let job = document.getElementById("job").value
//     const myInit ={
//         method:'POST',
//         Headers:{
//             'Content-type': 'application/json'
//         },
//         body:json.stringify({name:name, job:job})
//     }
//     console.log("Body:", myInit.body)
//     fetch('https://reqres.in/api/users', myInit)
//     .then((Response)=>{
//         if(!Response.ok){
//             throw error (Response.statusText)
//         }
//         return Response.json()
//     }).then((data)=>{ console.log(data)
//     }).catch((error)=> console.log(error))
// }
