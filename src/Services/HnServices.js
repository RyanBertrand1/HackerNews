import axios from 'axios';

const hnURL = "https://hacker-news.firebaseio.com/v0";
const algoliaURL = "http://hn.algolia.com/api/v1";

export default {
    async getItemById(id){
         return await axios.get( `${hnURL}/item/${id}.json`).then(res => res.data);
    },

    async getTop3Stories(){
        return await axios.get(`${hnURL}/topstories.json`).then(r => r.data.slice(0,3));
    },

    async getAll(){
        return await axios.get(`${algoliaURL}/search?tags=front_page`).then(res => res.data.hits);
    },

    async getNew(){
        return await axios.get(`${algoliaURL}/search_by_date?tags=(story, ask_hn, show)`).then(res => res.data.hits);
    },

    async getAsk(sortBy){
        let url;
        if(sortBy === "best"){
            url = `${algoliaURL}/search?tags=ask_hn`;
        }
        if(sortBy === "newest"){
            url = `${algoliaURL}/search_by_date?tags=ask_hn`;
        }
        return await axios.get(url).then(res => res.data.hits);
    },

    async getShow(sortBy){
        console.log(sortBy);
        let url;
        if(sortBy === "best"){
            url = `${algoliaURL}/search?tags=show_hn`;
        }
        if(sortBy === "newest"){
            url = `${algoliaURL}/search_by_date?tags=show_hn`;
        }
        return await axios.get(url).then(res => res.data.hits);
    },

    async getComments(){
        return await axios.get(`${algoliaURL}/search/?tags=comment`).then(res => res.data.hits);
    },

    async getJobs(sortBy){
        let url;
        if(sortBy === "best"){
            url = `${algoliaURL}/search?tags=job`;
        }
        if(sortBy === "newest"){
            url = `${algoliaURL}/search_by_date?tags=job`
        }

        return axios.get(url).then(res => res.data.hits);
    }

}