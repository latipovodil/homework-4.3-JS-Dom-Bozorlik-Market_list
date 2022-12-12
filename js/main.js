const spans = document.querySelectorAll(".span");
const btn_my = document.querySelectorAll(".btn_my");
const buttonsMinus = document.querySelectorAll('.btnMinus');
const buttonsPlus = document.querySelectorAll('.btnPlus');
const money = document.querySelectorAll(".text-muted");
const count = document.querySelectorAll(".count");
const all = document.querySelector('.all');
const all2 = document.querySelector('.all2');
const all_btn = document.querySelector('.all-btn');
const offcanvas = document.querySelector('.offcanvas-box')
const img = document.querySelectorAll('.img')
const card_title = document.querySelectorAll('.card-title')
let arr = []

for (const i of buttonsPlus) {

  let num = 0;
  i.addEventListener('click', () => {




    if (!arr.includes(card_title[i.id - 1].textContent)) {
      arr.push(card_title[i.id - 1].textContent);
      const ul = document.createElement('ul')
      ul.style.listStyle = 'none'
      ul.innerHTML = `
<li><img style="width:50px;height:50px;" src="${img[i.id - 1].src}" class="img img-fluid rounded-start" alt="img"><p>${card_title[i.id - 1].textContent}</p></li>
`
      offcanvas.append(ul)
    }





    num = count[i.id - 1].textContent * 1;
    num++;
    count[i.id - 1].textContent = num;
    spans[i.id - 1].textContent = ((num) * (money[i.id - 1].textContent));
    let num2 = 0;
    for (const i of spans) {
      num2 += i.textContent * 1;
    };
    all.textContent = num2;
    all2.textContent = num2;
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
      spans[i.id - 1].textContent = ((num) * (money[i.id - 1].textContent));
      let num2 = 0;
      for (const i of spans) {
        num2 += i.textContent * 1;
      };
      all.textContent = num2;
      all2.textContent = num2;
    };
  });
};
for (const i of btn_my) {
  i.addEventListener('click', () => {
    alert(`Thank you for your Buy
Sizdan jami: ${spans[i.id - 1].textContent}$
Lekin sayt soxta`)
  })
}




