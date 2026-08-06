const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)})}

const form=document.querySelector('[data-contact]');
if(form){form.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent('Website message from '+data.get('first')+' '+data.get('last'));
  const body=encodeURIComponent('Name: '+data.get('first')+' '+data.get('last')+'\nEmail: '+data.get('email')+'\n\n'+(data.get('message')||''));
  const status=form.querySelector('.form-status');
  status.textContent='Opening your email application to send this message to Karen.';
  window.location.href='mailto:karenwebblaw@gmail.com?subject='+subject+'&body='+body;
})}

const lawFooterFine=document.querySelector('.site-footer .fine');
if(lawFooterFine&&!lawFooterFine.querySelector('.site-credit')){
  lawFooterFine.insertAdjacentHTML('beforeend','<br><span class="site-credit">Website by <a href="https://johnwangcs.com" target="_blank" rel="noopener noreferrer">johnwangcs.com</a></span>');
}

const revealSelectors=[
  '.hero-copy > *',
  '.hero-portrait',
  '.law-home-content > .wrap > *',
  '.section .intro-grid > *',
  '.section .contact-grid > *',
  '.section .legal > *',
  '.practice-list > *',
  '.site-footer .footer-grid > *'
];
const revealElements=[...new Set(revealSelectors.flatMap(selector=>[...document.querySelectorAll(selector)]))];
revealElements.forEach(element=>element.classList.add('reveal'));

if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){
  revealElements.forEach(element=>element.classList.add('visible'));
}else{
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  }),{threshold:.12});

  revealElements.forEach(element=>{
    const siblings=revealElements.filter(item=>item.parentElement===element.parentElement);
    element.style.transitionDelay=`${Math.min(siblings.indexOf(element),3)*70}ms`;
    revealObserver.observe(element);
  });
}
