import type { OauthRedirect, Token } from "data/Dtos/Session";
import type {Session} from "data/Repository/session";
import { Fetch } from "./fetch";

export class SessionRepo extends Fetch implements Session {
  constructor(base: string) {
    super(base)
  }

  login = (): Promise<OauthRedirect> => {
    return this.get('/auth/spotify') as Promise<OauthRedirect>
  };

  getToken = (via: string, code: string): Promise<Token> => {
    return this.post(`/auth/${via}/callback`, {code}) as Promise<Token>
  };

  refreshToken = (): Promise<Token> => {
    return this.post(`/auth/refresh`) as Promise<Token>
  };

  clearToken = (): Promise<Object> => {
    return this.post(`/auth/logout`) as Promise<Object>
  }

}