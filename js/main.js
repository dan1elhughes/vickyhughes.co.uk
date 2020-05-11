imagesLoaded(document.querySelector("ul.grid"), function (instance) {
  new Masonry(instance.elements[0], {
    itemSelector: "li",
    transitionDuration: 0,
  });
});
