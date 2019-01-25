// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
$('.dropdown').on('hide.bs.dropdown', function(e){
    e.preventDefault();
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300, function(){
        $(this).parent().removeClass('open');
    });
});

$(function() {
    $(document).on('click', function(e){
        if($('#navbar').hasClass('in')){
            $('.collapse').collapse('hide');
        }
    });
});
