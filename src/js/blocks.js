
(function () {

  function getStyle(elem, propertyName) {
      return elem!=null ? getComputedStyle(elem)[propertyName] : 0;
  }

  function setHeight_Content_In(content_in){
    //вычисление высоты .content-in
    const winowHeight = window.innerHeight;
    const winowWidth = window.innerWidth;
    //........................................................................//
    const container = document.querySelector(".container");
    var container_h = 0;
    if (container){
      const container_pt = getStyle(container, 'padding-top');
      const container_pb = getStyle(container, 'padding-bottom');
      container_h = parseInt(container_pt) + parseInt(container_pb);
    }
    //........................................................................//
    const content = document.querySelector(".content");
    var content_h = 0;
    if (content){
      const content_pt = getStyle(content, 'padding-top');
      const content_pb = getStyle(content, 'padding-bottom');
      content_h = parseInt(content_pt) + parseInt(content_pb);
    }
    //........................................................................//
    const page_header = document.querySelector(".header");
    var page_header_h = 0;
    if (page_header){
      const page_header_mt = getStyle(page_header, 'margin-top');
      const page_header_mb = getStyle(page_header, 'margin-bottom');
      page_header_h = page_header.clientHeight + parseInt(page_header_mt) + parseInt(page_header_mb);
    }
    //........................................................................//
    const page_footer = document.querySelector(".footer");
    var page_footer_h = 0;
    if (page_footer){
      const page_footer_mt = getStyle(page_footer, 'margin-top');
      const page_footer_mb = getStyle(page_footer, 'margin-bottom');
      page_footer_h = page_footer.clientHeight + parseInt(page_footer_mt) + parseInt(page_footer_mb);
    }
    //........................................................................//
    //var content_in = document.querySelector(".content-in");
    var sum = container_h +
              content_h +
              page_header_h +
              page_footer_h;
    var content_in_h = winowHeight - sum;

    // console.log("page_header_h = " + page_header_h + "; page_footer_h = "+ page_footer_h);
    // console.log("container_h = " + container_h );
    // console.log("content_h = " + content_h );
    // console.log("sum = " + sum);
    // console.log("winowHeight = " + winowHeight);
    // console.log("content_in_h = " + content_in_h);

    content_in.style.height = content_in_h + "px";
    //content_in.style.backgroundColor = "red";

    return content_in_h;
  }

  function setHeight_Content__Center(content__center, content_in_h){
    //вычисление высоты .content__center
    //var content__center = document.querySelector(".content__center");
    const content__center_mt = getStyle(content__center, 'margin-top');
    const content__center_mb = getStyle(content__center, 'margin-bottom');
    //........................................................................//
    const content__header = document.querySelector(".content__header");
    var content__header_h = 0;
    if (content__header){
      const content__header_mt = getStyle(content__header, 'margin-top');
      const content__header_mb = getStyle(content__header, 'margin-bottom');
      content__header_h = content__header.clientHeight + parseInt(content__header_mt) + parseInt(content__header_mb);
    }
    //........................................................................//
    const content__footer = document.querySelector(".content__footer");
    var content__footer_h = 0;
    if (content__footer){
      const content__footer_mt = getStyle(content__footer, 'margin-top');
      const content__footer_mb = getStyle(content__footer, 'margin-bottom');
      content__footer_h = content__footer.clientHeight + parseInt(content__footer_mt) + parseInt(content__footer_mb);
    }
    //........................................................................//
    const content__breadcrumbs = document.querySelector(".content__breadcrumbs");
    var content__breadcrumbs_h = 0;
    if (content__breadcrumbs){
      const content__breadcrumbs_mt = getStyle(content__footer, 'content__breadcrumbs');
      const content__breadcrumbs_mb = getStyle(content__footer, 'content__breadcrumbs');
      content__breadcrumbs_h = content__breadcrumbs.clientHeight + parseInt(content__breadcrumbs_mt) + parseInt(content__breadcrumbs_mb);
    }
    //........................................................................//
    var sum = content__header_h +
              content__footer_h +
              content__breadcrumbs_h
              parseInt(content__center_mt) + parseInt(content__center_mb);

    var content__center_h = content_in_h - sum;
    content__center.style.height = content__center_h + "px";

    return content__center_h;// + parseInt(content__center_mt) + parseInt(content__center_mb);

    //console.log("content__center_h = " + content__center_h);
    //content__header.style.backgroundColor = "yellow";
    //content__center.style.backgroundColor = "green";
  }

  function setHeight_Content_Wrap(content__center_h){
    //вычисление высоты .content-wrap
    var content_wrap = document.querySelector(".content-wrap");
    const content_wrap_mt = getStyle(content_wrap, 'margin-top');
    const content_wrap_mb = getStyle(content_wrap, 'margin-bottom');
    //........................................................................//
    var paragraphs = document.getElementsByTagName("p");
    var paragraphs_h = 0;
    if (paragraphs){
      for (var i=0; i<paragraphs.length; i++){
        paragraphs_h += paragraphs[i].clientHeight + parseInt(getStyle(paragraphs[i], 'margin-top')) + parseInt(getStyle(paragraphs[i], 'margin-bottom'));
      }
    }
    //console.log("paragraphs_h = "+paragraphs_h);
    //........................................................................//
    var content_wrap_h = content__center_h - paragraphs_h - parseInt(content_wrap_mt) - parseInt(content_wrap_mb);
    content_wrap.style.height = content_wrap_h + "px";
  }

  function calculateBlocksHeight(){
    var content_in = document.querySelector(".content-in");
    const content_in_h = content_in!=null? setHeight_Content_In(content_in) : 0;

    var content__center = document.querySelector(".content__center");
    const content__center_h = content__center!=null ? setHeight_Content__Center(content__center, content_in_h) : 0;

    var content_wrap = document.querySelector(".content-wrap");
    if (content_wrap) setHeight_Content_Wrap(content__center_h);
  }

  calculateBlocksHeight();

  window.addEventListener("resize", calculateBlocksHeight);



})();
