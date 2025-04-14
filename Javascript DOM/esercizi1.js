const html = document.documentElement;
html.children;

const body = html.children[1];
body.children

const ul = body.children[0]

const myList = ul.children[1]

myList.parentElement

myList.nextElementSibling

myList.previousElementSibling

ul.innerText