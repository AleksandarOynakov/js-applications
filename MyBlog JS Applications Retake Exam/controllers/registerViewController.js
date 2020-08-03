import applyCommonPartials from '../utils/commonPartials.js';
import { formHelper } from '../utils/formHelper.js';
import { userManagement } from '../models/userModel.js';

export let registerViewController = {
    render: async function () {
        await applyCommonPartials.call(this);
        this.partial('../views/user/register.hbs');
    },
    register: function () {
        let form = formHelper.createFormEntity(document.getElementById('form'));

        if (form.password === form.repeatPassword) {
            userManagement.register(form.email, form.password)
                .catch(response => {
                    toastr.error(`${response.status}: ${response.message}`);
                })
            toastr.success('User registered!');
            this.redirect('#/login');
        } else {
            toastr.error("Passwords don't match!");
        }
    }
}
