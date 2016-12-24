// title, content, css of isActivate 
function Controller(t, c, s) {
    var title = document.querySelector(t).querySelectorAll(":scope ul li");
    var content = document.querySelector(c).querySelectorAll(":scope ul li");
    console.log(title);
    title.forEach(function(item, index, arr) {
        // console.log(item)
        // item.classList.remove("isActive");
        // console.log(arr);
        item.addEventListener("click", function() {
            arr.forEach(function(o, i) {
                o.classList.remove(s);
                content[i].style.display = "none";
            })
            this.classList.add(s);
            content[index].style.display = "block";
        });
    })
}