import Inferno from 'inferno';
import Component from 'inferno-component';
import loadGoogleMapsAPI from 'load-google-maps-api';
import PlaceLoader from '../scripts/place-loader';

class GoogleMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultMapZoom: 15,
            defaulMapCenter: {
                lat: -30.0354421, 
                lng: -51.227202
            },
            defaultLatLng: 0.0
        };
    }

    createMap(gMapsApi) {
        return new gMapsApi.Map(document.getElementById('map'), {
                zoom: this.props.zoom || this.state.defaultMapZoom,
                center: this.props.center || this.state.defaulMapCenter
            });
    }

    setupMarker(gMapsApi, map, place) {
        let lat = parseFloat(place.LATITUDE) || this.state.defaultLatLng;
        let lng = parseFloat(place.LONGITUDE) || this.state.defaultLatLng;
        let latlng = {lat: lat, lng: lng};
        new gMapsApi.Marker({
            position: latlng,
            map: map,
            title: place.LOGRADOURO
        });
    }

    placeMarkOnMap(map, gMapsApi) {
        PlaceLoader.load( (places) => {
            places.map( (place) => {
                return this.setupMarker(gMapsApi, map, place);
            });
        });
    }

    componentDidMount() {
        loadGoogleMapsAPI({ key: 'AIzaSyCvCcB2PYEG6-N4BWC8js3KugRy28LBshc' }).then( (googleMapsApi) => {
            let map = this.createMap(googleMapsApi);
            this.placeMarkOnMap(map, googleMapsApi);
            
        }).catch( (err) => {
            console.error(err);
        });
    }

    render() {
        return (
            <div id="map"></div>
        );
    }
}

export default GoogleMap;