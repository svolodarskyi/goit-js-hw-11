const API_KEY = "46939525-73ecae044838d7dfbbfadb664";
const BASE_URL = "https://pixabay.com/api/"

function fetchData(key_word) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: key_word,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    })

    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        })
}

export default fetchData;