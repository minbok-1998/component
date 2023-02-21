let cnt = 1;
setInterval(() => {
  document.getElementById("radio" + cnt).checked = true;
  cnt++;
  if (cnt > 4) {
    cnt = 1;
  }
}, 5000);

// setTimeout(() => {
//     if(cnt = 4) {
//         cnt = 1
//     }
// }, 1000)

// console.log(cnt)

// 4에 1번 그림 넣고 몇초뒤에 1로 옮기기
