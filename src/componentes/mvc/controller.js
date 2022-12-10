// EXECUTAR SEMPRE QUE O BOTÃO 'LOGIN' FOR PRESSIONADO //

// eslint-disable-next-line

import ViewAvisoDeResposta from './view.js'
import ModelApiData from './model.js'






function ControllerGetPost(cont1, cont2, cont3) {

    ModelApiData(cont1, cont2).then((res) => {
        if (res == 'ERRO') {
            
            return
        }

        return res
    });



}

export default ControllerGetPost