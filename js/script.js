$(function(){
    $(window).on('scroll',function(){
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition > 0){
            $('#header').addClass('stickyNav')
        }else{
            $('#header').removeClass('stickyNav')
        }

        if(scrollPosition > 600){
            $('#backtotop').show()
        }else{
            $('#backtotop').hide()
        }
    })
    $('#backtotop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    })

    $(window).on('load',function(){
        $('#preloder').fadeOut(2000)
    })
       
    
})