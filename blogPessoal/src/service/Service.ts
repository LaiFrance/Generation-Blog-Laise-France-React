import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blog-laise-france.onrender.com',
});

export const login = async (url: string, dados: any, setDado: any) => {
    const response = await api.post(url, dados);
    setDado(response.data);
}

console.log(api);

