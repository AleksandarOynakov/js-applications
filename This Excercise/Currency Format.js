function result(currencyFormatter) {
    return (value) => currencyFormatter(',', '$', true, value);
}
