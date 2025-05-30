export abstract class Animal {
    constructor(private _name: string, private _type: string, private _color: string) {
        this.name = _name;
        this.type = _type;
        this.color = _color;
    }

    abstract speak(): void;

    showDescription(): void {
        console.log(`${this._name} es un ${this._type} con color ${this._color}`)
    }

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set type(type: string) {
        this._type = type;
    }

    get type(): string {
        return this._type;
    }

    set color(color: string) {
        this._color = color;
    }

    get color(): string {
        return this._color;
    }
}