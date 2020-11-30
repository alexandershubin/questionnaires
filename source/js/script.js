// let poll = {
//   items: document.querySelectorAll('.questionnaire'),
//   btns: document.querySelectorAll('.btn-next'),
//   progress: document.querySelectorAll('.progress--opacity'),
//   count: 1,
//   start() {
//     this.allHidden()
//     this.items[0].style.display = 'flex'
//     this.progress[0].style.opacity = '1'
//
//     this.btns.forEach(btn => {
//       btn.addEventListener('click', () => {
//         this.nextItem()
//       })
//     })
//   },
//   nextItem() {
//     this.allHidden()
//     this.items[this.count].style.display = 'flex'
//     this.progress[this.count].style.opacity = '1'
//     this.count++
//   },
//   allHidden() {
//     this.items.forEach(item => {
//       item.style.display = 'none'
//     })
//   }
// }
// poll.start();


$(document).ready(function () {
  const items = $('.questionnaire'),
        btns = $('.btn-next');
  let num = 1;
  $('.questionnaire:eq(0)').show();


    // $('.btn-next').click(function () {
    //   $('.questionnaire:eq('+num)')')
    //   num++
    // })
});
