class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=a252f868d509fb96c3697d881b86055e';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        return this.getResource(
            `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
        );
    };

    getCharacter = async (id) => {
        return this.getResource(
            `${this._apiBase}characters/${id}?${this._apiKey}`
        );
    };
}

export default MarvelService;
