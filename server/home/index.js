var path = require('path');

module.exports = (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'frontend', 'dist', 'index.html'));
};
