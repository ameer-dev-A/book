import './style.css'

// ---------open and close menue ----------------
 let openbtn = document.querySelector('.open');
  let imgbtn = document.querySelector('.imgbtn');
  let closebtn = document.querySelector('.close');
  let menue = document.querySelector('.menue');
  let nav = document.querySelector('nav');
  let active = document.querySelector('.active');
  let icon = document.querySelector('.icon');
 
  openbtn.addEventListener('click',()=>{
   imgbtn.style.filter = 'invert(1)';
   menue.classList.remove('hidden');
   nav.classList.add('absolute' ,'h-[660px]' ,'bg-black/70', 'text-white');
   active.style.backgroundColor="transparent";
   openbtn.classList.add('hidden');
   closebtn.classList.remove('hidden');
   icon.style.display="flex";
  })
  closebtn.addEventListener('click',()=>{
   imgbtn.style.filter = 'invert(0)'; 
   menue.classList.add('hidden');
   nav.classList.remove('absolute','h-[660px]','bg-black/70','text-white' );
   active.style.backgroundColor="var(--color-orange-500)";
   openbtn.classList.remove('hidden');
   closebtn.classList.add('hidden');
   icon.classList.add('hidden')
  })

// ---------tap contents ----------------

  let tap1 = document.querySelector('.tap1');
  let tap2 = document.querySelector('.tap2');
  let tap3 = document.querySelector('.tap3');
  let tap =document.querySelectorAll('#tap');

  let imgtap = document.querySelector('.imgtap');
  let headtap = document.querySelector('.headtap');
  let texttap = document.querySelector('.texttap');

  let data=[
    {
      image:"./images/illustration-features-tab-1.svg",
      headtext:"Bookmark in one click",
      text:" Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
        {
      image:"./images/illustration-features-tab-2.svg",
      headtext:"Intelligent search",
      text:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
      image:"./images/illustration-features-tab-3.svg",
      headtext:"Share your bookmarks",
      text:"  Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
  ]

  tap1.addEventListener('click',()=>{
    imgtap.src = data[0].image;
    headtap.textContent = data[0].headtext;
    texttap.textContent = data[0].text;
  })
  tap2.addEventListener('click',()=>{
    imgtap.src = data[1].image;
    headtap.textContent = data[1].headtext;
    texttap.textContent = data[1].text;
  })
    tap3.addEventListener('click',()=>{
    imgtap.src = data[2].image;
    headtap.textContent = data[2].headtext;
    texttap.textContent = data[2].text;
  })

tap.forEach((item) => {
  item.addEventListener('click', () => {

    tap.forEach((item) => {
      item.classList.remove('active2');
    });

    item.classList.add('active2');

  });
});

// ---------FAQ accordian ----------------
  let arrow = document.querySelectorAll('.arrow');
  let oarrow = document.querySelectorAll('.oarrow');
  let carrow = document.querySelectorAll('.carrow');
  let answer = document.querySelectorAll('.answer');

  arrow.forEach((item,index)=>{
    item.addEventListener('click',()=>{
      answer[index].classList.toggle('hidden');
      if(answer[index].classList.contains('hidden')){
      carrow[index].classList.add('hidden')
         oarrow[index].classList.remove('hidden');
      }else{
                 oarrow[index].classList.add('hidden');
          carrow[index].classList.remove('hidden')
      }  
    })
  })

  // ------------check mail -------------

  let email = document.querySelector('#email');
let btn = document.querySelector('.btn');
let textfalse = document.querySelector('.textfalse');

btn.addEventListener('click',()=>{
    if (email.value === '') {
    email.style.backgroundImage = 'none';
  } 
  else if (email.validity.typeMismatch) {
    email.style.backgroundImage = "url('./images/icon-error.svg')";
    email.style.backgroundRepeat = 'no-repeat';
    email.style.backgroundPosition = 'right 10px center';
    email.style.backgroundSize = '20px';
    textfalse.classList.remove('hidden')
  } 
  else {
    email.style.backgroundImage = 'none';
    textfalse.classList.add('hidden')
  }
})
