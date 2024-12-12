const todoList = document.querySelector('ul');
const resultText = document.querySelector('input');
const resultBtn = document.getElementById('resultBtn');

resultBtn.addEventListener('click', (e) => {
    if (resultText.value.trim() === '') {
        console.log('빈 값 생성 취소');
        resultText.value = '';
        return;
    }

    const newLi = document.createElement('li');
    const todoText = document.createTextNode(resultText.value);
    newLi.appendChild(todoText);
    todoList.appendChild(newLi);
    console.log('li 생성');

    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    newLi.appendChild(delBtn);
    console.log('삭제 버튼 생성');

    resultText.value = '';
});

todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        delResult = confirm('정말로 삭제하시겠습니까?');
        console.log('삭제하실?');
    }
    if (delResult === true) {
        e.target.parentElement.remove();
        console.log('ㅇㅇ 나 삭제할래');
    }
});