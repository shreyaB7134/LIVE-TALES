function nextPage(pageId) {
    document.querySelectorAll('.page').forEach((page) => {
      page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
  }
  
  function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.play();
  }
  
  function restartStory() {
    nextPage('page1');
  }