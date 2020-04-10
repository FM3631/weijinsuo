$(function () {
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        var ida = $('.carousel-inner > .item');
        ida.each(function (i, item) {
            $item = $(item);
            var imgSrc = isSmallScreen ? $item.data("image-xs") : $item.data("image-lg");
            $item.html('<img src="' + imgSrc + '"/>');

            //选项卡切换滚动条
            var $ulContainer = $(".nav-tabs");
            var width = 30;
            $ulContainer.children().each(function (index, element) {
                width += element.clientWidth;
            })
            if (width > $(window).width()) {
                $ulContainer.css("width", width).parent().css("overflow-x", "scroll")
            }else{
                $ulContainer.css("width", "auto").parent().css("overflow-x", "hidden")
            }
        })
    }
    $(window).on("resize", resize).trigger("resize");
    // tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $("#newsNav a").click(function(){
        $this = $(this);
        var title = $this.data("title")
        console.log(title)
        $("#newTitle").text(title)
    })
})


