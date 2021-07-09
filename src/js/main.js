import SearchForm from "./searchForm.js";
import Observer from "./Observer.js";
import InfoList from "./Infolist.js";
import {validateResponse,logData,logError,jsonify} from "./utils.js";

const App = (function(){
    document.addEventListener("DOMContentLoaded", () => {
        // variables
            const url = "https://geo.ipify.org/api/v1?apiKey=at_ECLl7Ced4VodU7ViC2JH6JFpnaNzx";
        // observers 
        const searchForm = new SearchForm();
        const infoList = new InfoList(); 

        // subscribing 
        const observer = new Observer();
        observer.subscribe(searchForm);
        observer.subscribe(infoList)
        const testData = {
            city: "Södermalm",
            country: "SE",
            ip: "82.183.60.238",
            isp: "Ownit Broadband AB",
            latitude: 18.07577,
            longitude: 59.31278,
            region: "Stockholm County",
            timezone: "+02:00",}
        function _init(){
            /* _getData(); */
            observer.notify(testData)
        }

        _init()

        // api call 
         function _getData() {
            fetch("https://geo.ipify.org/api/v1?apiKey=at_ECLl7Ced4VodU7ViC2JH6JFpnaNzx")
            .then(validateResponse)
            .then(jsonify)
            .then(data => {
                const {ip,isp,location:{country,city,region,timezone,lat:longitude,lng:latitude}} = data;
                observer.notify({ip,isp,country,city,region,longitude,latitude,timezone});
            })
            .catch(logError)

        }
                


    })
})();

