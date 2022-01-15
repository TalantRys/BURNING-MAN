$(function () {
    $('.header__burger').click(function () {
        $('.header__list').addClass('active-list');
        $('.header__burger').addClass('open');
        $('.header__close').addClass('close');
        $('body').addClass('lock');
    })
    $('.header__close').click(function () {
        $('.header__list').removeClass('active-list');
        $('.header__burger').removeClass('open');
        $('.header__close').removeClass('close');
        $('body').removeClass('lock');
    })
});