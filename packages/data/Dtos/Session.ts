export type OauthRedirect = {
  redirect: string
}

export type User = {
  username: string // User name text
  profile: string // Profile image
  id: string // User id from token
}

export type Token = {
  access_token: string,
  user: User
}