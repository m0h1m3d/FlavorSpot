import './style.css';
import initialLoad from './initial-load';
import loadHome from './home';
import loadMenu from './menu';
import loadSupport from './support';

initialLoad();

const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const supportBtn = document.querySelector('.support-btn');
const nav = document.querySelector('nav');
let currentPage = 'home';


homeBtn.addEventListener('click', ()=>{
    if(currentPage === 'home') return;
    removePage(currentPage);
    currentPage = 'home';
    
    loadHome();

    const home = document.querySelector('.home');
    home.classList.add('hidden');
   setTimeout(() => {
       home.classList.remove('hidden');
    }, 300);
    
    nav.style.borderRadius = '100px 0px 0px 0px';
});

menuBtn.addEventListener('click', ()=>{
    if(currentPage === 'menu') return;
    removePage(currentPage);
    currentPage='menu';
    
    loadMenu();

    const menu = document.querySelector('.menu');
    menu.classList.add('hidden');
   setTimeout(() => {
       menu.classList.remove('hidden');
   }, 300);

    nav.style.borderRadius = '100px 0px 0px 100px';
});

supportBtn.addEventListener('click', ()=>{
    if(currentPage === 'support') return;
    removePage(currentPage);
    currentPage = 'support';
    
    loadSupport();

    const support = document.querySelector('.support');
    support.classList.add('hidden');
    setTimeout(() => {
        support.classList.remove('hidden');
    }, 300);

    nav.style.borderRadius = '20px 0px 0px 20px';
});

function removePage(name){
    if(!name) return;
    const targetSection = document.querySelector(`.${name}`);
    if(name === 'home'){
        const home = document.querySelector('.home')
        const about = document.querySelector('.about');
        const choose = document.querySelector('.choose');
        home.remove();
        about.remove();
        choose.remove();
    }else{
        targetSection.remove();
    }
    
}