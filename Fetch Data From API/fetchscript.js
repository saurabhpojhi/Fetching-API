document.getElementById("btn").addEventListener("click", makerequest);


// promise then | single data

// function makerequest() {
//     console.log(" Button clicked");
//     fetch('https://jsonplaceholder.typicode.com/posts/1').then((Response) => {
//         if (!Response.ok) {
//             throw Error(Response.statusText)
//         }
//         return Response.json()
//     }).then((data) => {
//         console.log("data", data)
//         console.log("ID:", data.id)
//         console.log("Title:", data.title)
//         console.log("Body:", data.body)
//     }).catch((error) => { console.log(error) })
// }




// // promise then | single data | showing data in webpage / browser

// function makerequest() {
//     console.log(" Button clicked");
//     fetch('https://jsonplaceholder.typicode.com/posts/1').then((Response) => {
//         if (!Response.ok) {
//             throw Error(Response.statusText)
//         }
//         return Response.json()
//     }).then((data) => {
//         console.log("data", data)
//        document.getElementById("pid").innerText = data.id
//        document.getElementById("title").innerText = data.title
//        document.getElementById("body").innerText = data.body
//     }).catch((error) => { console.log(error) })
// }

// promise then | Multiple  data


// function makerequest() {
//     console.log(" Button clicked");
//     fetch('https://jsonplaceholder.typicode.com/posts').then((Response) => {
//         if (!Response.ok) {
//             throw Error(Response.statusText)
//         }
//         return Response.json()
//     }).then((data) => {
//         console.log("data", data)
//        data.forEach(element => {
//         console.log("ID:", element.id)
//         console.log("Title:", element.title)
//         console.log("Body:", element.body)

//        });

//     }).catch((error) => { console.log(error) })
// }

// promise then | Multiple  data | showing data in webpage/browser


// function makerequest() {
//     console.log(" Button clicked");
//     fetch('https://jsonplaceholder.typicode.com/posts').then((Response) => {
//         if (!Response.ok) {
//             throw Error(Response.statusText)
//         }
//         return Response.json()
//     }).then((data) => {
//         console.log("data", data)
//         let output = document.getElementById("allpost")
//        data.forEach(element => {
//         output.innerHTML += `
//        <div>  ID: ${element.id}</div>
//        <div>  Title: ${element.title}</div>
//        <div>  Body: ${element.body}</div>

//         `

//        });

//     }).catch((error) => { console.log(error) })
// }



// // asyns await | single data

//  async function makerequest() {
//     try {
//         const Response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

//         if (!Response.ok) {
//             throw Error(Response.statusText)
//         }
//         const data = await Response.json()
//         console.log("data", data)
//         console.log("ID:", data.id)
//         console.log("Title:", data.title)
//         console.log("Body:", data.body)
//     } catch (error) {
//         console.log(error)
//     }
// }

// // asyns await | single data | Showing in webpage / brpwser

//  async function makerequest() {
//     try {
//         const Response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

//         if (!Response.ok) {
//             throw Error(Response.statusText)
//         }
//         const data = await Response.json()
//         console.log("data", data)
//         document.getElementById("pid").innerText = data.id
//        document.getElementById("title").innerText = data.title
//        document.getElementById("body").innerText = data.body
//     } catch (error) {
//         console.log(error)
//     }
// }




// // asyns await | Multiple data


// async function makerequest() {
//     try {
//         const Response = await fetch('https://jsonplaceholder.typicode.com/posts')

//         if (!Response.ok) {
//             throw Error(Response.statusText)
//         }
//         const data = await Response.json()
//         console.log("data", data)
//         data.forEach(element => {
//             console.log("ID:", element.id)
//             console.log("Title:", element.title)
//             console.log("Body:", element.body)
//         });  
//         } catch (error) {
//             console.log(error)
//         }
//     }




// asyns await | Multiple data | showing data in browser/webpage


async function makerequest() {
    try {
        const Response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if (!Response.ok) {
            throw Error(Response.statusText)
        }
        const data = await Response.json()
        console.log("data", data)
        let output = document.getElementById("allpost")
        data.forEach(element => {
            output.innerHTML += `
       <div>  ID: ${element.id}</div>
       <div>  Title: ${element.title}</div>
       <div>  Body: ${element.body}</div>

        `

        });

    } catch (error) {
        console.log(error)
    }
}

