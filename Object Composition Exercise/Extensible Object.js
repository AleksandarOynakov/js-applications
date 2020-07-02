function extensible() {
    Object.prototype.extend = function (template) {
        for (const key in template) {
            if (typeof template[key] === 'function') {
                let proto = Object.getPrototypeOf(this);
                proto[key] = template[key];
            } else {
                this[key] = template[key];
            }
        }
    };
    return {};
}
