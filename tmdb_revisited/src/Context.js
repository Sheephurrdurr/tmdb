const baseUrl = "https://api.themoviedb.org/3/";
const key = "?api_key=78c695179eec555413ae02fe9e06cf05";

export const get = async (endpoint, id) => {
    const result = await fetch(baseUrl + endpoint + "/" + id + key, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    });

    return result.json();
}

export const search = async (endpoint, query) => {
    const result = await fetch(baseUrl + endpoint + key + "&" + query, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    });
    return result.json();
}

export const getAll = async (endpoint) => {
    const result = await fetch(baseUrl + endpoint + key, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    });

    return result.json();
}
