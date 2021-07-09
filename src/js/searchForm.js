import { randomInt } from "./utils";

/*----------------------------------------*\
  #search-bar 
\*----------------------------------------*/
export default class SearchForm{

    constructor(){
    // initilizing dom nodes 
     if(this._validateDomNodes()){
        this._render();
     }else{
         return;
     }
    }

    _validateDomNodes(){
        // dom caching search form 
        this.ipTracker = document.querySelector(".ip-tracker-wrapper")
        this.ipTrackerForm = this.ipTracker.querySelector(".ip-tracker__form");
        this.ipTrackerBtn = this.ipTracker.querySelector(".ip-tracker__btn");
        this.ipTrackerInput = this.ipTracker.querySelector(".ip-tracker__input");
        this.ipTrackerInfoList = this.ipTracker.querySelector(".ip-tracker__info");

        if (this.ipTracker && this.ipTrackerForm && 
            this.ipTrackerBtn && this.ipTrackerInfoList && this.ipTrackerInput){
            return true;
        }else{
            throw Error("required dom nodes are not available.");
        }
    }

    // bind events 
    _bindEnvents(){
        this.ipTrackerBtn.addEventListener('click', () => {
            this.ipTrackerBtn.classList.toggle("ip-tracker__btn--active");
            this.ipTrackerForm.classList.toggle("ip-tracker__form--active");
            this.ipTrackerInput.classList.toggle("ip-tracker__input--active");
            this.ipTrackerInfoList.classList.toggle("ip-tracker__info--active");
        });
    }
    // render method 
    _render(){
        this._bindEnvents();
   }

    // creating the map 
    _createMap({longitude=12,latitude=13}){

        // map configurations 
        let  map = L.map('ip-tracker__map', {
            zoom: 14,
            center:[longitude,latitude],
            worldCopyJump:true,
        });

       /* let fx = new L.PosAnimation();
        fx.run("ip-tracker__map", [300, 500], 0.5); */
       /*  map.setView([randomInt(),randomInt()]);
        map.flyTo([longitude,latitude]) */

        // location icon 
        let location = L.icon({
            iconUrl: './icon-location.svg',
            iconSize:     [47, 55], 
            iconAnchor:   [longitude, latitude], 
            popupAnchor:  [-30, 20],
            className: location,
            inertia: true,
            worldCopyJump:true,
        });

        L.marker([longitude,latitude], 
            {
            icon: location,
            alt: "loaction"
        }).addTo(map).bindPopup("we are here") 


        // binding a popup to the icon 

        // layer 
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{map}', 
        {map: 'bar', 
        zoom: 12,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        

        
    }

    
    update(state){
        this._createMap(state);
        console.log(state)
    }   


}