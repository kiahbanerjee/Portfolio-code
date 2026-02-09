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

contactText.addEventListener('click', () => {
  window.location.href = 'mailto:banek015@newschool.edu';
});

instagramText.addEventListener('click', () => {
  window.open('https://instagram.com/art.design_kiah', '_blank');
});

const edibleStreetsVideo = document.getElementById('edibleStreetsVideo');
const workBoxItems = document.querySelectorAll('.work-box');
const edibleStreetsBox = workBoxItems[1]; // Second box (index 1)

edibleStreetsBox.addEventListener('mouseenter', () => {
  edibleStreetsVideo.classList.add('show');
  edibleStreetsVideo.play();
});

edibleStreetsBox.addEventListener('mouseleave', () => {
  edibleStreetsVideo.classList.remove('show');
  edibleStreetsVideo.pause();
  edibleStreetsVideo.currentTime = 0;
});

const nothingIsWastedVideo = document.getElementById('nothingIsWastedVideo');
const nothingIsWastedBox = workBoxItems[2]; // Third box (index 2)

nothingIsWastedBox.addEventListener('mouseenter', () => {
  nothingIsWastedVideo.classList.add('show');
  nothingIsWastedVideo.play();
});

nothingIsWastedBox.addEventListener('mouseleave', () => {
  nothingIsWastedVideo.classList.remove('show');
  nothingIsWastedVideo.pause();
  nothingIsWastedVideo.currentTime = 0;
});

const editorialVideo = document.getElementById('editorialVideo');
const editorialBox = workBoxItems[4]; // Fifth box (index 4)

editorialBox.addEventListener('mouseenter', () => {
  editorialVideo.classList.add('show');
  editorialVideo.play();
});

editorialBox.addEventListener('mouseleave', () => {
  editorialVideo.classList.remove('show');
  editorialVideo.pause();
  editorialVideo.currentTime = 0;
});

const dinVideo = document.getElementById('dinVideo');
const dinBox = workBoxItems[0]; // First box (index 0)

dinBox.addEventListener('mouseenter', () => {
  dinVideo.classList.add('show');
  dinVideo.play();
});

dinBox.addEventListener('mouseleave', () => {
  dinVideo.classList.remove('show');
  dinVideo.pause();
  dinVideo.currentTime = 0;
});