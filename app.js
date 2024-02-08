const dropIcon = document.querySelector('.fa-solid');
const menuList = document.querySelector('.lists');

dropIcon.addEventListener('click', () =>{
   if(menuList.classList.contains('lists-active')){
       menuList.classList.remove('lists-active')
   }else{
       menuList.classList.add('lists-active')
   }
   //menuList.classList.toggle("lists-active")  
})