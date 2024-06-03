let id = localStorage.getItem('idtitlpost')
let infopost=JSON.parse( localStorage.getItem('post'))
let idcom=localStorage.getItem('idcom')
console.log(infopost)
 let starturl='https://jsonplaceholder.typicode.com'
 let constrac = (id,url,arr,idcom)=> {
     let needurl = url + '/users' + '/' + id + '/posts'

     let divinfo1 = document.createElement('div')
     divinfo1.classList.add('divinfopostconstr')
     let divinfopost = document.createElement('div')
     divinfopost.classList.add('divinfopost')
     divinfopost.textContent = JSON.stringify(arr[id - 1])
     divinfo1.appendChild(divinfopost)

     let divcom = document.createElement('div')
     divcom.classList.add('divcom')
     let needurlcom = url + '/posts' + '/' + idcom + '/comments'
     fetch(needurlcom)
         .then((value) => value.json())
         .then((info) => {
             for (const arrcomElement of info) {
                 let divcominform = document.createElement('div')
                 divcominform.classList.add('divcominform')
                 divcominform.textContent = JSON.stringify(arrcomElement)
                 divcom.appendChild(divcominform)
             }
         })
     divinfo1.appendChild(divcom)
     document.body.appendChild(divinfo1)
 }
constrac(id,starturl,infopost,idcom)