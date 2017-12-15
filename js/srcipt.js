var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    navigation: {

        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画

        },

    }

});
//播放器控制
var audio = document.getElementById('mp3Btn');
var music_off = document.getElementById('audio_off');
var img = document.querySelector('.notes')
var gif = document.querySelector('.a1')
audio.play();
var flag = 1;
img.onclick = function () {
    if (flag == 1) {
        //关闭
        music_off.style.animation = "runs 1s infinite";
        gif.style.display = "none";
        audio.pause();
        flag = 0
    } else {
        //打开
        gif.style.display = "block";
        music_off.style.animation = "run 4s cubic-bezier(0.24, 0.24, 0.68, 0.68) infinite";
        audio.play();
        flag = 1
    }


}
//正则
var teltext = document.getElementById("submit");

//姓名

var uname = document.getElementById("reg1");
uname.onblur = function () {
    if (!uname.value) {
        alert("请输入姓名")
    }
};

//手机号
var tel = document.getElementById("reg2");
tel.onblur = function () {
    var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    if (!reg.test(tel.value)) {
        alert("请输入正确的电话")
    }
};

//人数
var personNum = document.getElementById("reg3");
personNum.onblur = function () {
    if (typeof personNum != 'number') {
        alert("请输入正确的人数")
    }
};



