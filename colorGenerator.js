const getcolor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("written").innerHTML = "The hex-code for the color displayed here is ";
    document.getElementById("color-code").innerHTML = randomCode;
    document.getElementById("color-code").style.color = randomCode;

}
  
document.getElementById("butn").addEventListener("click", getcolor)












//const getcolor = () => {
//  const randomNumber = (Math.random() * 0xfffff * 1000000).toString(16);
//   return '#' + n.slice(0, 6);
// };