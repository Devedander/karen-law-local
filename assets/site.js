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
