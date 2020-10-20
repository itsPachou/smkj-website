//Read More button functions
function ReadMoreToggle(moreText, btnText) {
    if (btnText.innerHTML === "Pokaż mniej") {
        btnText.innerHTML = "Pokaż więcej";
        moreText.style.display = "none";
      } else {
        btnText.innerHTML = "Pokaż mniej";
        moreText.style.display = "inline";
      }
}
function onasReadMore() {
    let moreText = document.getElementById("onasMore");
    let btnText = document.getElementById("onasBtn");
    
    ReadMoreToggle(moreText, btnText);
}
// function statutReadMore() {
//     let moreText = document.getElementById("statutMore");
//     let btnText = document.getElementById("statutBtn");

//     ReadMoreToggle(moreText, btnText);
// }
// function zarzadReadMore() {
//     let moreText = document.getElementById("zarzadMore");
//     let btnText = document.getElementById("zarzadBtn");

//     ReadMoreToggle(moreText, btnText);
// }
// function radaReadMore() {
//     let moreText = document.getElementById("radaMore");
//     let btnText = document.getElementById("radaBtn");

//     ReadMoreToggle(moreText, btnText);
// }

//Scroll function
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }