var imgindex = 0;
function leftmove(){
    var imgcontain = document.getElementById("header-contain");
    var imgs = document.getElementsByClassName("header-item");
    if(imgindex==0){
        imgindex=imgs.length-1;
    }else{
        imgindex--;
    }
    imgcontain.style.left=-imgindex*100+"%";
}
function rightmove(){
    var imgcontain = document.getElementById("header-contain");
    var imgs = document.getElementsByClassName("header-item");
    if(imgindex==imgs.length-1){
        imgindex=0;
    }else{
        imgindex++;
    }
    imgcontain.style.transitionProperty="left";
    imgcontain.style.transitionDuration="2s";
    imgcontain.style.left=-imgindex*100+"%";
}

setInterval(rightmove,3000);

/**
 * 关于我们动态切换
 * @param index
 */
var aboutwes = document.getElementsByClassName("topspan");

function abountwenav(index) {
    var aboutwebodys = document.getElementsByClassName("company-info");
    aboutwes[index].onclick=function() {
        for(var i=0;i<aboutwes.length;i++){
            aboutwes[i].classList.remove("aboutwe-active");
        }
        for(var i=0;i<aboutwebodys.length;i++){
            aboutwebodys[i].classList.add("displayinfo");
        }
        aboutwes[index].classList.add("aboutwe-active");
        aboutwebodys[index].classList.remove("displayinfo");
    }
}
for(var i=0;i<aboutwes.length;i++){
    abountwenav(i);
}

/**
 * 版权运营
 */
var bqyy = document.getElementsByClassName("copyright-img");
var bqyycontent = document.getElementsByClassName("copyright-imgtitle");
function onover(index){
    bqyy[index].onmouseover=function(){
        bqyycontent[index].style.display="block";
    }
}
function onout(index){
    bqyy[index].onmouseout=function(){
        bqyycontent[index].style.display="none";
    }
}
for(var i=0;i<bqyy.length;i++){
    onover(i);
    onout(i);
}

