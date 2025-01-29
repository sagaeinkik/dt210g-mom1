import SlopeItem from "./SlopeItem"; 
import { Skislope } from "../assets/models/slope";
import "./ListCollection.scss";

const ListCollection = () => {
    //Lista
    const slopes: Skislope[] = [
        {
            name: "Röda rappet",
            difficulty: "Röd",
            verticalMeters: 447, 
            slopeLights: false
        }, 
        {
            name: "Paradisbacken", 
            difficulty: "Röd", 
            verticalMeters: 120, 
            slopeLights: true
        },
        {
            name: "Långsvängen",
            difficulty: "Blå",
            verticalMeters: 800,
            slopeLights: false
        },
        {
            name: "Lundsrappet", 
            difficulty: "Svart",
            verticalMeters: 454, 
            slopeLights: true
        }, 
        {
            name: "Ullådraget", 
            difficulty: "Blå",
            verticalMeters: 155,
            slopeLights: false
        },
        {
            name: "Slalombacken", 
            difficulty: "Svart", 
            verticalMeters: 331, 
            slopeLights: false
        },
        {
            name: "Skutskjutet", 
            difficulty: "Grön", 
            verticalMeters: 331,
            slopeLights: false
        }

    ];
  return (
    <div className="slope-wrapper">
        {/* Loopa igenom! */}
        {slopes.map((slope, index) => (
            <SlopeItem 
            key={index}
            {...slope}
            />
        ))}
        </div>
  )
}

export default ListCollection