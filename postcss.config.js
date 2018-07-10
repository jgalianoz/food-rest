module.exports = {
    plugins: [
        require('autoprefixer'), // puede resivir un objeto para encenter prefijos
        require('postcss-cssnext')({
            features: {
                autoprefixer: true,
            }
        }),
    ]
}