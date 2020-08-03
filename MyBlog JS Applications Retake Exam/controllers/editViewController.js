import applyCommonPartials from '../utils/commonPartials.js';
import { formHelper } from '../utils/formHelper.js';
import { postsManagement } from '../models/postsModel.js';


export let editViewController = {
    edit: async function () {
        await applyCommonPartials.call(this);
        let responseGetOne = await postsManagement.getOne(this.params['id'])
            .catch(() => {
                toastr.error("Something went wrong!");
            });

        let responseGetAll = await postsManagement.getAll()
            .catch(() => {
                toastr.error("Something went wrong!");
            });

        this.posts = await responseGetAll.json();

        for (const key in this.posts) {
            this.posts[key].id = key;
        }
        this.currentPost = await responseGetOne.json();
        this.currentPost.id = this.params['id'];
        this.partials.post = await this.load('../views/home/post.hbs');
        await this.partial('../views/posts/edit.hbs');
    },
    submitEdit: function () {
        let data = formHelper.createFormEntity(document.getElementsByTagName('form')[0]);
        postsManagement.edit(this.params['id'], data)
            .then(() => this.redirect('#/home'))
            .catch(() => {
                toastr.error("Something went wrong!");
            });
    }
};