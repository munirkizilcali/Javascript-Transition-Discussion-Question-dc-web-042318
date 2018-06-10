// document.querySelector('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
document.querySelector('#save_lincoln').addEventListener('click', ()=>saveLincoln(parseInt(document.querySelector('#interval').value)))
function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000

  }
  document.querySelector('#foreground').style.opacity = 1
  setInterval(()=>{document.querySelector('#foreground').style.opacity -= 0.01}, interval/100)
}
