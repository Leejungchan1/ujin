$(function(){
    $(".main li").mouseover(function(){
        $(".sub,.sub_bg").stop().slideDown();


    }) /* mouseover */

    $(".main li").mouseout(function(){
        $(".sub,.sub_bg").stop().slideUp();


    }) /* mouseout */

    // 이미지 영역

    $(".fade li").eq(0).siblings().hide();
    // $(".fade li").hide();
    // $(".fade li").eq(0).show();

    var n = 0; // 0 1 2
    setInterval(function(){
        if(n == 2){
            n=0;
        }else{
            n++;
        } //if
        $(".fade li").eq(n).fadeIn().siblings().fadeOut();

        console.log(n);
    },2000)

    //팝업
    $(".p_up").click(function(){
        $(".popup").show();

    })

    $(".close").click(function(){
        $(".popup").hide();
    })









}) // jQuery end