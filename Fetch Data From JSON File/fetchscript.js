document.getElementById("btn").addEventListener("click", makerequest);


// promise then error handling

function makerequest(){
    console.log("Button clicked")
    fetch('data.json').then((Response)=>{
     if(!Response.ok){
         throw Error(Response.statusText)
     }
        console.log(Response);
        const dt = Response.json()
        console.log("dt",dt)
        return dt
    }).then((data)=>{
        console.log("data",data)
    }).catch((error) => { console.log(error)})
}


//  promise then Showing data in browser

// function makerequest(){
//     console.log("Button clicked")
//     fetch('data.json').then((Response)=>{
//      if(!Response.ok){
//          throw Error(Response.statusText)
//      }
//         console.log(Response);
//         return Response.json()
//     }).then((data)=>{
//         console.log(data)
//         document.getElementById("divdata1").innerText = data.name
//         document.getElementById("divdata2").innerText = data.roll
//     }).catch((error) => { console.log(error)})
// }



// // async and Await | Error handling

// async function makerequest(){
//     try{
//         console.log(" button clicked")
//         const response = await fetch('data.json')
//         if(!response.ok){
//             throw error (response.statusText)
//         }
//         console.log(response)
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//       console.log(error)
//     }
// }

// async and Await | showing data in browser

// async function makerequest(){
//     try{
//         console.log(" button clicked")
//         const response = await fetch('data.json')
//         if(!response.ok){
//             throw error (response.statusText)
//         }
//         console.log(response)
//         const data = await response.json()
//         console.log(data)
//         document.getElementById("divdata1").innerText = data.name
//         document.getElementById("divdata2").innerText = data.roll
//     }catch(error){
//       console.log(error)
//     }
// }