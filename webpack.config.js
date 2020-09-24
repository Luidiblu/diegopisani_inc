const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  node:{
      console:true,
      fs: 'empty',
        net: 'empty',
        tls: 'empty'
  }
};