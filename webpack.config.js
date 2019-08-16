const path = require('path');
// getting path functionality with node by requiring path functionality

module.exports = {
    entry: './src/app.js',
    output:{
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
}