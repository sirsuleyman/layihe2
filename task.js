const touchPicture = document.querySelector('.picture');
const touchImg = document.querySelector('.img');
const touchButton = document.querySelector('.enter')
const touchInput = document.querySelector('.text');
const touchBtn = document.querySelector('.x-btn');
const touchList = document.querySelector('.list');
const touchLists = document.querySelector('.lists');
const touchLi = document.querySelectorAll('li');
const touchContainer = document.querySelector('.container');
const touchCircle = document.querySelector('.circlee')


touchList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove()
  }
});

touchButton.addEventListener('click', () => {
  if (touchInput.value === "") {
    alert("Add the value");
  } else {
    touchList.style.display = "block";
    touchLists.style.display = "block";
    let value = touchInput.value;
    touchList.innerHTML += `<li>${value} <button class="x-btn">X</button></li>`;
    touchInput.value = '' 
    touchList.style.display = "flex";
    touchList.style.flexDirection = "column";
    touchList.style.justifyContent = "space-between";
    touchList.style.width = '100%';
    touchLists.style.height = '100%' 
    touchContainer.style.height = '100%';
    touchContainer.style.width = '336px';
    touchLists.style.width = '100%';
    touchLi.style.width ='100%'
    touchLi.style.height = '100%';
    touchList.style.fontSize = '20px';

  }
});


if (
  touchPicture.addEventListener("click", () => {
    touchImg.style.display = "block";
    touchPicture.style.display = "none";
    let arr = [];
  const data = [...touchList.children];
  data.forEach(item =>{
    arr.push(item.innerHTML);
  })
  arr.sort();
  touchList.innerHTML = '';
  arr.forEach(item =>{
    let li = `<li>${item}</li>`;
    touchList.innerHTML += li;
  })
  })
) {
}
if (
  touchImg.addEventListener("click", () => {
    touchPicture.style.display = "block";
    touchImg.style.display = "none";
    let arr = [];
    const data = [...touchList.children];
    data.forEach(item =>{
      arr.push(item.innerHTML);
    })
    arr.sort();
    arr.reverse()
    touchList.innerHTML = '';
    arr.forEach(item =>{
      let li = `<li>${item}</li>`;
      touchList.innerHTML += li;
    })
  })
) {
}






