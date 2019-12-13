export function addNews(news) {
    const action = {
      type: 'ADD_NEWS',
      news
    }  
    return action;
}

export function init(stories){
    const action = {
        type: 'INIT',
        stories
    }
    return action;
}