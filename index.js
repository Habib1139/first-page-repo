document.getElementById('btn-post').addEventListener('click', function(){

    const commentBox = document.getElementById('comment-area')
    const comment = commentBox.value;

   const commentText= document.getElementById('comment-text')
   const p =document.createElement('p')
   p.innerText = comment;
   commentText.appendChild(p)

   commentBox.value = ('');
   
})