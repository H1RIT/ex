$(function() {
  function listMore() {
    let size_li = $("#bestseller_box li").size();
    win = $(window).width();
    if(win <= 640) {
      let x=2;
      $("#bestseller_box li:lt("+x+")").show();
      $(".more_btn").click(function() {
        x = (x+2 <= size_li) ? x+2 : size_li;
        $("#bestseller_box li:lt("+x+")").show();
        if(x == size_li) {
          $(".more_btn").hide();
        }
      });
    }else if(win>640 && win <=968){
      let x=3;
      $("#bestseller_box li:lt("+x+")").show();
      $(".more_btn").click(function() {
        x = (x+3 <= size_li) ? x+3 : size_li;
        $("#bestseller_box li:lt("+x+")").show();
        if(x == size_li) {
          $(".more_btn").hide();
        }
      });
    }else{
      let x=4;
      $("#bestseller_box li:lt("+x+")").show();
      $(".more_btn").click(function() {
        x = (x+4 <= size_li) ? x+4 : size_li;
        $("#bestseller_box li:lt("+x+")").show();
        if(x == size_li) {
          $(".more_btn").hide();
        }
      });
    }
  }
  listMore();

  $(window).on("resize",function(){
    listMore()
    location.reload();
  });
})