export default class Range<rangeType> {
  public rangeArray: rangeType[];
  public totalSum: number;
  public rangeCount: number;

  constructor(public start: rangeType, public end: rangeType) {
    this.validateParameters();

    this.rangeArray = [];
    this.totalSum = 0;
    this.rangeCount = 0;
  }
  private validateParameters() {
    if (!this.supportedTypes().some(type => type(this.start))) {
      throw new Error('Start type is not supported');
    }

    if (this.start > this.end) {
      throw new Error('Start must be less than or equal to end');
    }
  }
  private supportedTypes(): Function[] {
    return [
      (value: rangeType) => typeof value === 'number',
      (value: rangeType) => value instanceof Date,
    ];
  }

  public contains(value: rangeType): boolean {
    return this.start <= value && value <= this.end;
  }

  public toArray(): rangeType[] {
    if (this.rangeArray.length) return this.rangeArray;

    if (typeof this.start === 'number') {
      this.rangeArray = this.toArrayNumber();
    } else {
      this.rangeArray = this.toArrayDate();
    }

    return this.rangeArray;
  }

  private toArrayNumber(): rangeType[] {
    const array: rangeType[] = [];
    const start = this.start as unknown as number;
    const end = this.end as unknown as number;

    for (let i = start; i <= end; i++) {
      array.push(i as unknown as rangeType);
    }
    return array;
  }

  private toArrayDate(): rangeType[] {
    const start = (this.start as unknown as Date).getTime();
    const end = (this.end as unknown as Date).getTime();

    const array: rangeType[] = [];

    for (let i = start; i <= end; i += 1) {
      array.push(new Date(i) as unknown as rangeType);
    }

    return array;
  }

  public toString(): string {
    return `${this.start}..${this.end}`;
  }

  public sum(): number {
    if (this.totalSum) return this.totalSum;

    if (typeof this.start !== 'number') {
      throw new Error('Start type is not supported');
    }

    for (const value of this.toArray() as unknown as number[]) {
      this.totalSum += value;
    }
    return this.totalSum;
  }

  public count(): number {
    if (this.rangeCount) return this.rangeCount;

    this.rangeCount = this.toArray().length;
    return this.rangeCount;
  }
}
