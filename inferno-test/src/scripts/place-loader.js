import * as http from 'http';

const DATA_POA_API_URL = 'http://datapoa.com.br/api/action/datastore_search?resource_id=93d6ac81-d5f1-4b25-9324-473cd4e977cb&limit=30';

const PlaceLoader = {
    load: ( callback ) => {
        http.get( DATA_POA_API_URL, ( response ) => {

            let body = '';

            response.on('data', (data) => {
                body += data;
            });

            response.on('end', () => {
                let places = JSON.parse(body).result.records || {};
                callback(places);
            });
        });
    }
};

export default PlaceLoader;