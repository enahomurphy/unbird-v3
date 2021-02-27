import decode from 'jwt-decode';

export interface UserPayload {
  userId: string;
  accountId?: string;
}

class TokenStorage {
  private key: string;

  constructor() {
    this.key = 'pp-token';
  }

  get payload(): UserPayload {
    try {
      const payload: UserPayload = this.token ? decode(this.token) : null;

      if (!payload.accountId) {
        return null;
      }

      return payload;
    } catch (_) {
      return null;
    }
  }

  get token(): string {
    return localStorage.getItem(this.key);
  }

  setKey(key: string): TokenStorage {
    this.key = key;
    return this;
  }

  setToken(token: string): TokenStorage {
    localStorage.setItem(this.key, token);
    return this;
  }

  static getItem(key: string): string {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return localStorage.getItem(key);
    }
  }

  clear(key?: string): void {
    if (key) {
      localStorage.removeItem(key);
    } else {
      localStorage.removeItem(this.key);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  clearAll(): void {
    localStorage.clear();
  }
}

const storage = new TokenStorage();

export { storage, TokenStorage };
