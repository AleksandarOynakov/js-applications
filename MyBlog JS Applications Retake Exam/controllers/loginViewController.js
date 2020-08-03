import applyCommonPartials from '../utils/commonPartials.js';
import { formHelper } from '../utils/formHelper.js';
import { userManagement } from '../models/userModel.js';

export let loginViewController = {
    render: async function () {
        await applyCommonPartials.call(this);
        this.partial('../views/user/login.hbs');
    },
    login: function () {
        let form = formHelper.createFormEntity(document.getElementById('form'));
        if (!Object.values(form).includes('')) {
            userManagement.login(form.email, form.password)
                .then(() => {
                    toastr.success('You logged in!');
                    this.redirect('#/home');
                })
                .catch(() => {
                    toastr.error("Invalid username or password!");
                })
        } else {
            toastr.error('Please fill email and password!');
        }
    },
    logout: function () {
        userManagement.logout()
            .then(() => {
                toastr.success('You logged out!');
                this.redirect('#/home');
            })
            .catch((error) => {
                toastr.error(error);
            })
    }
}