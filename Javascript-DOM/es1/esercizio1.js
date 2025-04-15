const html = document.documentElement;
console.log(html.children);

const body = html.children[1];
console.log(body.children);

const ul = body.children[0];
console.log(ul.parentElement.innerText);

const myList = ul.children[1];
console.log(myList.innerText);
console.log(myList.nextElementSibling.innerText);
console.log(myList.previousElementSibling.innerText);