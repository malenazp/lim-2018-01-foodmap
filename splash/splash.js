$(window).on('load', function () {
    setTimeout(function () {
    const $preloader = $('#splash'),
        $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow', function () {
        });
    }, 2000);
});
