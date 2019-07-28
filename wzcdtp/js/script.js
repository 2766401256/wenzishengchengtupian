function sc()
{
    document.getElementById("wzbt").innerText=document.getElementById("title").value;
    var par=document.querySelectorAll(".paragraph");
    var tph=document.querySelectorAll(".tupianhang");
    for(var i=0;i<par.length;i++){
        tph[i].innerText=par[i].value;
        tph[i].style.fontSize=document.getElementById("wordsize").value/1.2+"px";
        tph[i].style.lineHeight=document.getElementById("wordsize").value/1.2+15+"px";
    }
    img.style.fontFamily=document.getElementById("font").value;
    document.getElementById("wzbt").style.fontSize=document.getElementById("wordsize").value/1.2+4+"px";
    document.getElementById("wzbt").style.lineHeight=document.getElementById("wordsize").value/1.2+15+"px";
    html2canvas(document.getElementById('img')).then(
        function(canvas) {
            document.querySelector(".down").setAttribute('href', canvas.toDataURL());
    
        },
        width="700",
        height="1400"
        );
}
var dlbox=document.getElementById("dlbox");
var img=document.getElementById("img");
function dl()
{   var paragraph=document.createElement("textarea");
    dlbox.appendChild(paragraph);
    paragraph.className="paragraph";
    var tupianhang=document.createElement("p");
    img.appendChild(tupianhang);
    tupianhang.className="tupianhang";
    var index=1;
    var par=document.querySelectorAll(".paragraph");
    for(var i=0;i<par.length;i++){
        par[i].placeholder="段落"+index;
        index++;
    }
}




document.getElementById("xz").onclick=function(){
html2canvas(document.getElementById('img')).then(
    function(canvas) {
        document.querySelector(".down").setAttribute('href', canvas.toDataURL());

    },
    width="700",
    height="1400"
    );

}