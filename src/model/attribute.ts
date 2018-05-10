export class Attribute {
  private _name: string;
  private _datatype: string;
  private _value: string;
  private _durability: number;
  private _mutability: number;

  constructor(name: string, datatype: string, value: string, durability: number, mutability: number) {
    this._name = name;
    this._datatype = datatype;
    this._value = value;
    this._durability = durability;
    this._mutability = mutability;
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
