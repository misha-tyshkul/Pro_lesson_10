const images = [
  '<img src="img/1.jpg" width=800 alt="#">',
  '<img src="img/2.jpg" width=800 alt="#">',
  '<img src="img/3.jpg" width=800 alt="#">',
  '<img src="img/4.jpg" width=800 alt="#">',
  '<img src="img/5.jpg" width=800 alt="#">',
  '<img src="img/6.jpg" width=800 alt="#">',
  '<img src="img/7.jpg" width=800 alt="#">',
  '<img src="img/8.jpg" width=800 alt="#">',
  '<img src="img/9.jpg" width=800 alt="#">',
];

function getImage(arr) {
  for (const key of arr) {
    const randomImage = Math.floor(Math.random() * arr.length);
    return document.write(arr[randomImage]);
  }
}
getImage(images);
