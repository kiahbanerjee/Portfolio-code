const kiahBtn = document.getElementById('kiahBtn');
const image = document.getElementById('imageofme');
const aboutBtn = document.getElementById('aboutBtn'); 
const aboutBox = document.getElementById('aboutBox');
const projectsBtn = document.getElementById('projectsBtn'); 
const workBoxes = document.getElementById('workBoxes'); 
const instagramText = document.getElementById('instagramText');  
const contactText = document.getElementById('contactText'); 
const cvText = document.getElementById('cvText'); 


kiahBtn.addEventListener('click', () => {
  image.classList.toggle('show');
  instagramText.classList.toggle('show'); 
});
aboutBtn.addEventListener('click', () => {  
  aboutBox.classList.toggle('show');
  contactText.classList.toggle('show');
  cvText.classList.toggle('show');

});
projectsBtn.addEventListener('click', () => { 
  workBoxes.classList.toggle('show');
});

