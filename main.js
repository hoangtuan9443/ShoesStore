window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
             
    if (document.documentElement.scrollTop > 1000) {
        document.getElementById("move-to-top").style.display = "flex";
        document.getElementById("local").style.display = "flex";
        document.getElementById("zalo").style.display = "flex";
        document.getElementById("phonecall").style.display = "flex";
    } else if(window.scrollY > 100) {
        document.querySelector('.header__navbar').style.position = 'fixed';
    }
    else {
        document.getElementById("move-to-top").style.display = "none";
        document.getElementById("local").style.display = "none";
        document.getElementById("zalo").style.display = "none";
        document.getElementById("phonecall").style.display = "none";
        document.querySelector('.header__navbar').style.position = '';
    }
}
    document.getElementById('move-to-top').addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});