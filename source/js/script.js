document.addEventListener("DOMContentLoaded", function() {
  var videos = document.querySelectorAll('.default-video-wrapper');
  var btnPlays = document.querySelectorAll('.btn-play');

  btnPlays.forEach(function(btnPlay, index) {
    var videoContainer = videos[index];
    var video = videoContainer.querySelector('video');

    if (video && video.tagName.toLowerCase() === 'video') {
      btnPlay.addEventListener('click', function() {
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

document.addEventListener('DOMContentLoaded', function() {
  var modalButtons = document.querySelectorAll('.open-modal-dialog'),
    overlay = document.querySelector('body'),
    closeButtons = document.querySelectorAll('.modal-dialog .modal-close');

  async function openModal(modalBtn) {
    return new Promise(resolve => {
      var modalId = modalBtn.getAttribute('data-src'),
        modalElem = document.querySelector('.modal-dialog.' + modalId);
      overlay.classList.add('modal-open');
      modalElem.style.display = 'flex';

      setTimeout(function() {
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

      setTimeout(function() {
        modal.classList.remove('modal-closing');
        modal.style.display = 'none';
        overlay.classList.remove('modal-open');
        resolve();
      }, 500);
    });
  }

  /* open modal */
  modalButtons.forEach(function(modalBtn) {
    modalBtn.addEventListener('click', async function(e) {
      e.preventDefault();
      await openModal(modalBtn);
    });
  });

  /* close modal */
  closeButtons.forEach(function(closeBtn) {
    closeBtn.addEventListener('click', async function(e) {
      await closeModal(closeBtn);
    });
  });

  document.querySelectorAll('.modal-dialog').forEach(function(item) {
    item.addEventListener('click', async function(e) {
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


document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion-new');

  if (accordions) {
    accordions.forEach(accordion => {
      const accordionItems = accordion.querySelectorAll('.accordion-new-item');

      if (accordionItems) {
        accordionItems.forEach((item, index) => {
          const trigger = item.querySelector('.accordion-new-item-header');
          const content = item.querySelector('.accordion-new-item-content');
          const status = item.querySelector('.accordion-new-header-status');

          if (!trigger || !content) {
            console.error('One or more elements not found in accordion item:', item);
            return;
          }

          trigger.addEventListener('click', function() {
            const parent = this.parentNode;

            if (parent.classList.contains('active')) {
              parent.classList.remove('active');
              content.style.height = '0';
              if (status) status.textContent = 'view';
            } else {
              accordionItems.forEach(child => {
                child.classList.remove('active');
                const childContent = child.querySelector('.accordion-new-item-content');
                const childStatus = child.querySelector('.accordion-new-header-status');
                if (childContent && childStatus) {
                  childContent.style.height = '0';
                  childStatus.textContent = 'view';
                }
              });
              parent.classList.add('active');
              content.style.height = content.scrollHeight + 'px';
              if (status) status.textContent = 'hidden';
            }
          });

          if (index === 0) {
            item.classList.add('active');
            content.style.height = content.scrollHeight + 'px';
            if (status) status.textContent = 'hidden';
          } else {
            content.style.height = '0';
            if (status) status.textContent = 'view';
          }
        });
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
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
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
    prevEl: ".students-work-slider .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    601: {
      spaceBetween: 24,
    },
    1024: {
      spaceBetween: 40,
    },
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
    prevEl: ".modal-work-slider .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    601: {
      spaceBetween: 24,
    },
    1024: {
      spaceBetween: 40,
    },
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
    prevEl: ".testimonials-slider .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    601: {
      spaceBetween: 24,
    },
    1024: {
      spaceBetween: 40,
    },
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
      spaceBetween: 42,
    },
    // when window width is >= 480px
    601: {
      spaceBetween: 24,
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
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
    nextEl: ".events-slider-main .swiper-button-next",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.25,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    601: {
      spaceBetween: 24,
      slidesPerView: 1.25,
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
  }
});



document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-section-w-image .accordion-new-item');
  const imageWrappers = document.querySelectorAll('.image-wrapper');

  accordionItems.forEach(item => {
    item.addEventListener('click', function() {
      const accordionImageNumber = this.getAttribute('data-accordion-image');
      const accordionImageWrapper = document.querySelector(`.image-wrapper[data-accordion-image="${accordionImageNumber}"]`);

      if (!accordionImageWrapper) {
        console.error(`Image wrapper for accordion item ${accordionImageNumber} not found.`);
        return;
      }

      imageWrappers.forEach(wrapper => {
        if (wrapper !== accordionImageWrapper) {
          wrapper.classList.remove('show');
        }
      });

      accordionImageWrapper.classList.add('show');
    });
  });
});



