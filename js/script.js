$('a[href*=\\#]').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 300);
});

// $(window).scroll((e) => {
//     console.log($(window).scrollTop());
// })