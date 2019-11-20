import axios from 'axios';

export default {
    async getItemById(id){
         return await axios.get( `https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    },

    async getTopStories(){
        return await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    }
}