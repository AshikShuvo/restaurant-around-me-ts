export class UserLocation{
    latitude:number;
    longitude:number;
    constructor(lat:number,lng:number){
        this.latitude=lat;
        this.longitude=lng;
    }

}

export class Restaurant{
    id:string;
    name:string;
    distance:number;
    location:Location;
    constructor(id:string,name:string,distance:number,location:any){
        this.id=id;
        this.name=name;
        this.distance=distance;
        this.location=new Location(location.lat,location.lng,location.formattedAddress)
    }
}
class Location{
    lat:number;
    lng:number;
    address:string;
    constructor(lat:number,lng:number,address:string[]){
        this.lat=lat;
        this.lng=lng;
        this.address=address.toString();
    }
}