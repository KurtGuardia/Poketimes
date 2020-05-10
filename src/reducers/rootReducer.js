const initState = {
    posts: [
        {id: '1', title: 'Ejemplo', body: 'Lorem ipsum o whatever...'},
        {id: '2', title: 'Example', body: 'Bla bla bla bla etc'},
        {id: '3', title: 'Zum Beispiel', body: 'What Who Where Which...'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state, 
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;