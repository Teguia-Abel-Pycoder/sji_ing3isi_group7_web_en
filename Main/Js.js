let isDarkMode = false;

document.getElementById('toggleMode').addEventListener('click', function() {
  isDarkMode = !isDarkMode;
  toggleMode();
});

function toggleMode() {
  const leftMenu = document.querySelector('.left-menu');
  const rightMenu = document.querySelector('.Right-menu');
  const innerMenu = document.querySelector('.sub-menu');
  const innerbutton = innerMenu.querySelectorAll('button a');

  if (isDarkMode) {
    leftMenu.classList.add('dark-mode');
    rightMenu.classList.add('dark-mode2');
    innerbutton.forEach(button => {
      button.style.color = 'white'; // Change text color to white
    }
  );
    $('#modes').attr('src', "/Related-files/icons8-soleil-50.png");
  } else {
    leftMenu.classList.remove('dark-mode');
    rightMenu.classList.remove('dark-mode2');
    innerbutton.forEach(button => {
    button.style.color = 'black'; // Change text color to black
    });
    $('#modes').attr('src', '/Related-files/icons8-croissant-de-lune-50.png');

  }
}




function practiceNotes() {
  // Implementation of note practice
}

  // js/main.js
  function startEarTraining() {
    // Implementation of ear training exercises
}

  // js/main.js
  function startMemoryGame() {
    // Implementation of memory games
}

  // js/storage.js
  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

  // js/main.js
  function loadCustomization() {
    // Implementation of customization mode
}
  // js/main.js
  function startQuiz() {
    // Implementation of quizzes
}


  // js/main.js
  function animateNote() {
    anime({
        targets: '.note',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 800
    });
}

  // js/storage.js
  function openDatabase() {
    return new Promise((resolve, reject) => {
        let request = indexedDB.open("kidZikDB", 1);

        request.onupgradeneeded = function(event) {
            let db = event.target.result;
            if (!db.objectStoreNames.contains('progress')) {
                db.createObjectStore('progress', { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = function(event) {
            resolve(event.target.result);
        };

        request.onerror = function(event) {
            reject(event.target.error);
        };
    });
}

function saveProgress(data) {
    openDatabase().then(db => {
        let transaction = db.transaction( ['progress'], 'readwrite');
        let store = transaction.objectStore('progress');
        store.add(data);
    });
}

function getProgress() {
    return openDatabase().then(db => {
        return new Promise((resolve, reject) => {
            let transaction = db.transaction(['progress'], 'readonly');
            let store = transaction.objectStore('progress');
            let request = store.getAll();

            request.onsuccess = function(event) {
                resolve(event.target.result);
            };

            request.onerror = function(event) {
                reject(event.target.error);
            };
        });
    });
}



function playSound(soundId) {
  const audioElement = document.getElementById(soundId);
  if (audioElement) {
      audioElement.play();
  }
}

function navigateTo(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
      section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}


let selectedAvatar = '';

function selectAvatar(avatar) {
    selectedAvatar = avatar;
    document.querySelectorAll('.avatar').forEach(img => {
        img.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

function startGame() {
  const playerName = document.getElementById('player-name').value;
  if (!selectedAvatar || !playerName) {
      alert('Please select an avatar and enter your name.');
      return;
  }

  saveToLocalStorage('playerAvatar', selectedAvatar);
  saveToLocalStorage('playerName', playerName);

  document.getElementById('box1').style.display = 'none';
  document.getElementById('game-content').style.display = 'block';

  document.getElementById('welcome-message').textContent = `Hello, ${playerName}!`;
}