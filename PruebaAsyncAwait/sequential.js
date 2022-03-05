const util = require('util');
const sleep = util.promisify(setTimeout);
module.exports = 
{
    async taskOne()
    {
        try
        {
        await sleep(4000);
        return 'value one';
        }
        catch(e)
        {
            console.log(e);
        }
    },
    async taskTwo()
    {
        try
        {
        await sleep(2000);
        return 'value two';
        }
        catch(e)
        {
            console.log(e);
        }
    }
};