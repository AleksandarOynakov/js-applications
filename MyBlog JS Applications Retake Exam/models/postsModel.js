import { userManagement } from './userModel.js';
import sendRequest from '../utils/requester.js';

export let postsManagement = {
    getAll: async () => {
        let response = await sendRequest(`${userManagement.getCurrentUserInfo().uid}/posts`, 'GET');
        if (response.status >= 400) {
            throw new Error;
        }
        return response;
    },
    getOne: async (id) => {
        let response = await sendRequest(`${userManagement.getCurrentUserInfo().uid}/posts/${id}`, 'GET');
        if (response.status >= 400) {
            throw new Error;
        }
        return response;
    },
    create: async (form) => {
        let response = await sendRequest(`${userManagement.getCurrentUserInfo().uid}/posts`, 'POST', JSON.stringify(form));
        if (response.status >= 400) {
            throw new Error;
        }
        return response;
    },
    delete: async (id) => {
        let response = await sendRequest(`${userManagement.getCurrentUserInfo().uid}/posts/${id}`, 'DELETE');
        if (response.status >= 400) {
            throw new Error;
        }
        return response;
    },
    edit: async (id, form) => {
        let response = await sendRequest(`${userManagement.getCurrentUserInfo().uid}/posts/${id}`, 'PUT', JSON.stringify(form));
        if (response.status >= 400) {
            throw response;
        }
        return response;
    }
};