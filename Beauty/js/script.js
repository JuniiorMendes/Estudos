$('.produtos').on('mouseenter', function(e){
  e.preventDefault()
  $('.dropProdutos').addClass('active')
})

$('.img').on('mouseenter', function(e){
  e.preventDefault()
  $('.dropProdutos').removeClass('active')
  $('.dropCortes').removeClass('active')
  $('.dropContato').removeClass('active')
})

$('.cortes').on('mouseenter', function(e){
  e.preventDefault()
  $('.dropCortes').addClass('active')
})

$('.contato').on('mouseenter', function(e){
  e.preventDefault()
  $('.dropContato').addClass('active')
})

$(window).scroll(function(){
  let windowTop = $(this).scrollTop()
  $('.anime').each(function(){
    if(windowTop > $(this).offset().top - 400) {
      $(this).addClass('anime-init')
    } else {
      $(this).removeClass('anime-init')
    }
  })
})