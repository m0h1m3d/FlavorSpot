const btn = document.createElement("button");
btn.textContent = 'click me'
btn.onclick = print

function print(){
    console.log('i"m in index.js');
};

document.body.appendChild(btn);