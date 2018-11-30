import ToggleQuestion from "../models/ToggleQuestion";
import ToggleOption from "../models/ToggleOption";

let questionStatement = "An animal cell contains:";
export const demoToggleQuestion =
    new ToggleQuestion(questionStatement,
        new ToggleOption("Cell wall", "Ribosomes", 1),
        new ToggleOption("Cytoplasm", "Chloroplast", 0),
        new ToggleOption("Partially permeable membrane", "Impermeable membrane", 0),
        new ToggleOption("Cellulose", "Mitochondria", 1)
    );