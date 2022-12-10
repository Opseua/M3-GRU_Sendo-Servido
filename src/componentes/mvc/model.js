// eslint-disable-next-line
import axios from "axios"
import AvisoDeResposta from './view.js'

async function ModelApiData(inf_1,inf_2,inf_3) {
    try {
        let res = await axios({
            url: inf_2,
            method: inf_1,
            timeout: 8000,
            data: inf_3,
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





