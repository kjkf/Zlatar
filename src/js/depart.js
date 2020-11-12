(function () {

  // function closeBlock(blockname){
  //   var block = document.getElementByID(blockname);
  //
  // }
  console.log("paraparapam");
  const title = document.querySelector(".title.collapse");
  if(title) {
      title.addEventListener('click', e => {
          console.log("clicked!!!")
      });
  }

})
