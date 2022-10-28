import type { Token, OauthRedirect } from "../Dtos/Session"
export interface Session {
  login: () => Promise<OauthRedirect>
  getToken: (via: string, code: string) => Promise<Token>
}