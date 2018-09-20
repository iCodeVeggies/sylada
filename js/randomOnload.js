/* GET TIME */
window.onload = function getYear() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("copyright").innerHTML = "&copy; " + n + " sylada";
}

/* STOP PLAYING VIDEO */

// get video anchors
var modalAnchors = document.querySelectorAll('#videos .card a');

// get clicked anchor's id 
// and pass to observeModal function
modalAnchors.forEach((anchor) => {
  anchor.addEventListener('click', (anchor) => {
    // pass anchor href to observeModal function
    observeModal(anchor.currentTarget.getAttribute('href'));
  })
})

// observe modal
function observeModal(id) {
  var targetNode = document.querySelector(id);

  var observer = new MutationObserver((mutationList)=> {
    mutationList.forEach((mutation) => {
      if (mutation.target.getAttribute('class') === 'modal') {
          targetNode.children[0].children[0].children[0].outerHTML = targetNode.children[0].children[0].children[0].outerHTML;
       }
    });
  });
  
  observer.observe(targetNode, {attributes: true});
}