document.getElementById('btn1').addEventListener('click', () => {
  document.getElementsByTagName('body')[0].removeAttribute('class')
  document.getElementsByTagName('body')[0].className = 'bg2';
});


document.getElementById('btn2').addEventListener('click', () => {
  document.getElementsByTagName('body')[0].removeAttribute('class')
  document.getElementsByTagName('body')[0].className = 'bg1';
});
