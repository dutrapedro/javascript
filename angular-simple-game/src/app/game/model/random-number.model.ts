export class RandomNumber {
    public random: number;
    public isEven: boolean;

    constructor(random: number) {
        this.random = random;
        this.isEven = this._isEven(random);
    }

    _isEven(random: number) {
        return random % 2 === 0 ? true : false;
    }
}