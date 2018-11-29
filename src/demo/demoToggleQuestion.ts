import ToggleQuestion from "../models/ToggleQuestion";
import ToggleOption from "../models/ToggleOption";

let questionStatement = "An animal cell contains:";
export const demoToggleQuestion =
    new ToggleQuestion(questionStatement,
        new ToggleOption("Cell wall", "Ribosomes"),
        new ToggleOption("Cytoplasm", "Chloroplast"),
        new ToggleOption("Partially permeable membrane", "Impermeable membrane"),
        new ToggleOption("Cellulose", "Mitochondria")
    );