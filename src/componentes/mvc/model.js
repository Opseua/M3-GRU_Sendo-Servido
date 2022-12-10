// eslint-disable-next-line
import axios from "axios"

function Teste() {

    async function getData() {
        try {
            let res = await axios({
                url: 'https://server-2.onrender.com/corretores/1',
                method: 'get',
                timeout: 8000,
                data: { "teste": "123" },
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if (res.status == 200) {
                // test for status you want, etc
                return alert('1')
            }
        }
        catch (err) {
            return alert('2')
        }
    }

    getData()
        .then(res => console.log(res.data))



}

export default Teste