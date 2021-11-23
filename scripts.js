// window.onload = function() {
//   var location = new google.maps.LatLng(41.8462348, -87.949075);
//   var map = new google.maps.Map(document.getElementById('map-container'), {
//     center: location,
//     zoom: 18
//   });

//   var marker = new google.maps.Marker({
//     position: location,
//     "map": map,
//     title: "MITS"
//   });
// console.log(map);


// };

var tour = new Tour();
tour.addSteps([
  {
    element: "#carousel-1",
    title: "Bootstrap Carousel",
    content: "This is a Bootstrap Carousel containing 3 images.",
    smartPlacement: true,
    placement: "top"
  },
  {
    element: "#col-1",
    title: "LIVE CLASSES",
    content: "Check out our live classes",
    smartPlacement: true,
    placement: "left"
  },
  {
    element: "#col-2",
    title: "FLEXIBILITY",
    content: "We give you the flexibility you need.",
    placement: "bottom"
  },
  {
    element: "#col-3",
    title: "24/7",
    content: "24/7 support to help you on your way.",
    placement: "right"
  },
  {
    element: "#col-4",
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    placement: "top"
  },
  {
    element: "#col-5",
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    placement: "top"
  },
  {
    element: "#col-6",
    title: "24/7",
    content: "24/7 support to help you on your way.",
    placement: "right"
  },
  {
    element: "#col-7",
    title: "24/7",
    content: "24/7 support to help you on your way.",
    placement: "right"
  },
  {
    element: "#col-8",
    title: "24/7",
    content: "24/7 support to help you on your way.",
    placement: "right"
  },
  {
    element: "#col-9",
    title: "24/7",
    content: "24/7 support to help you on your way.",
    placement: "right"
  },
  {
    orphan: true,
    title: 'Thank You',
    backdrop: true,
    placement: 'top',
    content: 'That concludes the tour.',
  },
  
]);
tour.init();
$(document).ready(function() {
  $('#tour-start').on('click', function() {
    localStorage.clear();
    tour.start();
   });
})

