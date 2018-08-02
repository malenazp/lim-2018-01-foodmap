$(window).on('load', function () {
    setTimeout(function () {
    const $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow', function () {
        });
    }, 1000);
});
