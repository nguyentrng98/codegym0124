let inputWidth;
let inputHeight;

inputWidth = prompt('Enter the width');
inputHeight = prompt('Enter the height');

// Chuyển dữ liệu từ chuỗi sang số nguyên
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area = width * height;
document.write('The area is: ' + area);