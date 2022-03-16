loginForm.onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    console.log(result);
    if (result === 'done') {
      window.location = '/admin';
    } else {
      alert('wrong username or password , try again');
    }
  } catch (error) {
    console.log(error);
  }
};
