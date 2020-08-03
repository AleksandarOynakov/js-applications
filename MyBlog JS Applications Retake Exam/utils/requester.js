export default async function sendRequest(uidCollection, method, body) {
    let url = `https://softuni-tests-bfd33.firebaseio.com/myblog/${uidCollection}.json`;
    let bodyRequest = { method, body };

    if (body === undefined)
        delete bodyRequest.body;

    let response = await fetch(url, bodyRequest);

    return response;
}