const getAdmin = (req, res) => {
  if (req.session.user) {
    res.render('admin');
  } else {
    res.redirect('/login');
  }
};


const logout = (req,res)=>{
  // destroy session means: remove all values from the session
  req.session.destroy();
  //req.session = null;
  res.redirect('/login');
}

const logOutPost = (req, res) => {
  req.session.destroy();
  res.json('done');
};
module.exports = { getAdmin, logout, logOutPost };
