type State = {
  firstName: string;
  lastName: string;
};

type keyofState = keyof State;

export class Store {
  private readonly state?: State;

  constructor() {
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  setValue(key: keyofState, value: string) {
    if (this.state) {
      this.state[key] = value;
    }
  }

  getValue(key: keyofState): string | undefined {
    if (this.state) {
      return this.state[key];
    }

    return undefined;
  }
}
