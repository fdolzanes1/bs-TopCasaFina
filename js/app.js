$('#navbar-collapse').on('show.bs.collapse', function() {
    $('.chamada-principal').css('transform', 'translate(-50%, 10%)');
});

$('#navbar-collapse').on('hide.bs.collapse', function() {
    $('.chamada-principal').css('transform', 'translate(-50%, 50%)');
});