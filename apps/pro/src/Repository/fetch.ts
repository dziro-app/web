export class Fetch {
  base: string
  jwtToken: string | null

  constructor(url: string, jwtToken?: string) {
    this.base = url
    if (jwtToken) {
      this.jwtToken = jwtToken
    }
  }

  buildJsonHeader(contentType: string =  'application/json') {
    const headers = {
      'Content-Type': contentType,
    }
    if (this.jwtToken) {
      headers['Authorization'] = `Bearer ${this.jwtToken}`
    }
    return headers
  }

  processResponse = async (res: Response) => {
    const result = await res.json() 
    if(res.status >= 200 && res.status < 300) {
      return result
    }

    throw Error(JSON.stringify(result))
  }

  get(url: string, options: Object={}) {
    return fetch(`${this.base}${url}`, {
      headers: this.buildJsonHeader(),
      ...options
    }).then(this.processResponse)
  }

  post(url: string, payload:Object = {}) {
    return fetch(`${this.base}${url}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: this.buildJsonHeader(),
      credentials: "include",
      mode: "cors",
    }).then(this.processResponse)
  }

  patch(url: string, payload: Object = {}) {
    return fetch(`${this.base}${url}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: this.buildJsonHeader(),
    }).then(this.processResponse)
  }

  remove(url: string) {
    return fetch(`${this.base}${url}`, {
      method: 'DELETE',
      headers: this.buildJsonHeader(),
    }).then(this.processResponse)
  }
}