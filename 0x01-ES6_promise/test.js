function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}

function handleProfileSignup() {
  let body = '';
  uploadPhoto().then((data) => {
    body = data.body;
  });
  createUser().then((data) => {
    console.log(`${body} ${data.firstName} ${data.lastName}`);
  });
}

handleProfileSignup();
