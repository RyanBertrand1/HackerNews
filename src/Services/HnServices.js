import axios from 'axios';
import { interfaceDeclaration } from '@babel/types';

const hnURL = "https://hacker-news.firebaseio.com/v0";

export default {
    async getItemById(id){
         return await axios.get( `${hnURL}/item/${id}.json`).then(res => res.data);
    },

    async getTop3Stories(){
        return await axios.get(`${hnURL}/topstories.json`).then(r => r.data.slice(0,3));
    }
}