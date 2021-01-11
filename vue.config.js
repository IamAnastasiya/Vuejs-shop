module.exports = {
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    additionalData: `@import '/assets/styles/variables/index.scss';`
                }
            }
        }
    }
}

