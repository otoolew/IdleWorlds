import PlanetApi from '../dataApi/PlanetApi';
import {data} from '../data/planetsData.json';

const api = new PlanetApi(data);
describe('PlanetApi',()=>{
    it('exposes planets as an object', ()=>{
        const planets = api.getPlanets();
        const planetId = data.planets[0].id;
        const planetName = data.planets[0].planets.name;
        expect(planets).toHaveProperty(planetId);
        expect(planets.name).toBe(planetName);
    });
});