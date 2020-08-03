export let formHelper = {
    createFormEntity: (form) => {
        let formData = new FormData(form).entries();
        let data = {};
        for (const [key, value] of formData) {
            data[key] = value;
        }
        return data;
    }
}