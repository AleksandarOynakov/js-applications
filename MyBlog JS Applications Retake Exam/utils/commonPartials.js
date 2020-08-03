import { userManagement } from '../models/userModel.js';

export default async function applyCommonPartials() {
    this.partials = {
        header: await this.load('../views/header/header.hbs')
    }
    this.loggedIn = userManagement.getCurrentUserInfo() || false;

    if (this.loggedIn)
        this.email = userManagement.getCurrentUserInfo().email || false;
}