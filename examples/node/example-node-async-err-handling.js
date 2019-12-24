module.exports = {
    errorProneAsyncApi: (input, callback) => {
        console.log(`Running errorProneAsyncApi with input: ${input}...\n`)
        setTimeout(() => {
            let myErr;
            if (input === 'problematic input') {
                myErr = new Error('whoops')
                callback(myErr)
            } else {
                let responseData = `Received valid input "${input}"`
                callback(myErr, responseData)
            }
        }, 0)
    }
}