class PlanetApi{
    constructor(rawData){
        this.rawData = rawData;
        console.log(this.rawData);
    }
    mapToObject(arr){
        return arr.reduce((acc, curr)=>{
            acc[curr.id] = curr;
            return acc;
        },{});
    }
    getPlanets(){
        return this.mapToObject(this.rawData.planets);
    }
}
export default PlanetApi;