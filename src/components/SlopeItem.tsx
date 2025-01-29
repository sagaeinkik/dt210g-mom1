import { Skislope } from "../assets/models/slope";


const SlopeItem = ({ name, verticalMeters, difficulty, slopeLights }: Skislope) => {
    // Typdefinition för svårighetsnivå
    interface DifficultyLevel {
        sv: string;
        en: string;
    }
    
    //Funktion för att returnera svårighetsgraden
    const getDifficulty = (difficulty: string): DifficultyLevel => {
        switch (difficulty.toLowerCase()) {
            case "blå":
                return {sv: "Lätt", en: "easy"};
            case "röd":
                return {sv: "Medelsvår", en: "medium"};
            case "svart":
                return {sv: "Svår", en: "difficult"};
            case "grön":
                return {sv: "Väldigt lätt", en: "supereasy"};
            default:
                return { sv: "Oklart", en: "unknown"};
        }
    }

    //Lagra svårighet så man kan komma åt både engelska och svenska
    const difficultyLvl = getDifficulty(difficulty);

  return (
    <div className="slope-card"> 
        <span className={difficultyLvl.en}></span>
        <h2>{ name }</h2>
        <p>Fallhöjdsmeter: { verticalMeters }</p>
        <p>Svårighet: { difficultyLvl.sv }</p>
        <p>Backbelysning: { slopeLights ? "Ja" : "Nej"}</p>
    </div>
  )
}

export default SlopeItem