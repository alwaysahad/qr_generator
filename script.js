const qrinput = document.getElementById('input');
const qrimg = document.getElementById('image');
const qrbutton = document.getElementById('button');

console.log(qrbutton,qrimg,qrinput);

qrbutton.addEventListener('click', () => {

  const inputValue = qrinput.value;
  console.log(inputValue);

  if (!inputValue) {
    alert('Please enter a valid URL!!')
    return; 
  }else{
    qrimg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrimg.alt= `QR code for${inputValue}`;
  }

})