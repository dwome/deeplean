export class Entity {
  private _name: string;
  private _potency: number;

  constructor() {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get potency(): number {
    return this._potency;
  }

  set potency(value: number) {
    this._potency = value;
  }
}
