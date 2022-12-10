// eslint-disable-next-line
import axios from "axios"

async function ModelApiData(mod1,mod2,mod3) {
    try {
        let res = await axios({
            url: mod2,
            method: mod1,
            timeout: 8000,
            
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (res.status == 200) {
            return res
        }
    }
    catch (err) {
        return 'ERRO';
    }
}

export default ModelApiData





