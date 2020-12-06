 function onFreeWordButtonClick() {
  let freeWordInput = document.getElementById("freeWordInput");
  let freeWordInputValue = freeWordInput.value;
  let freeWordInputName = freeWordInput.getAttribute("name");
  let showInput = document.getElementById("showInput");
  
  showInput.textContent = "name属性が" + freeWordInputName + "の入力された値"+ freeWordInputValue
 }