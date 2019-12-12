export function addStory(story) {
    const action = {
      type: 'ADD_STORY',
      story
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