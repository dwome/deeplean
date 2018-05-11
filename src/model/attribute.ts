export class Attribute {
  private _name: string;
  private _datatype: string;
  private _value: string;
  private _durability: number;
  private _mutability: number;

  constructor() {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get datatype(): string {
    return this._datatype;
  }

  set datatype(value: string) {
    this._datatype = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get durability(): number {
    return this._durability;
  }

  set durability(value: number) {
    this._durability = value;
  }

  get mutability(): number {
    return this._mutability;
  }

  set mutability(value: number) {
    this._mutability = value;
  }




}
