type State = {
  firstName: string;
  lastName: string;
};

type keyofState = keyof State;

export class Store {
  static getStore() {
    if (this.instance === undefined) {
      this.instance = new Store();
    }

    return this.instance;
  }

  private static instance?: Store = undefined;

  private readonly state?: State;

  private constructor() {
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
