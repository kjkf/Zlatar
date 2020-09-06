
(function () {

  function getStyle(elem, propertyName) {
      return elem!=null ? getComputedStyle(elem)[propertyName] : 0;
  }

  function setHeight_Content_In(content_in){
    //вычисление высоты .content-in
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
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
    let leftSide_h = 0;
    if (windowWidth <= 568) {
      const leftSide = document.querySelector('.left-side');
      leftSide_h = leftSide.clientHeight;
    }
    //........................................................................//
    //var content_in = document.querySelector(".content-in");
    var sum = container_h +
              content_h +
              leftSide_h + //высота хедера в мобильной версии
              page_header_h +
              page_footer_h;
    var content_in_h = windowHeight - sum;

    // console.log("page_header_h = " + page_header_h + "; page_footer_h = "+ page_footer_h);
    // console.log("container_h = " + container_h );
    // console.log("content_h = " + content_h );
    // console.log("sum = " + sum);
    // console.log("windowHeight = " + windowHeight);
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
    // console.log("parseInt(content__center_mt) | parseInt(content__center_mb) = " + parseInt(content__center_mt) + "|" + parseInt(content__center_mb));
    //........................................................................//
    const content__header = document.querySelector(".content__header");
    var content__header_h = 0;
    if (content__header){
      const content__header_mt = getStyle(content__header, 'margin-top');
      const content__header_mb = getStyle(content__header, 'margin-bottom');
      content__header_h = content__header.clientHeight + parseInt(content__header_mt) + parseInt(content__header_mb);
      // console.log("content__header_h = " + content__header_h);
    }
    //........................................................................//
    const content__footer = document.querySelector(".content__footer");
    var content__footer_h = 0;
    if (content__footer){
      content__footer.style.marginTop = "0px";
      const content__footer_mt = getStyle(content__footer, 'margin-top');
      const content__footer_mb = getStyle(content__footer, 'margin-bottom');
      content__footer_h = content__footer.clientHeight + parseInt(content__footer_mt) + parseInt(content__footer_mb);
      // console.log("content__footer_h = " + content__footer_h);
    }
    //........................................................................//
    const content__breadcrumbs = document.querySelector(".content__breadcrumbs");
    var content__breadcrumbs_h = 0;
    if (content__breadcrumbs){
      const content__breadcrumbs_mt = getStyle(content__breadcrumbs, 'margin-top');
      const content__breadcrumbs_mb = getStyle(content__breadcrumbs, 'margin-bottom');
      content__breadcrumbs_h = content__breadcrumbs.clientHeight + parseInt(content__breadcrumbs_mt) + parseInt(content__breadcrumbs_mb);
      // console.log("content__breadcrumbs_h = " + content__breadcrumbs_h);
    }
    //........................................................................//
    var sum = content__header_h +
              content__footer_h +
              content__breadcrumbs_h
              parseInt(content__center_mt) + parseInt(content__center_mb);

    var content__center_h = content_in_h - sum;
    content__center.style.height = content__center_h + "px";
    // console.log("content_in_h = " + content_in_h);
    console.log("content__center_h = " + content__center_h);
    content__center.style.backgroundColor = "green";
    return content__center_h;// + parseInt(content__center_mt) + parseInt(content__center_mb);


    //content__header.style.backgroundColor = "yellow";

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
    console.log("paragraphs_h = "+paragraphs_h);
    //........................................................................//
    var content_wrap_h = content__center_h - paragraphs_h - parseInt(content_wrap_mt) - parseInt(content_wrap_mb);
    content_wrap.style.backgroundColor = "grey";
    content_wrap.style.height = content_wrap_h + "px";
  }

  function setHeight_Content_About(content_about){
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    var content_in = document.querySelector(".content-in");
    const content_in_mt = parseInt(getStyle(content_in, 'margin-top'));
    const content_in_mb = parseInt(getStyle(content_in, 'margin-bottom'));
    const content_in_pt = parseInt(getStyle(content_in, 'padding-top'));
    const content_in_pb = parseInt(getStyle(content_in, 'padding-bottom'));
    console.log("content_in_pt = " + content_in_pt + "; content_in_pb = " + content_in_pb);
    //........................................................................//
    const container = document.querySelector(".container");
    var container_h = 0;
    var container_pt = 0;
    var container_pb = 0;
    if (container){
      container_pt = parseInt(getStyle(container, 'padding-top'));
      container_pb = parseInt(getStyle(container, 'padding-bottom'));
      container_h = container_pt + container_pb;
      console.log("container_pt = " + container_pt + "; container_pb = " + container_pb);
    }
    //........................................................................//
    const page_header = document.querySelector(".header");
    var page_header_h = 0;
    if (page_header){
      const page_header_mt = getStyle(page_header, 'margin-top');
      const page_header_mb = getStyle(page_header, 'margin-bottom');
      page_header_h = page_header.clientHeight + parseInt(page_header_mt) + parseInt(page_header_mb) + container_pt;
      console.log("page_header_h = "+page_header_h);
    }
    //........................................................................//
    const page_footer = document.querySelector(".footer");
    var page_footer_h = 0;
    if (page_footer){
      const page_footer_mt = getStyle(page_footer, 'margin-top');
      const page_footer_mb = getStyle(page_footer, 'margin-bottom');
      page_footer_h = page_footer.clientHeight + parseInt(page_footer_mt) + parseInt(page_footer_mb) + container_pb;
      console.log("page_footer.clientHeight = "+page_footer.clientHeight);
      console.log("page_footer_h = "+page_footer_h);
    }
    //........................................................................//
    //вычисляем высоту радиусов баннера
    const left_side = document.querySelector(".left-side");
    var left_side_rh = 0;
    if (left_side){
      const border_t = parseInt(getStyle(left_side, 'border-top-right-radius'));
      const border_b = parseInt(getStyle(left_side, 'border-bottom-right-radius'));
      var top_space = page_header_h > border_t ? page_header_h : border_t;
      top_space = top_space > content_in_mt ? top_space : content_in_mt;
      console.log("top_space = " + top_space);
      var bot_space = page_footer_h > border_b ? page_footer_h : border_b;
      console.log("bot_space = " + bot_space);
      left_side_rh = top_space + bot_space;
      console.log("border top = " + border_t + "; border_b = " + border_b);
      console.log("left_side_rh = "+left_side_rh);
    }
    //........................................................................//

    console.log("windowHeight = "+windowHeight);
    //var foot_head = page_header_h + page_footer_h;
    var sum = left_side_rh;

    var content_in_h = windowHeight - sum;
    console.log("content_in_h = "+content_in_h);
    const content_in_cssh = parseInt(getStyle(content_in, 'min-height'));
    console.log("content_in_cssh = "+content_in_cssh);
    console.log("content_in.clientHeight = "+content_in.clientHeight);
    if (content_in_h < content_in_cssh || content_in_h < content_in.clientHeight){
      content_in.style.height = content_in_h + "px";
      content_in.style.minHeight = "initial"
    }
  }

  function calculateBlocksHeight(){
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    var l = windowHeight>568 && windowWidth>568 ;
    //console.log("windowHeight = "+ windowHeight + ";windowWidth =  "+ windowWidth + " = = = " + l);
    if (windowHeight>568 && windowWidth>568){
      var content_in = document.querySelector(".content-in");
      const content_in_h = content_in!=null? setHeight_Content_In(content_in) : 0;

      var content__center = document.querySelector(".content__center");
      const content__center_h = content__center!=null ? setHeight_Content__Center(content__center, content_in_h) : 0;

      var content_wrap = document.querySelector(".content-wrap");
      if (content_wrap) setHeight_Content_Wrap(content__center_h);

      const content_about = document.querySelector(".content-about");
      if (content_about) setHeight_Content_About(content_about);

    }
  }

  calculateBlocksHeight();

  window.addEventListener("resize", calculateBlocksHeight);

})();
