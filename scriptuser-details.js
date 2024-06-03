let id= localStorage.getItem('id')
let info=JSON.parse(localStorage.getItem('arr'))
console.log(info)
let starturl='https://jsonplaceholder.typicode.com/users'
let constrac = (id,url,arr)=> {
    let needurl = url + '/' + id + '/posts'
    //console.log(needurl)
let divinfo1=document.createElement('div')
        divinfo1.classList.add('divinfo')
    let divpuser= document.createElement('div')
    divpuser.classList.add('divpuser')
    let puser=document.createElement('p')
    puser.textContent=JSON.stringify(arr[id-1])
        document.body.appendChild(divinfo1)
    divpuser.appendChild(puser)

    let divbutuser = document.createElement('div')
    divbutuser.classList.add('divbutuser')
        let butpost1=document.createElement('button')
    butpost1.classList.add('butpostzag')
        butpost1.textContent='Post of current user'
        divinfo1.appendChild(divbutuser)
    divbutuser.appendChild(butpost1)
    divinfo1.append(divpuser,divbutuser)
    butpost1.addEventListener("click",() => {
            let divpost1 = document.createElement('div')
        divpost1.classList.add('divpost1')
            fetch(needurl)
                .then((value) => value.json())
                .then((info) => {
                    localStorage.setItem('post', JSON.stringify(info))
                    let i=1
                    for (const infoElement of info) {
                        let divdiv1= document.createElement('div')
                        divdiv1.classList.add('divdiv')
                        divdiv1.textContent = `title: ${infoElement.title}`
                        let butinfopost1=document.createElement('button')
                        butinfopost1.classList.add('butinfopost')
                        butinfopost1.id=i
                                     i++
                                     butinfopost1.textContent='learn more'
                        divdiv1.appendChild(butinfopost1)
                                    butinfopost1.addEventListener("click",() => {
                                        window.location.href = "post-details.html";
                                        localStorage.setItem('idtitlpost',butinfopost1.id)
                                        localStorage.setItem('idcom', infoElement.id)
                                    })
                        divpost1.appendChild(divdiv1)
                        console.log(infoElement)
                    }
                    divinfo1.appendChild(divpost1)
                })
        })
}
constrac(id,starturl,info)