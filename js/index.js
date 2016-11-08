$(function(){
    //head选项卡

    function headxxk(obj1,obj2){
        obj1.onmouseover=function(){
            obj2.style.display="block";
        }
        obj1.onmouseout=function(){
            obj2.style.display="none";
        }
    }

    var denglu=$("#denglu");
    var dengluB=$("#dengluB");
    headxxk(denglu,dengluB);
    var shouji=$("#shouji");
    var shoujiB=$("#shoujiB");
    headxxk(shouji,shoujiB);


    //sousuo点击事件
    var diqu=$("#diqu");
    var diqus=$("#diqus");
    var body=$("body")[0];
    //diqu.onmouseover= function () {
    //    diqus.style.display="block"
    //}
    //diqu.onmouseout=function(){
    //    diqus.style.display="none"
    //}
    body.onclick=function(e){
        e=e||window.event;
        var obj=e.srcElement||e.target;
        if(obj.id=="taiyuan"||obj.id=="diqu"){
            diqus.style.display="block"
        }else{
            diqus.style.display="none"
        }

    }



    //banner选项卡
    function bannerxxk(obj1,obj2){
        for(var i=0;i<obj1.length;i++){
            obj1[i].index=i;
            obj1[i].onmouseover=function(){
                obj2[this.index].style.display="block";
            }
            obj1[i].onmouseout=function(){
                obj2[this.index].style.display="none";
            }
        }
    }

    var sys=$(".sys");
    var sy_b=$(".sy-b");
    bannerxxk(sys,sy_b)


    // 轮播
    var middle=$(".middle")[0];
    var dts=$("a",$(".dt")[0]);
    var bits=$("li",$(".dts")[0]);
    var jtleft=$(".jtleft")[0];
    var jtright=$(".jtright")[0];
    var mw=parseInt(getStyle(middle,"width"))
    // 页面状态初始化

    for( var i=0;i<dts.length;i++){
        if(i==0){
            continue;
        }
        dts[i].style.left=mw+"px";
    }
    bits[0].style.background="red";


    var now=0;
    var next=0;
    var t=setInterval(move,2000);

    middle.onmouseover=function(){
        clearInterval(t);
    }
    middle.onmouseout=function(){
        t=setInterval(move,2000);
    }

    for(var i=0;i<bits.length;i++){
        bits[i].dh=i;
        bits[i].onclick=function(){
            if(now>this.dh){
                dts[this.dh].style.left=-mw+"px";
                animate(dts[now],{left:-mw});
                animate(dts[this.dh],{left:0});
            }else if(now<this.dh){
                dts[this.dh].style.left=mw+"px";
                animate(dts[now],{left:mw});
                animate(dts[this.dh],{left:0});
            }else{
                return;
            }


            dts[this.dh].style.left=mw+"px";
            bits[now].style.background="#ccc";
            bits[this.dh].style.background="red";
            animate(dts[now],{left:-mw});
            animate(dts[this.dh],{left:0});
            now=this.dh;
            next=this.dh;
        }
    }


    var flag=true;
    jtleft.onclick=function(){
        if(flag){
            move();
            flag=false;
        }

    }
    jtright.onclick=function(){
        if(flag){
            movel();
            flag=false;
        }
    }


    function move(){
        next++;
        if(next==dts.length){
            next=0
        }
        dts[next].style.left=mw+"px";
        bits[now].style.background="#ccc";
        bits[next].style.background="red";
        animate(dts[now],{left:-mw});
        animate(dts[next],{left:0},function(){flag=true});
        now=next;
    }

    function movel(){
        next--;
        if(next<0){
            next=dts.length-1
        }
        dts[next].style.left=-mw+"px";
        bits[now].style.background="#ccc";
        bits[next].style.background="red";
        animate(dts[now],{left:mw});
        animate(dts[next],{left:0},function(){flag=true});
        now=next
    }

    //滚动
    var one=$("#one");
    var img=$(".imgss")[0];
    var lefts=$("#one-left");
    var rights=$("#one-right");
    var width=parseInt(getStyle($(".imgs")[0],"width"));
    var d=setInterval(gundong,2000);
    var n=1;
    var flag=true;
    function gundong(){
        animate(img,{left:-width*n},600,function(){
            flag=true;
            for(i=1;i<=n;i++){
                var first=firstChild(img);
                img.appendChild(first);
            }

            img.style.left=0;
        })
    }
    function gundongl(){
        for(i=1;i<=n;i++){
            var last=lastChild(img);
            var First=firstChild(img);
            img.insertBefore(last,First);
            img.style.left=-width+"px";
        }
        animate(img,{left:0},600,function(){flag=true;});
    }


    one.onmouseover=function(){
        clearInterval(d);
    }
    one.onmouseout=function(){
        d=setInterval(gundong,2000);
    }
    lefts.onclick=function(){
        if(flag){
            gundong();
            flag=false;
        }

    }
    rights.onclick=function(){
        if(flag){
            gundongl();
            flag=false;
        }
    }


    var zxzx=$("#zxzx")
    var cjwt=$("#cjwt")
    var tsjy=$("#tsjy")
    zxzx.onmouseover=function(){
        zxzx.style.left=-70+"px";
    }
    zxzx.onmouseout=function(){
        zxzx.style.left=-10+"px";
    }

    cjwt.onmouseover=function(){
        cjwt.style.left=-70+"px";
    }
    cjwt.onmouseout=function(){
        cjwt.style.left=-10+"px";
    }

    tsjy.onmouseover=function(){
        tsjy.style.left=-70+"px";
    }
    tsjy.onmouseout=function(){
        tsjy.style.left=-10+"px";
    }

})

