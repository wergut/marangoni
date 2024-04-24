/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll('.default-video-wrapper');
  var btnPlays = document.querySelectorAll('.btn-play');
  btnPlays.forEach(function (btnPlay, index) {
    var videoContainer = videos[index];
    var video = videoContainer.querySelector('video');
    if (video && video.tagName.toLowerCase() === 'video') {
      btnPlay.addEventListener('click', function () {
        if (video.paused) {
          video.play();
          btnPlay.classList.add('pause');
        } else {
          video.pause();
          btnPlay.classList.remove('pause');
        }
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.open-modal-dialog'),
    overlay = document.querySelector('body'),
    closeButtons = document.querySelectorAll('.modal-dialog .modal-close');
  async function openModal(modalBtn) {
    return new Promise(resolve => {
      var modalId = modalBtn.getAttribute('data-src'),
        modalElem = document.querySelector('.modal-dialog.' + modalId);
      overlay.classList.add('modal-open');
      modalElem.style.display = 'flex';
      setTimeout(function () {
        modalElem.classList.add('modal-opening');
        resolve();
      }, 0);
    });
  }
  async function closeModal(closeBtn) {
    return new Promise(resolve => {
      var modal = closeBtn.closest('.modal-dialog');
      modal.classList.remove('modal-opening');
      modal.classList.add('modal-closing');
      setTimeout(function () {
        modal.classList.remove('modal-closing');
        modal.style.display = 'none';
        overlay.classList.remove('modal-open');
        resolve();
      }, 500); // Длительность анимации fadeOut
    });
  }

  /* open modal */
  modalButtons.forEach(function (modalBtn) {
    modalBtn.addEventListener('click', async function (e) {
      e.preventDefault();
      await openModal(modalBtn);
    });
  });

  /* close modal */
  closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', async function (e) {
      await closeModal(closeBtn);
    });
  });
  document.querySelectorAll('.modal-dialog').forEach(function (item) {
    item.addEventListener('click', async function (e) {
      if (e.target !== e.currentTarget) {
        return;
      } else {
        await closeModal(this);
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.program-tab');
  const tabContents = document.querySelectorAll('.program-tab-content');
  function activateTab(tabId) {
    tabContents.forEach(content => {
      if (content.getAttribute('data-tab-id') === tabId) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });
  }
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab-id');
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      activateTab(tabId);
    });
  });

  // Activate the first tab by default
  activateTab('1');
});
document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion');
  if (accordions) {
    accordions.forEach(accordion => {
      const accordionItems = accordion.querySelectorAll('.accordion-item');
      if (accordionItems) {
        let hasActiveItem = false; // Переменная, которая показывает, есть ли активный элемент в текущем аккордеоне

        accordionItems.forEach((item, index) => {
          const trigger = item.querySelector('.accordion-item-header');
          const content = item.querySelector('.accordion-item-content');
          trigger.addEventListener('click', function () {
            const parent = this.parentNode;
            if (parent.classList.contains('active')) {
              parent.classList.remove('active');
              content.style.height = '0';
            } else {
              accordionItems.forEach(child => {
                child.classList.remove('active');
                child.querySelector('.accordion-item-content').style.height = '0';
              });
              parent.classList.add('active');
              content.style.height = content.scrollHeight + 'px';
            }
          });

          // Проверяем, есть ли у текущего элемента класс "active"
          if (item.classList.contains('active')) {
            hasActiveItem = true;
            item.classList.add('active');
            content.style.height = content.scrollHeight + 'px';
          }
        });

        // Если в аккордеоне нет активного элемента, открываем первый элемент по умолчанию
        if (!hasActiveItem && accordionItems.length > 0) {
          accordionItems[0].classList.add('active');
          accordionItems[0].querySelector('.accordion-item-content').style.height = accordionItems[0].querySelector('.accordion-item-content').scrollHeight + 'px';
        }
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-nav-button');
  const tabContents = document.querySelectorAll('.program-tab-panel');
  function activateTab(tabIndex) {
    tabContents.forEach((content, index) => {
      if (index === tabIndex) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });
  }
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      if (this.classList.contains('active')) {
        this.classList.remove('active'); // Remove 'active' class from the clicked tab button
        activateTab(0); // Activate the first tab panel
      } else {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        activateTab(index);
      }
    });
  });

  // Activate the first tab by default
  activateTab(0);
});
var swiper1 = new Swiper(".staff-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".staff-slider .swiper-button-next",
    prevEl: ".staff-slider .swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
var swiper2 = new Swiper(".students-work-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".students-work-slider .swiper-button-next",
    prevEl: ".students-work-slider .swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    // when window width is >= 480px
    601: {
      spaceBetween: 24
    },
    1024: {
      spaceBetween: 40
    }
  }
});
var swiper3 = new Swiper(".modal-work-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".modal-work-slider .swiper-button-next",
    prevEl: ".modal-work-slider .swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    // when window width is >= 480px
    601: {
      spaceBetween: 24
    },
    1024: {
      spaceBetween: 40
    }
  }
});
var swiper4 = new Swiper(".testimonials-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".testimonials-slider .swiper-button-next",
    prevEl: ".testimonials-slider .swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    // when window width is >= 480px
    601: {
      spaceBetween: 24
    },
    1024: {
      spaceBetween: 40
    }
  }
});
var swiper5 = new Swiper(".events-section-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 42
    },
    // when window width is >= 480px
    601: {
      spaceBetween: 24,
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
var swiper6 = new Swiper(".events-slider-main", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".events-slider-main .swiper-button-next"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.25,
      spaceBetween: 24
    },
    // when window width is >= 480px
    601: {
      spaceBetween: 24,
      slidesPerView: 1.25
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 40
    }
  }
});
var swiper7 = new Swiper(".cards-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 4,
  spaceBetween: 30,
  watchSlidesProgress: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 42
    },
    // when window width is >= 480px
    601: {
      spaceBetween: 24,
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);
// Это - ваша точка входа для скриптов страницы. Импортируйте сюда нужные вам файлы.


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFFO01BQ0pBLGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDaEI7RUFDRjtBQUNGLENBQUMsQ0FBQzs7Ozs7O1VDOVhGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgdmFyIHZpZGVvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWZhdWx0LXZpZGVvLXdyYXBwZXInKTtcbiAgdmFyIGJ0blBsYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1wbGF5Jyk7XG5cbiAgYnRuUGxheXMuZm9yRWFjaChmdW5jdGlvbihidG5QbGF5LCBpbmRleCkge1xuICAgIHZhciB2aWRlb0NvbnRhaW5lciA9IHZpZGVvc1tpbmRleF07XG4gICAgdmFyIHZpZGVvID0gdmlkZW9Db250YWluZXIucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcblxuICAgIGlmICh2aWRlbyAmJiB2aWRlby50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd2aWRlbycpIHtcbiAgICAgIGJ0blBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCkge1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICBidG5QbGF5LmNsYXNzTGlzdC5hZGQoJ3BhdXNlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgICBidG5QbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICB2YXIgbW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4tbW9kYWwtZGlhbG9nJyksXG4gICAgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcbiAgICBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nIC5tb2RhbC1jbG9zZScpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbEJ0bikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciBtb2RhbElkID0gbW9kYWxCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpLFxuICAgICAgICBtb2RhbEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLicgKyBtb2RhbElkKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgbW9kYWxFbGVtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsRWxlbS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuaW5nJyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2xvc2VNb2RhbChjbG9zZUJ0bikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciBtb2RhbCA9IGNsb3NlQnRuLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKTtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NpbmcnKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtY2xvc2luZycpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgNTAwKTsgLy8g0JTQu9C40YLQtdC70YzQvdC+0YHRgtGMINCw0L3QuNC80LDRhtC40LggZmFkZU91dFxuICAgIH0pO1xuICB9XG5cbiAgLyogb3BlbiBtb2RhbCAqL1xuICBtb2RhbEJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihtb2RhbEJ0bikge1xuICAgIG1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYXdhaXQgb3Blbk1vZGFsKG1vZGFsQnRuKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLyogY2xvc2UgbW9kYWwgKi9cbiAgY2xvc2VCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oY2xvc2VCdG4pIHtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGF3YWl0IGNsb3NlTW9kYWwoY2xvc2VCdG4pO1xuICAgIH0pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nJykuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGNsb3NlTW9kYWwodGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG59KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyYW0tdGFiJyk7XG4gIGNvbnN0IHRhYkNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyYW0tdGFiLWNvbnRlbnQnKTtcblxuICBmdW5jdGlvbiBhY3RpdmF0ZVRhYih0YWJJZCkge1xuICAgIHRhYkNvbnRlbnRzLmZvckVhY2goY29udGVudCA9PiB7XG4gICAgICBpZiAoY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiLWlkJykgPT09IHRhYklkKSB7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgdGFiSWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YWItaWQnKTtcbiAgICAgIHRhYnMuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGFjdGl2YXRlVGFiKHRhYklkKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQWN0aXZhdGUgdGhlIGZpcnN0IHRhYiBieSBkZWZhdWx0XG4gIGFjdGl2YXRlVGFiKCcxJyk7XG59KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJyk7XG5cbiAgaWYgKGFjY29yZGlvbnMpIHtcbiAgICBhY2NvcmRpb25zLmZvckVhY2goYWNjb3JkaW9uID0+IHtcbiAgICAgIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24taXRlbScpO1xuXG4gICAgICBpZiAoYWNjb3JkaW9uSXRlbXMpIHtcbiAgICAgICAgbGV0IGhhc0FjdGl2ZUl0ZW0gPSBmYWxzZTsgLy8g0J/QtdGA0LXQvNC10L3QvdCw0Y8sINC60L7RgtC+0YDQsNGPINC/0L7QutCw0LfRi9Cy0LDQtdGCLCDQtdGB0YLRjCDQu9C4INCw0LrRgtC40LLQvdGL0Lkg0Y3Qu9C10LzQtdC90YIg0LIg0YLQtdC60YPRidC10Lwg0LDQutC60L7RgNC00LXQvtC90LVcblxuICAgICAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1oZWFkZXInKTtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpO1xuXG4gICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50Jykuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0LXRgdGC0Ywg0LvQuCDRgyDRgtC10LrRg9GJ0LXQs9C+INGN0LvQtdC80LXQvdGC0LAg0LrQu9Cw0YHRgSBcImFjdGl2ZVwiXG4gICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgaGFzQWN0aXZlSXRlbSA9IHRydWU7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQldGB0LvQuCDQsiDQsNC60LrQvtGA0LTQtdC+0L3QtSDQvdC10YIg0LDQutGC0LjQstC90L7Qs9C+INGN0LvQtdC80LXQvdGC0LAsINC+0YLQutGA0YvQstCw0LXQvCDQv9C10YDQstGL0Lkg0Y3Qu9C10LzQtdC90YIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cbiAgICAgICAgaWYgKCFoYXNBY3RpdmVJdGVtICYmIGFjY29yZGlvbkl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhY2NvcmRpb25JdGVtc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICBhY2NvcmRpb25JdGVtc1swXS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpLnN0eWxlLmhlaWdodCA9IGFjY29yZGlvbkl0ZW1zWzBdLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50Jykuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCB0YWJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1uYXYtYnV0dG9uJyk7XG4gIGNvbnN0IHRhYkNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyYW0tdGFiLXBhbmVsJyk7XG5cbiAgZnVuY3Rpb24gYWN0aXZhdGVUYWIodGFiSW5kZXgpIHtcbiAgICB0YWJDb250ZW50cy5mb3JFYWNoKChjb250ZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSB0YWJJbmRleCkge1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRhYkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgLy8gUmVtb3ZlICdhY3RpdmUnIGNsYXNzIGZyb20gdGhlIGNsaWNrZWQgdGFiIGJ1dHRvblxuICAgICAgICBhY3RpdmF0ZVRhYigwKTsgLy8gQWN0aXZhdGUgdGhlIGZpcnN0IHRhYiBwYW5lbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBhY3RpdmF0ZVRhYihpbmRleCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEFjdGl2YXRlIHRoZSBmaXJzdCB0YWIgYnkgZGVmYXVsdFxuICBhY3RpdmF0ZVRhYigwKTtcbn0pO1xuXG5cblxudmFyIHN3aXBlcjEgPSBuZXcgU3dpcGVyKFwiLnN0YWZmLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDMsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnN0YWZmLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5zdGFmZi1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XG4gICAgNjAxOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBzcGFjZUJldHdlZW46IDQwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIuc3R1ZGVudHMtd29yay1zbGlkZXJcIiwge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAzLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5zdHVkZW50cy13b3JrLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5zdHVkZW50cy13b3JrLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDE6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzcGFjZUJldHdlZW46IDQwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyMyA9IG5ldyBTd2lwZXIoXCIubW9kYWwtd29yay1zbGlkZXJcIiwge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBlZmZlY3Q6IFwiZmFkZVwiLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5tb2RhbC13b3JrLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5tb2RhbC13b3JrLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDE6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzcGFjZUJldHdlZW46IDQwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyNCA9IG5ldyBTd2lwZXIoXCIudGVzdGltb25pYWxzLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIGVmZmVjdDogXCJmYWRlXCIsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnRlc3RpbW9uaWFscy1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIudGVzdGltb25pYWxzLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDE6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzcGFjZUJldHdlZW46IDQwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyNSA9IG5ldyBTd2lwZXIoXCIuZXZlbnRzLXNlY3Rpb24tc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMyxcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogNDIsXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDYwMToge1xuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgICB9LFxuICB9XG59KTtcblxudmFyIHN3aXBlcjYgPSBuZXcgU3dpcGVyKFwiLmV2ZW50cy1zbGlkZXItbWFpblwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDMsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmV2ZW50cy1zbGlkZXItbWFpbiAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuMjUsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDE6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjI1LFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgICB9LFxuICB9XG59KTtcblxudmFyIHN3aXBlcjcgPSBuZXcgU3dpcGVyKFwiLmNhcmRzLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDQsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDQyLFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDE6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgfSxcbiAgfVxufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8g0K3RgtC+IC0g0LLQsNGI0LAg0YLQvtGH0LrQsCDQstGF0L7QtNCwINC00LvRjyDRgdC60YDQuNC/0YLQvtCyINGB0YLRgNCw0L3QuNGG0YsuINCY0LzQv9C+0YDRgtC40YDRg9C50YLQtSDRgdGO0LTQsCDQvdGD0LbQvdGL0LUg0LLQsNC8INGE0LDQudC70YsuXG5cbmltcG9ydCAnLi9zY3JpcHQnO1xuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInZpZGVvcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5QbGF5cyIsImZvckVhY2giLCJidG5QbGF5IiwiaW5kZXgiLCJ2aWRlb0NvbnRhaW5lciIsInZpZGVvIiwicXVlcnlTZWxlY3RvciIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhdXNlZCIsInBsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXVzZSIsInJlbW92ZSIsIm1vZGFsQnV0dG9ucyIsIm92ZXJsYXkiLCJjbG9zZUJ1dHRvbnMiLCJvcGVuTW9kYWwiLCJtb2RhbEJ0biIsIlByb21pc2UiLCJyZXNvbHZlIiwibW9kYWxJZCIsImdldEF0dHJpYnV0ZSIsIm1vZGFsRWxlbSIsInN0eWxlIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJjbG9zZU1vZGFsIiwiY2xvc2VCdG4iLCJtb2RhbCIsImNsb3Nlc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJpdGVtIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInRhYnMiLCJ0YWJDb250ZW50cyIsImFjdGl2YXRlVGFiIiwidGFiSWQiLCJjb250ZW50IiwidGFiIiwidCIsImFjY29yZGlvbnMiLCJhY2NvcmRpb24iLCJhY2NvcmRpb25JdGVtcyIsImhhc0FjdGl2ZUl0ZW0iLCJ0cmlnZ2VyIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImNvbnRhaW5zIiwiaGVpZ2h0IiwiY2hpbGQiLCJzY3JvbGxIZWlnaHQiLCJsZW5ndGgiLCJ0YWJCdXR0b25zIiwidGFiSW5kZXgiLCJidXR0b24iLCJidG4iLCJzd2lwZXIxIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzd2lwZXIyIiwic3dpcGVyMyIsImVmZmVjdCIsInN3aXBlcjQiLCJzd2lwZXI1Iiwic3dpcGVyNiIsInN3aXBlcjciXSwic291cmNlUm9vdCI6IiJ9