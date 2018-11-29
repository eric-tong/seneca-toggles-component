import ToggleOption from "./ToggleOption";

export default class ToggleQuestion {
    statement: string;
    options: ToggleOption[];

    constructor(statement: string, ...options: ToggleOption[]) {
        this.statement = statement;
        this.options = options;
    }
}