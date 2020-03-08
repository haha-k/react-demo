const Autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        new Autoprefixer({
            browsers:[
                'last 5 version',
                '>1%',
                'ie >= 8'
            ]
        })
    ]
};