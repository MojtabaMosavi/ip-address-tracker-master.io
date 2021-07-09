
/*----------------------------------------*\
  #infoList
\*----------------------------------------*/
export default class InfoList{

    constructor(){
        if(this._validateDomNodes()){
            return 
        } else {
            return;
        }
    }

    // validating dom nodes 
    _validateDomNodes(){
        this.ipTrackerInfoList = document.querySelector(".ip-tracker__info");
        this.ipTrackerIpAddress = this.ipTrackerInfoList.querySelector(".ip-tracker__ip-address");
        this.ipTrackerLocation = this.ipTrackerInfoList.querySelector(".ip-tracker__location");
        this.ipTrackerTimeZone = this.ipTrackerInfoList.querySelector(".ip-tracker__timezone");
        this.ipTrackerIspProvider = this.ipTrackerInfoList.querySelector(".ip-tracker__isp-provider");

        if(this.ipTrackerInfoList && this.ipTrackerIpAddress && this.ipTrackerLocation 
            && this.ipTrackerTimeZone && this.ipTrackerIspProvider){
                return true
            }else{
                throw new Error ("Required dom nodes are not defined")
            }

    }

    _updateDomNodes({ip,isp,country,city,region,longitude,latitude,timezone}){
        this.ipTrackerIpAddress.textContent = ip;
        this.ipTrackerLocation.textContent = country;
        this.ipTrackerTimeZone.textContent = timezone;
        this.ipTrackerIspProvider.textContent = isp;
        
    }   


    _render(state){
        this._updateDomNodes(state);
    }

    update(state){
        this._render(state);
     }

}
