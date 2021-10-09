document.getElementById("btn").addEventListener("click", makerequest);

// function makerequest() {
//     console.log(" Button Clicked");
//     const promiseobj = fetch('data.txt')
//     console.log(promiseobj)
//     promiseobj.then((response) => { console.log(response); 
//         return response.text() 
//     }).then((data) => { console.log(data) })
// }

function makerequest(){
    console.log("Button clicked")
    fetch('data.txt').then((Response)=>{
        console.log(Response);
        return Response.text()
    }).then((data)=>{
        console.log(data)
    })
}

// promise then error handling

// function makerequest(){
//     console.log("Button clicked")
//     fetch('data1.txt').then((Response)=>{
//      if(!Response.ok){
//          throw Error(Response.statusText)
//      }
//         console.log(Response);
//         return Response.text()
//     }).then((data)=>{
//         console.log(data)
//     }).catch((error) => { console.log(error)})
// }


//  promise then Showing data in browser

// function makerequest(){
//     console.log("Button clicked")
//     fetch('data.txt').then((Response)=>{
//      if(!Response.ok){
//          throw Error(Response.statusText)
//      }
//         console.log(Response);
//         return Response.text()
//     }).then((data)=>{
//         console.log(data)
//         document.getElementById("divdata").innerText = data
//     }).catch((error) => { console.log(error)})
// }

// async and Await

// async function makerequest(){
//     console.log(" button clicked")
//     const response = await fetch('data.txt')
//     console.log(response)
//     const data = await response.text()
//     console.log(data)
// }

// // async and Await | Error handling

// async function makerequest(){
//     try{
//         console.log(" button clicked")
//         const response = await fetch('data1.txt')
//         if(!response.ok){
//             throw error (response.statusText)
//         }
//         console.log(response)
//         const data = await response.text()
//         console.log(data)
//     }catch(error){
//       console.log(error)
//     }
// }

// async and Await | showing data in browser

// async function makerequest(){
//     try{
//         console.log(" button clicked")
//         const response = await fetch('data1.txt')
//         if(!response.ok){
//             throw error (response.statusText)
//         }
//         console.log(response)
//         const data = await response.text()
//         console.log(data)
//         document.getElementById("divdata").innerText = data
//     }catch(error){
//       console.log(error)
//     }
// }