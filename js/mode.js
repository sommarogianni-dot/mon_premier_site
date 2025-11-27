
function mode() {
  const body = document.body;
  const becameLight = body.classList.toggle('light-mode');
  try {
    localStorage.setItem('preferredTheme', becameLight ? 'light' : 'dark');
  } catch (e) {

  }

  const img = document.getElementById('myImg');
  if (!img) return;
  const night = '/images/night_mode.png';
  const light = '/images/light_mode.png';
  img.src = becameLight ? light : night;
}

document.addEventListener('DOMContentLoaded', function () {
  const img = document.getElementById('myImg');
  if (img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', mode);
  }

  try {
    const pref = localStorage.getItem('preferredTheme');
    if (pref === 'light') {
      document.body.classList.add('light-mode');
      if (img) img.src = '/images/light_mode.png';
    } else if (pref === 'dark') {
      document.body.classList.remove('light-mode');
      if (img) img.src = '/images/night_mode.png';
    }
  } catch (e) {
  }
});
