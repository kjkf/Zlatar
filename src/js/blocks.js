
(function () {

  function getStyle(elem, propertyName) {
      return elem!=null ? getComputedStyle(elem)[propertyName] : 0;
  }
  function getElemHeight(elem, padding, margin){
    var paddings_h = 0;
    var margins_h = 0;
    if (elem){
      paddings_h = getPaddingsHeight(elem);
      margins_h = getMarginsHeight(elem);
      const sum = elem.clientHeight + paddings_h + margins_h;
      console.log("element_height = "+ sum);
      return sum;
    }else return 0;
  }
  function getPaddingsHeight(elem){
    var paddings_h = 0;
    if (elem){
      const padding_t = parseInt(getStyle(elem, 'padding-top'))
      const padding_b = parseInt(getStyle(elem, 'padding-bottom'))
      paddings_h = (isNaN(padding_t)?0:padding_t) + (isNaN(padding_b)?0:padding_b);
    }
    return paddings_h;
  }
  function getMarginsHeight(elem){
    var margins_h = 0;
    if (elem){
      const margin_t = parseInt(getStyle(elem, 'margin-top'));
      const margin_b = parseInt(getStyle(elem, 'margin-bottom'))
      margins_h = (isNaN(margin_t)? 0 : margin_t) + (isNaN(margin_b)? 0 : margin_b);
    }
    return margins_h;
  }
  function getParagraphsHeight(){
    var paragraphs = document.getElementsByTagName("p");
    var paragraphs_h = 0;
    if (paragraphs){
      for (var i=0; i<paragraphs.length; i++){
        const p_mar_t = parseInt(getStyle(paragraphs[i], 'margin-top'));
        const p_mar_b = parseInt(getStyle(paragraphs[i], 'margin-bottom'));
        paragraphs_h += paragraphs[i].clientHeight + (isNaN(p_mar_t) ? 0 : p_mar_t) +
                        (isNaN(p_mar_b) ? 0 : p_mar_b);
      }
    }
    return paragraphs_h;
  }

  function setHeight_Content_In(content_in){
    //console.log("--вычислением высоты .content-in--");
    //вычисление высоты .content-in
    console.log("content in 1");
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    //........................................................................//
    const container = document.querySelector(".container");
    var container_h = getPaddingsHeight(container);
    //console.log("container_h = "+container_h);
    //........................................................................//
    const content = document.querySelector(".content");
    var content_h = getPaddingsHeight(content);
    //........................................................................//
    const page_header = document.querySelector(".header");
    var page_header_h = getElemHeight(page_header, false, true);
    //console.log("page_header_h = "+ page_header_h)
    //........................................................................//
    const page_footer = document.querySelector(".footer");
    console.log("page footer ---------");
    var page_footer_h = page_footer!=null ? getElemHeight(page_footer, false, true) : 0;
    //console.log("page_footer = "+page_footer.clientHeight);
    //........................................................................//
    let leftSide_h = 0;
    if (windowWidth <= 568) {
      const leftSide = document.querySelector('.left-side');
      leftSide_h = leftSide.clientHeight;
    }
    //........................................................................//
    var sum = container_h +
              content_h +
              leftSide_h + //высота хедера в мобильной версии
              page_header_h +
              page_footer_h;
    console.log("container_h = " + container_h + "; content_h = " + content_h +
                "; leftSide_h = " + leftSide_h + "; page_header_h = " + page_header_h +
                "; page_footer_h = "+ page_footer_h);
    console.log("sum = " + sum);
    console.log("windowHeight = "+windowHeight);
    var content_in_h = windowHeight - sum;
    content_in.style.height = content_in_h + "px";
    console.log("content_in_h = "+content_in_h);
    // //console.log("-- -- -- -- --");
    return content_in_h;
  }

  function setHeight_Content__Center(content__center, content_in_h){
    //console.log("--вычислением высоты .content__center--");
    console.log("content center 2");
    const content__center_margins = getMarginsHeight(content__center);
    //........................................................................//
    const content__header = document.querySelector(".content__header");
    var content__header_h = getElemHeight(content__header, false, true);
    //........................................................................//
    const content__footer = document.querySelector(".content__footer");
    var content__footer_h = getElemHeight(content__footer, false, true);
    //........................................................................//
    const content__breadcrumbs = document.querySelector(".content__breadcrumbs");
    var content__breadcrumbs_h = getElemHeight(content__breadcrumbs, false, true);
    //........................................................................//
    var sum = content__header_h +
              content__footer_h +
              content__breadcrumbs_h +
              content__center_margins;
     console.log("content__header_h = "+ content__header_h  + "; content__footer_h = " +
                 content__footer_h + "; content__breadcrumbs_h = " + content__breadcrumbs_h +
                 "; content__center_margins = " + content__center_margins);
     console.log("sum = " + sum);

    var content__center_h = content_in_h - sum;
    content__center.style.height = content__center_h + "px";
    console.log("content__center_h = "+content__center_h);
    //console.log("-- -- -- -- --");
    return content__center_h;
  }

  function setHeight_Content_Wrap(content__center_h){
    //вычисление высоты .content-wrap
    console.log("content wrap 3");
    var content_wrap = document.querySelector(".content-wrap");
    const content_wrap_margins = getMarginsHeight(content_wrap);
    const paragraphs_h = getParagraphsHeight();

    const pagination = document.querySelector('.pagination');
    let pagination_h = getElemHeight(pagination, false, false);

    const sum =  paragraphs_h + pagination_h + content_wrap_margins;
    const content_wrap_h = content__center_h  - sum;
    // var content_wrap_h = content__center_h - paragraphs_h - pagination_h - parseInt(content_wrap_mt) - parseInt(content_wrap_mb);
    // //content_wrap.style.backgroundColor = "grey";
    content_wrap.style.height = content_wrap_h + "px";
  }

  function setHeight_Content_About(content_about){
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    console.log("content about 4");
    var content_in = document.querySelector(".content-in");
    //........................................................................//
    //вычислить высоту содержимого .content-in
    const content_in_mt = parseInt(getStyle(content_in, 'margin-top'));
    const content_in_mb = parseInt(getStyle(content_in, 'margin-bottom'));
    const content_in_paddings = getPaddingsHeight(content_in);
    const content__header = document.querySelector(".content__header");
    const content_header_h = getElemHeight(content__header, true, true);
    const content__footer = document.querySelector(".content__footer");
    const content__footer_h = getElemHeight(content__footer, true, true);
    var paragraphs_h = getParagraphsHeight();
    var content_in_h_fact = content_header_h +
                            content__footer_h +
                            content_in_paddings +
                            paragraphs_h;
    //........................................................................//
    const container = document.querySelector(".container");
    var container_h = 0;
    var container_pt = 0;
    var container_pb = 0;
    if (container){
      container_pt = parseInt(getStyle(container, 'padding-top'));
      container_pb = parseInt(getStyle(container, 'padding-bottom'));
    }
    //........................................................................//
    const page_header = document.querySelector(".header");
    var page_header_h = getElemHeight(page_header, false, true) + container_pt;
    //........................................................................//
    const page_footer = document.querySelector(".footer");
    var page_footer_h = getElemHeight(page_footer, false, true) + container_pb;
    //........................................................................//
    //вычисляем высоту радиусов баннера
    const left_side = document.querySelector(".left-side");
    var left_side_rh = 0;
    if (left_side){
      const border_t = parseInt(getStyle(left_side, 'border-top-right-radius'));
      const border_b = parseInt(getStyle(left_side, 'border-bottom-right-radius'));
      var top_space = page_header_h > border_t ? page_header_h : border_t;
      top_space = top_space > content_in_mt ? top_space : content_in_mt;
      var bot_space = page_footer_h > border_b ? page_footer_h : border_b;
      left_side_rh = top_space + bot_space;
    }
    //........................................................................//
    var content_in_h = windowHeight - left_side_rh;

    if (content_in_h < content_in_h_fact){
      content_in.style.height = content_in_h + "px";
      content_in.style.minHeight = "initial";
    }else {
      content_in.style.height  = content_in_h_fact + "px";
      content_in.style.minHeight = "initial";
    }
  }

  function calculateBlocksHeight(){
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    if (windowHeight>568 || windowWidth>568){
      alert("script started")

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
