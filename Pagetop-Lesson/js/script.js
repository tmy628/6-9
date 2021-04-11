$(function() {
  $('#back a').on('click',function(event){
  // #back内のaタグがクリックされたときの処理
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

// $('#id名 要素名')と指定すると、id内の子要素に対してのみ指定される
// ここでは、id="back"内のaタグがクリックされたときに、処理が行われるように記述している