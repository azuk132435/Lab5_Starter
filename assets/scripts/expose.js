// expose.js

window.addEventListener('DOMContentLoaded', init);

//confetti fix
const jsConfetti = new JSConfetti();

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('section#expose img'); 
  const hornSound = document.querySelector('section#expose audio'); 
  const volumeSlider = document.getElementById('volume'); 
  const volumeIcon = document.querySelector('#volume-controls img'); 
  const playButton = document.querySelector('section#expose button');

  hornSelect.addEventListener('change', function() {
    hornImage.src = `assets/images/${this.value}.svg`; 
    hornSound.src = `assets/audio/${this.value}.mp3`; 
  });

  volumeSlider.addEventListener('input', function() {
    const volume = this.value;
    updateVolumeIcon(volume, volumeIcon);
    hornSound.volume = volume / 100;
  });

  playButton.addEventListener('click', function() {
    hornSound.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}

function updateVolumeIcon(volume, iconElement) {
  if (volume == 0) {
    iconElement.src = 'assets/icons/volume-level-0.svg';
  } else if (volume < 33) {
    iconElement.src = 'assets/icons/volume-level-1.svg';
  } else if (volume < 67) {
    iconElement.src = 'assets/icons/volume-level-2.svg';
  } else {
    iconElement.src = 'assets/icons/volume-level-3.svg';
  }
}
