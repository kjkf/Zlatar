
(function () {



  function getStyle(elem, propertyName) {
      return getComputedStyle(elem)[propertyName];
  }

  function setHeight_Content_In(){
    var winowHeight = window.innerHeight;
    var winowWidth = window.innerWidth;

    var container = document.querySelector(".container");
    var content_in = document.querySelector(".content-in");


    var page_header = document.querySelector(".header");
    var page_footer = document.querySelector(".footer");

    var container_pt = getStyle(container, 'padding-top');
    var container_pb = getStyle(container, 'padding-bottom');


    var sum = parseInt(container_pt) + parseInt(container_pb) + page_header.clientHeight + page_footer.clientHeight
    var content_in_h = winowHeight - sum;

    console.log("page_header.clientHeight = " + page_header.clientHeight + "; page_footer.clientHeight = "+ page_footer.clientHeight);
    console.log("container_pt = " + container_pt + "; container_pb = "+ container_pb);
    console.log("sum = " + sum);
    console.log("winowHeight = " + winowHeight);
    console.log("content_in_h = " + content_in_h);

    content_in.style.height = content_in_h + "px";

    return content_in_h;
  }
  function setHeight_Content__Center(content_in_h){
    var content__center = document.querySelector(".content__center");
    var content__header = document.querySelector(".content__header");
    var content__footer = document.querySelector(".content__footer");
    //var content__breadcrumbs = document.querySelector(".content__breadcrumbs");

    var sum = content__header.clientHeight + content__footer.clientHeight
    var content__center_h = content_in_h - sum
    console.log("content__center_h = " + content__center_h);
    content__center.style.height = content_in_h + "px";
  }
  function calculateBlocksHeight(){
    const content_in_h = setHeight_Content_In();
    setHeight_Content__Center(content_in_h);
  }

  calculateBlocksHeight();

  window.addEventListener("resize", calculateBlocksHeight);

  

})();
