export class Element {
  description: string[];
  isLend: boolean;

  constructor(public titre: string) {
    this.isLend = false;
  }
}
