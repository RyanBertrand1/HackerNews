import axios from 'axios';

const hnURL = "https://hacker-news.firebaseio.com/v0";
const algoliaURL = "http://hn.algolia.com/api/v1";

export default {
    async getItemById(id){
         return await axios.get( `${algoliaURL}/items/${id}`);
    },

    async getTop3Stories(){
        return await axios.get(`${hnURL}/topstories.json`).then(r => r.data.slice(0,3));
    },

    async getAll(pages){
        return await axios.get(`${algoliaURL}/search?tags=front_page&page=${pages}`).then(res => res.data.hits);
    },

    async getNew(pages){
        return await axios.get(`${algoliaURL}/search_by_date?tags=(story, ask_hn, show_hn)&page=${pages}`).then(res => res.data.hits);
    },

    async getAsk(sortBy, pages){
        let url;
        if(sortBy === "best"){
            url = `${algoliaURL}/search?tags=ask_hn&page=${pages}`;
        }
        if(sortBy === "newest"){
            url = `${algoliaURL}/search_by_date?tags=ask_hn&page=${pages}`;
        }
        return await axios.get(url).then(res => res.data.hits);
    },

    async getShow(sortBy, pages){
        let url;
        if(sortBy === "best"){
            url = `${algoliaURL}/search?tags=show_hn&page=${pages}`;
        }
        if(sortBy === "newest"){
            url = `${algoliaURL}/search_by_date?tags=show_hn&page=${pages}`;
        }
        return await axios.get(url).then(res => res.data.hits);
    },

    async getComments(sortBy, pages){
        let url;
        if(sortBy === "best"){
            url = `${algoliaURL}/search/?tags=comment&page=${pages}`;
        }
        if(sortBy === "newest"){
            url = `${algoliaURL}/search_by_date/?tags=comment&page=${pages}`;
        }
        return await axios.get(url).then(res => res.data.hits);
    },

    async getJobs(sortBy, pages){
        let url;
        if(sortBy === "best"){
            url = `${algoliaURL}/search?tags=job&page=${pages}`;
        }
        if(sortBy === "newest"){
            url = `${algoliaURL}/search_by_date?tags=job&page=${pages}`;
        }

        return await axios.get(url).then(res => res.data.hits);
    },

    async getSearchResults(sortBy, pages, query){
        let url; 
        if(sortBy === "best"){
            url = `${algoliaURL}/search?query=${query}&tags=(story, job, show_hn, ask_hn)&page=${pages}`;
        } 
        if(sortBy === "newest"){
            url = `${algoliaURL}/search_by_date?query=${query}&tags=(story, job, show_hn, ask_hn)&page=${pages}`;
        }

        return await axios.get(url).then(res => res.data.hits);
    }
}