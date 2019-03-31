import { combineReducers } from 'redux';
import PostsReducer from './postsReducers';

export default combineReducers({
    posts: PostsReducer
});