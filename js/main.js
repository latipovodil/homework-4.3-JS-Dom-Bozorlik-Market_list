let spans = document.querySelectorAll(".span");
let btn_my = document.querySelectorAll(".btn_my");
let buttonsMinus = document.querySelectorAll('.btnMinus');
let buttonsPlus = document.querySelectorAll('.btnPlus');
let money = document.querySelectorAll(".text-muted");
let count = document.querySelectorAll(".count");
let all = document.querySelector('.all');
let all2 = document.querySelector('.all2');
let all_btn = document.querySelector('.all-btn');
for (const i of buttonsPlus) {
  let num = 0;
  i.addEventListener('click', () => {
    num = count[i.id - 1].textContent * 1;
    num++;
    count[i.id - 1].textContent = num;
    spans[i.id - 1].textContent = ((num) * (money[i.id - 1].textContent));
    let num2 = 0;
    for (const i of spans) {
      num2 += i.textContent * 1;
    };
    all.textContent = num2;
    all2.textContent = num2
  });
};
let num;
function x(a) {
  num = a;
};
for (const i of buttonsMinus) {
  i.addEventListener('click', () => {
    if (count[i.id - 1].textContent > 0) {
      let num = 0;
      num = count[i.id - 1].textContent;
      num--;
      count[i.id - 1].textContent = num;
      spans[i.id - 1].textContent = ((num) * (money[i.id - 1].textContent))
      let num2 = 0;
      for (const i of spans) {
        num2 += i.textContent * 1;
      };
      all.textContent = num2;
      all2.textContent = num2
    }
  });
};


for (const i of btn_my) {
  i.addEventListener('click', () => {
    alert(`   Thank you for your Buy

    Sizdan jami: ${spans[i.id - 1].textContent}$
    
    
    Lekin sayt soxta`)
  })
}