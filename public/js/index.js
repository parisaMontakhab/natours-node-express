import '@babel/polyfill';

import { login, logout } from './login';
import { displayMap } from './mapbox';
import { updateSettings } from './updateSettings';

const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-settings');

if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login(email, password);
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });
}

if (userDataForm) {
  userDataForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);

    const photoInput = document.getElementById('photo');
    const photo = photoInput.files[0];

    console.log('SELECTED PHOTO:', photo);

    if (photo) {
      form.append('photo', photo);
    }

    const success = await updateSettings(form, 'data');

    if (success) {
      window.setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const passwordCurrent = document.getElementById('password-current').value;

    const password = document.getElementById('password').value;

    const passwordConfirm = document.getElementById('password-confirm').value;

    const savePasswordBtn = document.querySelector('.btn--save-password');

    savePasswordBtn.textContent = 'Updating...';

    const success = await updateSettings(
      {
        passwordCurrent,
        password,
        passwordConfirm,
      },
      'password',
    );

    savePasswordBtn.textContent = 'Save password';

    if (success) {
      document.getElementById('password-current').value = '';
      document.getElementById('password').value = '';
      document.getElementById('password-confirm').value = '';
    }
  });
}
