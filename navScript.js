// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    var a = document.getElementsByTagName("a");
    var p = document.getElementsByTagName("p");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.height='40px';
    document.getElementById("logo").style.width='40px';
    // document.getElementById("logo").style.marginTop='0px';
    // document.getElementById("logo").style.marginBottom='0px';


    p[0].style.fontSize = "17px";
    p[0].style.marginTop = "0px";
    p[0].style.marginBottom = "10px";


    var i;
    for(i = 0; i<5; i++){
      a[i].style.marginTop="0px";
    }

    var j;

    for(j = 0; j<5; j++){
      a[j].style.marginBottom="0px";
    }

    var ptop;

    for(ptop = 0; ptop<5; ptop++){
      a[ptop].style.paddingTop="10px";
    }


    var paddingBottom;
    for(paddingBottom= 0; paddingBottom <5; paddingBottom++){
      a[paddingBottom].style.paddingBottom="5px";
    }

  } else {
    // document.getElementById("navbar").style.padding = "80px 10px";
    // document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.display='block';
    document.getElementById("logo").style.height='90px';
    document.getElementById("logo").style.width='81px';

    //marginTop for element a in navbar
    var i;
    for(i = 0; i<5; i++){
      a[i].style.marginTop="30px";
    }

    //marginBottom for element a in navbar
    var j;

    for(j = 0; j<5; j++){
      a[j].style.marginBottom="30px";
    }

    for(ptop = 0; ptop<5; ptop++){
      a[ptop].style.paddingTop="0px";
    }

    var paddingBottom;
    for(paddingBottom= 0; paddingBottom <5; paddingBottom++){
      a[paddingBottom].style.paddingBottom="0px";
    }

    // a[0].style.marginBottom='25px';
    // a[1].style.marginBottom='25px';
    // a[2].style.marginBottom='25px';
    // a[3].style.marginBottom='25px';
    // a[4].style.marginBottom='25px';

    p[0].style.fontSize = "18px";
    p[0].style.marginTop = "15px";
    // p[0].style.marginBottom = "25px";
  }
}
