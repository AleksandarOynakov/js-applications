import applyCommonPartials from '../utils/commonPartials.js';
import { postsManagement } from '../models/postsModel.js';
import { formHelper } from '../utils/formHelper.js';


export let homeViewController = {
    render: async function () {
        await applyCommonPartials.call(this);

        if (this.loggedIn) {
            let response = await postsManagement.getAll()
                .catch(() => {
                    toastr.error("Something went wrong!");
                });

            this.posts = await response.json();
            for (const key in this.posts) {
                this.posts[key].id = key;
            }
            this.partials.post = await this.load('../views/home/post.hbs');
        }

        this.partial('../views/home/home.hbs');
    },
    create: function () {
        let form = formHelper.createFormEntity(document.getElementsByTagName('form')[0]);
        if (!Object.values(form).includes('')) {
            postsManagement.create(form)
                .then(() => {
                    toastr.success('Created!');
                    this.redirect('#/home');
                })
                .catch((error) => {
                    toastr.error(error.message);
                });
        } else {
            toastr.error('Please fill all the fields!');
        }
    },
    delete: async function () {
        await postsManagement.delete(this.params['id'])
            .then(() => {
                toastr.success('Deleted!');
                this.redirect('#/home');
            })
            .catch((error) => {
                toastr.error(error.message);
            });
    },
    details: async function () {
        await applyCommonPartials.call(this);
        let response = await postsManagement.getOne(this.params['id'])
            .catch(() => {
                toastr.error("Something went wrong!");
            });

        this.post = await response.json();
        this.partial('../views/posts/details.hbs');
    }
}