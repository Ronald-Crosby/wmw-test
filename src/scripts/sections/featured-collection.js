/**
 * Section: Featured collection
 * ------------------------------------------------------------------------------
 * Featured collection configuration for complete theme support
 * - https://github.com/Shopify/theme-scripts/tree/master/packages/theme-sections
 *
 * @namespace featuredCollection
 */
import { register } from "@shopify/theme-sections";
import Flickity from "flickity";

/**
 * Featured collection constructor
 * Executes on page load as well as Theme Editor `section:load` events.
 *
 * @param {string} container - selector for the section container DOM element
 */
register("featured-collection", {
  init() {
    window.console.log("Initialising featured collection section");
  },

  publicMethod() {
    // Custom public section method
  },

  _privateMethod() {
    // Custom private section method
  },

  // Shortcut function called when a section is loaded via 'sections.load()' or by the Theme Editor 'shopify:section:load' event.
  onLoad() {
    // Do something when a section instance is loaded
    this.init();
    var flkty = new Flickity(".main-carousel", {
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      dragThreshold: 10,
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 65,
        y2: 45,
        x3: 20
      }
    });

    function setArrowPosition() {
      console.log("hello");
      const $cardImage = document.querySelector(
        ".main-carousel .responsive-image__wrapper"
      );
      const $imageHeight = parseInt($cardImage.getBoundingClientRect().height);
      const $topPosition = $imageHeight / 2;

      const arrows = document.querySelectorAll(
        ".main-carousel .flickity-prev-next-button"
      );

      arrows.forEach(arrow => {
        console.log($topPosition);
        arrow.style.top = `${$topPosition}px`;
      });
    }

    setArrowPosition();
  },

  // Shortcut function called when a section unloaded by the Theme Editor 'shopify:section:unload' event.
  onUnload() {
    // Do something when a section instance is unloaded
  },

  // Shortcut function called when a section is selected by the Theme Editor 'shopify:section:select' event.
  onSelect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section is deselected by the Theme Editor 'shopify:section:deselect' event.
  onDeselect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section block is selected by the Theme Editor 'shopify:block:select' event.
  onBlockSelect() {
    // Do something when a section block is selected
  },

  // Shortcut function called when a section block is deselected by the Theme Editor 'shopify:block:deselect' event.
  onBlockDeselect() {
    // Do something when a section block is deselected
  }
});
