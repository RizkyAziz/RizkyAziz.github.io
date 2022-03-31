$(document).ready(function()
{
    $(window).scroll(function()
    {
        if($(this).scrollTop() > 200)
        {
            $('bg-transparent').addClass('solid');
        }
        else
        {
            $('bg-transparent').removeClass('solid');
        }
    });
});