const getLogin = (req, res) => {
  res.render('login');
};

const postLogin = (req, res) => {
  // write the code to check if sent data [username, password]
  // matches the following ['admin', 'admin']
  // if it matches res.json('done');
  // else res.json('error')
  const { email, password } = req.body;
  if (email === 'mbrsyr@yahoo.com' && password === '123456') {
    // fill session with some data
    req.session.user = {
      username: 'admin',
    };
    res.json('done');
  } else {
    res.json('error');
  }
};

module.exports = { getLogin, postLogin };
