import React from 'react';
const planets = [
    {
        "id": "5b7aea183bf8367b5476c9e6",
        "name": "DOLORE",
        "isActive": true,
        "wealth": "$64,757,168,235.05",
        "age": 784890749,
    },
    {
        "id": "5b7aea187ca55f9ce1c23845",
        "name": "ELIT",
        "isActive": true,
        "wealth": "$315,977,512,510.90",
        "age": 659095575,
    },
    {
        "id": "5b7aea1884105003d46450a9",
        "name": "EXCEPTEUR",
        "isActive": true,
        "wealth": "$240,577,666,383.70",
        "age": 266767889,
    },
    {
        "id": "5b7aea181b1ad23a7dd97378",
        "name": "EURATUS",
        "isActive": true,
        "wealth": "$288,965,195,305.90",
        "age": 577478057,
    },
    {
        "id": "5b7aea18c0ca6969d793bf1e",
        "name": "LABORIS",
        "isActive": true,
        "wealth": "$115,087,829,552.91",
        "age": 205891012,
    },
    {
        "id": "5b7aea182007ede9f8ccb27e",
        "name": "OFFICIA",
        "isActive": false,
        "wealth": "$249,686,953,867.76",
        "age": 264638419,
    },
    {
        "id": "5b7aea1853ec041bc301ede5",
        "name": "ESTRA",
        "isActive": false,
        "wealth": "$344,884,597,724.36",
        "age": 89802163,
    },
];
class PlanetApi extends React.Component {
    constructor(props) {
        super(props);
        this.props.planets = {planets};   
    }
    render() {
        return (
          <div>
            {this.props.planets}
          </div>                  
        );
      }
}
export default PlanetApi;