const path = require('path');
// getting path functionality with node by requiring path functionality
const currentFilePath = path.join(__dirname, 'public')
// object
module.exports = {
    entry: './src/app.js',
    output:{
        // have to use path.join since it's an absolute path
        // path.join is a method that joins two strings
        path: currentFilePath,
        filename: 'bundle.js'
    }
}