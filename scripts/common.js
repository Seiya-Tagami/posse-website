document.getElementById('hamburger_menu').addEventListener('click',() =>{
  const clickBefore = document.getElementsByClassName('hamburger_menu_clickbefore')[0];
  clickBefore.classList.toggle('hamburger_menu_clickafter');

  const clickAfter = document.getElementsByClassName('p_header_ul')[0];
  clickAfter.classList.toggle('p_header_ul_clickbefore');
  clickAfter.animate([{opacity:"0"},{opacity:1}] , 400);

  if(document.querySelector('p_footer_line') != null){
    const footerLine = document.querySelector('p_footer_line');
  footerLine.classList.toggle('p_footer_line_disappear');
  } else {
    return;
  }
})
