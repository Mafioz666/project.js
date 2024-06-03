let id = localStorage.getItem('idtitlpost')
let infopost=JSON.parse( localStorage.getItem('post'))
console.log(infopost)
 let starturl='https://jsonplaceholder.typicode.com'
 let constrac = (id,url,arr)=> {
     let needurl = url + '/users' + '/' + id + '/posts'

     console.log(needurl)
     let divinfo1 = document.createElement('div')
     divinfo1.classList.add('divinfopostconstr')
     let divinfopost = document.createElement('div')
     divinfopost.classList.add('divinfopost')
     divinfopost.textContent = JSON.stringify(arr[id - 1])
     divinfo1.appendChild(divinfopost)
     let divcom = document.createElement('div')
     let needurlcom = url + '/posts' + '/' + arr[id - 1].id + '/comments'
     fetch(needurlcom)
         .then((value) => value.json())
         .then((info) => {
             localStorage.setItem('arrcom', JSON.stringify(info))
             console.log('api')
             console.log(JSON.stringify(info))
         })
     let arrcom = JSON.parse(localStorage.getItem('arrcom'))
     console.log('arr')
     console.log(arrcom)
     for (const arrcomElement of arrcom) {
         let divcominform = document.createElement('div')
         divcominform.textContent = JSON.stringify(arrcomElement)
         divcom.appendChild(divcominform)
     }
     divinfo1.appendChild(divcom)
     document.body.appendChild(divinfo1)
 }
constrac(id,starturl,infopost)