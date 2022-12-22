const url="https://jsonplaceholder.typicode.com/photos";
fetch(url).then(res=>res.json())
.then(data=>{
  for(let i=0;i<data.length;i++){
     //create element div
    let newdiv=document.createElement('div')
    newdiv.classList.add('container')
    //creer element image
    let image = document.createElement('img')
    //ajouter attribut src de l'image
    image.setAttribute('src',data[i].thumbnailUrl)
    //ajouter class image  l'image
    image.classList.add('image')
    ////creer element paragraphe
    let titre =document.createElement('p')
    titre.innerHTML=data[i].title
    //ajouter image => body 
    newdiv.appendChild(image)
      //ajouter paragraphe => body 
    newdiv.appendChild(titre)
    document.body.appendChild(newdiv)
  }


})
.catch(err=>console.log(err))