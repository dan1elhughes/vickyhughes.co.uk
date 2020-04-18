console.log(window);
imagesLoaded(document.querySelector("ul.grid"), function (instance) {
  console.log(instance);

  console.log("all images are loaded");
  new Masonry(instance.elements[0], {
    // options
    itemSelector: "li",
    transitionDuration: 0,
  });
});
