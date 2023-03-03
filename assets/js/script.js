(function($){
    $(document).ready(function(){
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
            var container = $(this);


            $(document).mouseup(function (e) {
                if (container.has(e.target).length === 0){
                    container.parent().removeClass('open');
                    //container.hide();
                }
            });
        });
        $(".mobile_menu").simpleMobileMenu({
            onMenuLoad: function(menu) {
                console.log(menu)
                console.log("menu loaded")
            },
            onMenuToggle: function(menu, opened) {
                console.log(opened)
            },
            "menuStyle": "slide"
        });
    });
})(jQuery);