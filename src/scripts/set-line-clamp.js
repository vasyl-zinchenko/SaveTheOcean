const headers = document.querySelectorAll('.latest-news__card_headline');
const newsCardText = document.getElementsByClassName(
  'latest-news__card_paragraph'
);

function getCountOfLine(element) {
  return Math.round(element.offsetHeight / 10);
}

function setLineClapm(element, count) {
  return element.setAttribute(
    'style',
    `display: -webkit-box; -webkit-line-clamp: ${count}`
  );
}

for (let i = 0; i < headers.length; i++) {
  if (getCountOfLine(headers[i]) === 1) {
    setLineClapm(newsCardText[i], 6);
  }

  if (getCountOfLine(headers[i]) === 2) {
    setLineClapm(newsCardText[i], 6);
  }

  if (getCountOfLine(headers[i]) === 3) {
    setLineClapm(newsCardText[i], 4);
  }

  if (getCountOfLine(headers[i]) === 4) {
    setLineClapm(newsCardText[i], 4);
  }

  if (getCountOfLine(headers[i]) === 5) {
    setLineClapm(newsCardText[i], 3);
  }

  if (getCountOfLine(headers[i]) === 6) {
    setLineClapm(newsCardText[i], 2);
  }
}
