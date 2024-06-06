let isDarkMode = false;

document.getElementById('toggleMode').addEventListener('click', function() {
  isDarkMode = !isDarkMode;
  toggleMode();
});

function toggleMode() {
  const leftMenu = document.querySelector('.left-menu');
  const innerMenu = document.querySelector('.sub-menu');
  const innerbutton = innerMenu.querySelectorAll('button');
  if (isDarkMode) {
    leftMenu.classList.add('dark-mode');
    innerbutton.forEach(button => {
      button.style.color = 'white'; // Change text color to white
    });
    $('#modes').attr('src', "/Related-files/icons8-soleil-50.png");
  } else {
    leftMenu.classList.remove('dark-mode');
    innerbutton.forEach(button => {
    button.style.color = 'black'; // Change text color to black
    });
    $('#modes').attr('src', '/Related-files/icons8-croissant-de-lune-50.png');

  }
}