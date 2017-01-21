(function Roll(c, g, l) {
    var container = document.querySelector(c);
    var gallery = document.querySelector(g);
    gallery.innerHTML = gallery.innerHTML + gallery.innerHTML;
    var img_list = document.querySelectorAll(l);
    gallery.style.width = img_list[0].offsetWidth * img_list.length + "px";

    //移动速度
    var speed = 2;

    //鼠标移开  
    function move() {
        if (gallery.offsetLeft < -gallery.offsetWidth / 2) {
            gallery.style.left = 0;
        }
        if (gallery.offsetLeft > 0) {
            gallery.style.left = -gallery.offsetWidth / 2 + "px";
        }
        gallery.style.left = gallery.offsetLeft - speed + "px";
    }
    //定时器  
    var timer = setInterval(move, 35);

    //鼠标移入

    // gallery.onmouseover = function() {
    //         clearInterval(timer);
    //     }
    //     //鼠标移开
    // gallery.onmouseout = function() {
    //     timer = setInterval(move, 35);
    // }
    img_list.forEach(function(item, index, arr) {
        item.onmouseover = function() {
            clearTimeout(timer);
            document.querySelector("#show").src = item.querySelector("img").src;
        };
        item.onmouseout = function() {
            timer = setInterval(move, 35);
        }
    })
})(".container", ".gallery", "li")