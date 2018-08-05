function navigateContent(url) {
  var $content = $('#defaultcontent');
  //go to the indicated url passed from the linkclick function and find the content div and load it
  $content.load(url + ' #defaultcontent > *');
  //from here, the rest of the code has to do with link highlighting for the sidebar
  var selected = $('a[href="'+url+'"]');
  //make sure no other links are set to active
  $('a').removeClass("activepage");
  //make the string we found previously active
  $('.folder').removeClass("active");
  $('.folder > a').removeClass("active");
  selected = selected.addClass("activepage");
  $(".activepage").parent().parent().parent().addClass("active");
}

function linkclick(that) {
  //prevent the link from actually navigating to the url
  event.preventDefault();
  //grab the url to which the link is pointing
  var url = $(that).attr("href");
  // call the navigateContent function and pass that url to it
  navigateContent(url);
  //make sure the window recognizes this and adds it to the history queue for back and refresh actions
  window.history.pushState({url}, '', url);
  var myEvent = new CustomEvent("myEvent", {"detail": "event for anchors"});
  document.dispatchEvent(myEvent);
};
//handle back/forward and refresh events
$(window).on('popstate', (e) => {
  var state = e.originalEvent.state;
  if (state && state.url) {
    navigateContent(state.url);
  }
});

function solutionsbuttonclick(event) {
  event.preventDefault();
  var documentsSideBar = $('.documentslist');
  var solutionsSideBar = $('.solutionslist');
  documentsSideBar.fadeOut(200, function () {
    solutionsSideBar.fadeIn(200);
  });
  $('.documentsbutton > .underline').removeClass('lined');
  $('.solutionsbutton > .solutionsunderline').addClass('lined');
};

function sidebarbuttonclick(event) {
  event.preventDefault();
  var documentsSideBar = $('.documentslist');
  var solutionsSideBar = $('.solutionslist');
  solutionsSideBar.fadeOut(200, function () {
    documentsSideBar.fadeIn(200);
  });
  $('.solutionsbutton > .solutionsunderline').removeClass('lined');
  $('.documentsbutton > .underline').addClass('lined');
};

$('.underline').on('click', function() {

});


//$(document).ready(function () {
  //  $(".documentsbutton a").click(function () {
    //    $(this).animate({
      //      borderBottom: '2px solid #3399FF',
      //  }, 500);
    //});
//});

document.addEventListener ("myEvent", function () {
  console.log("popran");
  var anchorlinks = document.getElementsByTagName("h3");
  var anchorlist = $('.anchorlist ul');
  if (anchorlinks.length == 0){
    $(anchorlist).append('<span>No links found boss</span>');
  }else {
    $.each(anchorlinks, function() {
      $(anchorlist).append('<li><a href="#' + $(this).attr("id") + '">' +  $(this).text() + '</a></li>');
    });
  };
});
