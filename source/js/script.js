document.addEventListener("DOMContentLoaded", function() {
  var videos = document.querySelectorAll('.banner-video');
  var btnPlays = document.querySelectorAll('.btn-play');

  btnPlays.forEach(function(btnPlay, index) {
    var video = videos[index].querySelector('video');

    btnPlay.addEventListener('click', function() {
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
      }, 500); // Длительность анимации fadeOut
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



var swiper1 = new Swiper(".staff-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".staff-slider .swiper-button-next",
    prevEl: ".staff-slider .swiper-button-prev",
  },
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
  slidesPerView: 'auto',
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
