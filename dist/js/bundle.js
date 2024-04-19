/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll('.banner-video');
  var btnPlays = document.querySelectorAll('.btn-play');
  btnPlays.forEach(function (btnPlay, index) {
    var video = videos[index].querySelector('video');
    btnPlay.addEventListener('click', function () {
      if (video.paused) {
        video.play();
        btnPlay.classList.add('pause');
      } else {
        video.pause();
        btnPlay.classList.remove('pause');
      }
    });
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
  slidesPerView: 'auto',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDdkQsSUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztFQUN2RCxJQUFJQyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0VBRXJEQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxVQUFTQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtJQUN4QyxJQUFJQyxLQUFLLEdBQUdOLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDLENBQUNFLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFFaERILE9BQU8sQ0FBQ0wsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7TUFDM0MsSUFBSU8sS0FBSyxDQUFDRSxNQUFNLEVBQUU7UUFDaEJGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLENBQUM7UUFDWkwsT0FBTyxDQUFDTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7TUFDaEMsQ0FBQyxNQUFNO1FBQ0xMLEtBQUssQ0FBQ00sS0FBSyxDQUFDLENBQUM7UUFDYlIsT0FBTyxDQUFDTSxTQUFTLENBQUNHLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDbkM7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRmYsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3ZELElBQUllLFlBQVksR0FBR2hCLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7SUFDaEVjLE9BQU8sR0FBR2pCLFFBQVEsQ0FBQ1MsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUN4Q1MsWUFBWSxHQUFHbEIsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQztFQUV4RSxlQUFlZ0IsU0FBU0EsQ0FBQ0MsUUFBUSxFQUFFO0lBQ2pDLE9BQU8sSUFBSUMsT0FBTyxDQUFDQyxPQUFPLElBQUk7TUFDNUIsSUFBSUMsT0FBTyxHQUFHSCxRQUFRLENBQUNJLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDN0NDLFNBQVMsR0FBR3pCLFFBQVEsQ0FBQ1MsYUFBYSxDQUFDLGdCQUFnQixHQUFHYyxPQUFPLENBQUM7TUFDaEVOLE9BQU8sQ0FBQ0wsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ25DWSxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFFaENDLFVBQVUsQ0FBQyxZQUFXO1FBQ3BCSCxTQUFTLENBQUNiLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUN4Q1MsT0FBTyxDQUFDLENBQUM7TUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxlQUFlTyxVQUFVQSxDQUFDQyxRQUFRLEVBQUU7SUFDbEMsT0FBTyxJQUFJVCxPQUFPLENBQUNDLE9BQU8sSUFBSTtNQUM1QixJQUFJUyxLQUFLLEdBQUdELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLGVBQWUsQ0FBQztNQUM3Q0QsS0FBSyxDQUFDbkIsU0FBUyxDQUFDRyxNQUFNLENBQUMsZUFBZSxDQUFDO01BQ3ZDZ0IsS0FBSyxDQUFDbkIsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO01BRXBDZSxVQUFVLENBQUMsWUFBVztRQUNwQkcsS0FBSyxDQUFDbkIsU0FBUyxDQUFDRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQ3ZDZ0IsS0FBSyxDQUFDTCxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO1FBQzVCVixPQUFPLENBQUNMLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN0Q08sT0FBTyxDQUFDLENBQUM7TUFDWCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQztFQUNKOztFQUVBO0VBQ0FOLFlBQVksQ0FBQ1gsT0FBTyxDQUFDLFVBQVNlLFFBQVEsRUFBRTtJQUN0Q0EsUUFBUSxDQUFDbkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFlZ0MsQ0FBQyxFQUFFO01BQ25EQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ2xCLE1BQU1mLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDO0lBQzNCLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBRixZQUFZLENBQUNiLE9BQU8sQ0FBQyxVQUFTeUIsUUFBUSxFQUFFO0lBQ3RDQSxRQUFRLENBQUM3QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsZ0JBQWVnQyxDQUFDLEVBQUU7TUFDbkQsTUFBTUosVUFBVSxDQUFDQyxRQUFRLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBRUY5QixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDRSxPQUFPLENBQUMsVUFBUzhCLElBQUksRUFBRTtJQUNoRUEsSUFBSSxDQUFDbEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFlZ0MsQ0FBQyxFQUFFO01BQy9DLElBQUlBLENBQUMsQ0FBQ0csTUFBTSxLQUFLSCxDQUFDLENBQUNJLGFBQWEsRUFBRTtRQUNoQztNQUNGLENBQUMsTUFBTTtRQUNMLE1BQU1SLFVBQVUsQ0FBQyxJQUFJLENBQUM7TUFDeEI7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFFSixDQUFDLENBQUM7QUFJRixJQUFJUyxPQUFPLEdBQUcsSUFBSUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtFQUN4Q0MsUUFBUSxFQUFFLElBQUk7RUFDZEMsY0FBYyxFQUFFLElBQUk7RUFDcEJDLG9CQUFvQixFQUFFLElBQUk7RUFDMUJDLGFBQWEsRUFBRSxDQUFDO0VBQ2hCQyxZQUFZLEVBQUUsRUFBRTtFQUNoQkMsbUJBQW1CLEVBQUUsSUFBSTtFQUN6QkMsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxtQ0FBbUM7SUFDM0NDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREMsV0FBVyxFQUFFO0lBQ1g7SUFDQSxHQUFHLEVBQUU7TUFDSE4sYUFBYSxFQUFFLENBQUM7TUFDaEJDLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0Q7SUFDQSxHQUFHLEVBQUU7TUFDSEQsYUFBYSxFQUFFLENBQUM7TUFDaEJDLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0QsSUFBSSxFQUFFO01BQ0pELGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDaEI7RUFDRjtBQUNGLENBQUMsQ0FBQztBQUVGLElBQUlNLE9BQU8sR0FBRyxJQUFJWCxNQUFNLENBQUMsdUJBQXVCLEVBQUU7RUFDaERDLFFBQVEsRUFBRSxJQUFJO0VBQ2RDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxvQkFBb0IsRUFBRSxJQUFJO0VBQzFCQyxhQUFhLEVBQUUsTUFBTTtFQUNyQkMsWUFBWSxFQUFFLEVBQUU7RUFDaEJDLG1CQUFtQixFQUFFLElBQUk7RUFDekJDLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUsMkNBQTJDO0lBQ25EQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RDLFdBQVcsRUFBRTtJQUNYO0lBQ0EsR0FBRyxFQUFFO01BQ0hOLGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNEO0lBQ0EsR0FBRyxFQUFFO01BQ0hBLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0QsSUFBSSxFQUFFO01BQ0pBLFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBSU8sT0FBTyxHQUFHLElBQUlaLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtFQUM3Q0MsUUFBUSxFQUFFLElBQUk7RUFDZEMsY0FBYyxFQUFFLElBQUk7RUFDcEJDLG9CQUFvQixFQUFFLElBQUk7RUFDMUJDLGFBQWEsRUFBRSxDQUFDO0VBQ2hCQyxZQUFZLEVBQUUsRUFBRTtFQUNoQlEsTUFBTSxFQUFFLE1BQU07RUFDZFAsbUJBQW1CLEVBQUUsSUFBSTtFQUN6QkMsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSx3Q0FBd0M7SUFDaERDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREMsV0FBVyxFQUFFO0lBQ1g7SUFDQSxHQUFHLEVBQUU7TUFDSE4sYUFBYSxFQUFFLENBQUM7TUFDaEJDLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0Q7SUFDQSxHQUFHLEVBQUU7TUFDSEEsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxJQUFJLEVBQUU7TUFDSkEsWUFBWSxFQUFFO0lBQ2hCO0VBQ0Y7QUFDRixDQUFDLENBQUM7Ozs7OztVQ3BLRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIHZhciB2aWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFubmVyLXZpZGVvJyk7XG4gIHZhciBidG5QbGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcGxheScpO1xuXG4gIGJ0blBsYXlzLmZvckVhY2goZnVuY3Rpb24oYnRuUGxheSwgaW5kZXgpIHtcbiAgICB2YXIgdmlkZW8gPSB2aWRlb3NbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG5cbiAgICBidG5QbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XG4gICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgYnRuUGxheS5jbGFzc0xpc3QuYWRkKCdwYXVzZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgYnRuUGxheS5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHZhciBtb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Blbi1tb2RhbC1kaWFsb2cnKSxcbiAgICBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuICAgIGNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1kaWFsb2cgLm1vZGFsLWNsb3NlJyk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsQnRuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdmFyIG1vZGFsSWQgPSBtb2RhbEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyksXG4gICAgICAgIG1vZGFsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2cuJyArIG1vZGFsSWQpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICBtb2RhbEVsZW0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWxFbGVtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjbG9zZU1vZGFsKGNsb3NlQnRuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdmFyIG1vZGFsID0gY2xvc2VCdG4uY2xvc2VzdCgnLm1vZGFsLWRpYWxvZycpO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbmluZycpO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY2xvc2luZycpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1jbG9zaW5nJyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCA1MDApOyAvLyDQlNC70LjRgtC10LvRjNC90L7RgdGC0Ywg0LDQvdC40LzQsNGG0LjQuCBmYWRlT3V0XG4gICAgfSk7XG4gIH1cblxuICAvKiBvcGVuIG1vZGFsICovXG4gIG1vZGFsQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1vZGFsQnRuKSB7XG4gICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhd2FpdCBvcGVuTW9kYWwobW9kYWxCdG4pO1xuICAgIH0pO1xuICB9KTtcblxuICAvKiBjbG9zZSBtb2RhbCAqL1xuICBjbG9zZUJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihjbG9zZUJ0bikge1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgYXdhaXQgY2xvc2VNb2RhbChjbG9zZUJ0bik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1kaWFsb2cnKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgY2xvc2VNb2RhbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbn0pO1xuXG5cblxudmFyIHN3aXBlcjEgPSBuZXcgU3dpcGVyKFwiLnN0YWZmLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDMsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnN0YWZmLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5zdGFmZi1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XG4gICAgNjAxOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBzcGFjZUJldHdlZW46IDQwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIuc3R1ZGVudHMtd29yay1zbGlkZXJcIiwge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnN0dWRlbnRzLXdvcmstc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnN0dWRlbnRzLXdvcmstc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDYwMToge1xuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgfSxcbiAgfVxufSk7XG5cbnZhciBzd2lwZXIzID0gbmV3IFN3aXBlcihcIi5tb2RhbC13b3JrLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIGVmZmVjdDogXCJmYWRlXCIsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLm1vZGFsLXdvcmstc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLm1vZGFsLXdvcmstc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDYwMToge1xuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgfSxcbiAgfVxufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8g0K3RgtC+IC0g0LLQsNGI0LAg0YLQvtGH0LrQsCDQstGF0L7QtNCwINC00LvRjyDRgdC60YDQuNC/0YLQvtCyINGB0YLRgNCw0L3QuNGG0YsuINCY0LzQv9C+0YDRgtC40YDRg9C50YLQtSDRgdGO0LTQsCDQvdGD0LbQvdGL0LUg0LLQsNC8INGE0LDQudC70YsuXG5cbmltcG9ydCAnLi9zY3JpcHQnO1xuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInZpZGVvcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5QbGF5cyIsImZvckVhY2giLCJidG5QbGF5IiwiaW5kZXgiLCJ2aWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXVzZWQiLCJwbGF5IiwiY2xhc3NMaXN0IiwiYWRkIiwicGF1c2UiLCJyZW1vdmUiLCJtb2RhbEJ1dHRvbnMiLCJvdmVybGF5IiwiY2xvc2VCdXR0b25zIiwib3Blbk1vZGFsIiwibW9kYWxCdG4iLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1vZGFsSWQiLCJnZXRBdHRyaWJ1dGUiLCJtb2RhbEVsZW0iLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwiY2xvc2VNb2RhbCIsImNsb3NlQnRuIiwibW9kYWwiLCJjbG9zZXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXRlbSIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJzd2lwZXIxIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzd2lwZXIyIiwic3dpcGVyMyIsImVmZmVjdCJdLCJzb3VyY2VSb290IjoiIn0=