//banner 轮播图
function move(bg, li) {
    var timer = null;
    var i = 0;
    $(bg).eq(0).show().siblings().hide();
    $(li).eq(0).addClass('bantabliNew');
    $(li).eq(0).removeClass('bantabliOld ');
    //  自动淡入淡出
    timer = setInterval(function () {
        if (i < $(bg).length - 1) {
            i++;
        } else {
            i = 0;
        }
        $(bg).eq(i).fadeIn('slow').siblings().fadeOut('slow');
        for (var n = 0; n < $(bg).length; n++) {
            if (n === i) {
                $(li).eq(n).addClass('bantabliNew');
                $(li).eq(n).removeClass('bantabliOld ');
            } else {
                $(li).eq(n).addClass('bantabliOld ');
                $(li).eq(n).removeClass('bantabliNew');
            }
        }
    }, 3000);

    //鼠标移入切换
    $(li).on('mouseover', function () {
        clearInterval(timer);
        $(bg).eq($(this).index()).fadeIn('slow').siblings().fadeOut('slow');
        for (var n = 0; n < $(bg).length; n++) {
            $(li).eq(n).addClass('bantabliOld ');
            $(li).eq(n).removeClass('bantabliNew');
        }
        $(li).eq($(this).index()).addClass('bantabliNew');
        $(li).eq($(this).index()).removeClass('bantabliOld ');
        i = $(this).index();
    });
    $(li).on('mouseleave', function () {
        timer = setInterval(function () {
            if (i < $(bg).length - 1) {
                i++;
            } else {
                i = 0;
            }
            $(bg).eq(i).fadeIn('slow').siblings().fadeOut('slow');
            for (var n = 0; n < $(bg).length; n++) {
                if (n === i) {
                    $(li).eq(n).addClass('bantabliNew');
                    $(li).eq(n).removeClass('bantabliOld ');
                } else {
                    $(li).eq(n).addClass('bantabliOld ');
                    $(li).eq(n).removeClass('bantabliNew');
                }
            }
        }, 3000);
    });
}

// 导航栏显示
function show(do1, do2) {
    $(do1).on('mouseenter', function () {
        $(this).children(do2).show();
    });
    $(do1).on('mouseleave', function () {
        $(this).children(do2).hide();
    })
}


// 主体广告切换
var timer2 = null;
var flag = 0;

function contentBigTime(span, big) {
    timer2 = setInterval(function () {
        if (flag === 0) {
            $(span).eq(0).removeClass('content-three-big-chang');
            $(span).eq(1).removeClass('content-three-big');
            $(span).eq(0).addClass('content-three-big');
            $(span).eq(1).addClass('content-three-big-chang');
            $(big).eq(0).hide();
            $(big).eq(1).show();
            flag = 1;
        } else if (flag === 1) {
            $(span).eq(0).removeClass('content-three-big');
            $(span).eq(1).removeClass('content-three-big-chang');
            $(span).eq(0).addClass('content-three-big-chang');
            $(span).eq(1).addClass('content-three-big');
            $(big).eq(0).show();
            $(big).eq(1).hide();
            flag = 0;
        }
    }, 2000);
}

function contentBig(span, big) {
    $(span).eq(0).addClass('content-three-big-chang');
    $(span).eq(1).addClass('content-three-big');
    $(big).eq(0).show();
    $(big).eq(1).hide();
    contentBigTime(span, big);
    //鼠标悬停
    $(span).on('mouseover', function () {
        clearInterval(timer2);
        if ($(this).index() === 0) {
            $(span).eq(0).removeClass('content-three-big');
            $(span).eq(1).removeClass('content-three-big-chang');
            $(span).eq(0).addClass('content-three-big-chang');
            $(span).eq(1).addClass('content-three-big');
            $(big).eq(0).show();
            $(big).eq(1).hide();
            $(big + ' .big-img').css({opacity: 0.6});
        } else {
            $(span).eq(0).removeClass('content-three-big-chang');
            $(span).eq(1).removeClass('content-three-big');
            $(span).eq(0).addClass('content-three-big');
            $(span).eq(1).addClass('content-three-big-chang');
            $(big).eq(0).hide();
            $(big).eq(1).show();
            $(big + ' .big-img').css({opacity: 0.6});
        }
    });
    $(span).on('mouseleave', function () {
        $(big + ' .big-img').css({opacity: 1});
        contentBigTime(span, big);
    });
    $(big).on('mouseover', function () {
        $(big + ' .big-img').css({opacity: 0.6});
    });
    $(big).on('mouseleave', function () {
        $(big + ' .big-img').css({opacity: 1});
    })
}


var arr = ['#FF0036', '#64C333', '#FF0036', '#EA5F8D', '#0AA6E8', '#64C333', '#F15453', '#19C8A9', '#64C333', '#ABABAB'];

//左侧栏颜色清除函数
function clear(asl, num) {
    for (var i = 1; i < arr.length - 1; i++) {
        if (i !== num) {
            $(asl).eq(i).css({
                backgroundColor: '#626262'
            });
        }
    }
}

//左侧栏颜色自动更换函数
function changColor(asl) {
    if (window.scrollY < 1482) {
        clear(asl, 0);
    } else if (window.scrollY >= 1482 && window.scrollY < 1600) {
        clear(asl, 1);
        $(asl).eq(1).css({backgroundColor: arr[1]});
    } else if (window.scrollY >= 2170 && window.scrollY < 2940) {
        clear(asl, 2);
        $(asl).eq(2).css({backgroundColor: arr[2]});
    } else if (window.scrollY >= 2940 && window.scrollY < 3620) {
        clear(asl, 3);
        $(asl).eq(3).css({backgroundColor: arr[3]});
    } else if (window.scrollY >= 3620 && window.scrollY < 4400) {
        clear(asl, 4);
        $(asl).eq(4).css({backgroundColor: arr[4]});
    } else if (window.scrollY >= 4400 && window.scrollY < 5180) {
        clear(asl, 5);
        $(asl).eq(5).css({backgroundColor: arr[5]});
    } else if (window.scrollY >= 5180 && window.scrollY < 5860) {
        clear(asl, 6);
        $(asl).eq(6).css({backgroundColor: arr[6]});
    } else if (window.scrollY >= 5860 && window.scrollY < 6540) {
        clear(asl, 7);
        $(asl).eq(7).css({backgroundColor: arr[7]});
    } else if (window.scrollY >= 6540) {
        clear(asl, 8);
        $(asl).eq(8).css({backgroundColor: arr[8]});
    }
}

// 滚动监听函数
function winOnScroll(top, asL, asl) {
    console.log(window.scrollY);
    changColor(asl);
    window.onscroll = function () {
        //固定导航栏隐藏显示
        if (window.scrollY > 400) {
            $(top).slideDown();
        } else {
            $(top).slideUp();
        }
        //侧边栏左隐藏显示
        if (window.scrollY > 600) {
            $(asL).stop().animate({
                left: '0px',
                top: '0px'
            }, 300, 'swing')
        }
        else {
            $(asL).stop().animate({
                left: '-36px',
                top: '370px'
            }, 300, 'swing')
        }
        //侧边栏颜色自动切换
        changColor(asl);
    }
}


//侧边栏左
var timer3 = null;

function asideLtimer(target, leader) {
    timer3 = setInterval(function () {
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        window.scrollTo(0, leader);
        if (target === leader) {
            clearInterval(timer3);
            console.log(window.scrollY);
        }
    }, 20);
}

//    鼠标移入移除事件
function asideLmouse(asl) {
    var str;
    var flag;
    $(asl).on('mouseover', function () {
        flag = 0;
        str = $(this).css('backgroundColor');
        if (str === 'rgb(98, 98, 98)') {
            $(this).css({
                backgroundColor: arr[$(this).index()]
            })
        }
//            鼠标点击事件
        $(asl).on('click', function () {
            clear(asl, $(this).index());
            $(this).css({
                backgroundColor: arr[$(this).index()]
            });
            flag = 1;
            var targrt = 0;
            var leader = window.scrollY;
            clearInterval(timer3);
            if ($(this).index() === 1 || $(this).index() === 2) {
                targrt = ($(this).index() - 1) * 688 + 1482;
                asideLtimer(targrt, leader);
            } else if ($(this).index() === 3 || $(this).index() === 4) {
                targrt = ($(this).index() - 1) * 680 + 1580;
                asideLtimer(targrt, leader);
            } else if ($(this).index() === 5) {
                targrt = ($(this).index() - 1) * 680 + 1680;
                asideLtimer(targrt, leader);
            }
            else if ($(this).index() === 6 || $(this).index() === 7 || $(this).index() === 8) {
                targrt = ($(this).index() - 1) * 680 + 1780;
                asideLtimer(targrt, leader);
            } else if ($(this).index() === 9) {
                asideLtimer(targrt, leader);
            }
        })
    });
    $(asl).on('mouseleave', function () {
        if ((str === 'rgb(98, 98, 98)') && (flag === 0)) {
            $(this).css({
                backgroundColor: '#626262'
            })
        }
    })
}
