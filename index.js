'use strict'

const API_IRL = 'https://api.adviceslip.com/advice';

const idAdvice = document.getElementById('idAdvice');
const textAdvice = document.getElementById('textAdvice');
const btn = document.getElementById('btnGetAdvice');

const isLoading = (value) => {
  const cssClass = 'working';
  if (value) {
    btn.classList.add(cssClass);
  } else {
    btn.classList.remove(cssClass);
  }
}

const request = async (url) => {
  isLoading(true);
  return await fetch(url)
    .then(res => { return res.json(); })
    .then(data => {
      return data.slip;
    });
}
const getAdvice = async () => {
  let { id, advice } = await request(API_IRL);
  isLoading(false);
  idAdvice.innerHTML = id;
  textAdvice.innerHTML = `"${advice}"`;
}

btn.addEventListener('click', () => {
  getAdvice();
});

getAdvice();