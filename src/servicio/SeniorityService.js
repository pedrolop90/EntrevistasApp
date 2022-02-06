import axios from "axios";

const URL = "https://script.google.com/macros/s/AKfycbyIaEC8lorbmS8K1WKerrvDt9FZ_htSGnKVpoMqN4bourtDHhmB3AjQlec6_lTTLGAX/exec";

const URL_2 = "https://script.google.com/macros/s/AKfycbyIaEC8lorbmS8K1WKerrvDt9FZ_htSGnKVpoMqN4bourtDHhmB3AjQlec6_lTTLGAX/exec";

class SeniorityService {

    CargarDataSenioritysByChapterId() {
        return axios.get(URL);
    }

    GuardarDataSeniority(nombre, correo, dreyfus) {
        console.log(nombre, correo, dreyfus);
        //return axios.post(URL_2);
    }

}


export default new SeniorityService();