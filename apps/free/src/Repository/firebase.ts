import { initializeApp, type FirebaseOptions} from "firebase/app"
import { getAnalytics, logEvent } from "firebase/analytics"

import type { Analytics } from "data/Repository/analytics"


const env = import.meta.env

export class FireBaseAnalytics implements Analytics {
  app
  analytics
  
  constructor() {
    const config:FirebaseOptions = {
      apiKey: env.VITE_FIREBASE_API_KEY as string,
      authDomain: env.VITE_FIREBASE_AUTH_DOMAIN as string,
      projectId: env.VITE_FIREBASE_PROJECT_ID as string,
      appId: env.VITE_FIREBASE_APP_ID as string,
      measurementId: env.VITE_FIREBASE_MEASUREMENET_ID as string
    }

    try {
      this.app = initializeApp(config)
      this.analytics = getAnalytics(this.app)
    } catch(e) {
      console.error(e)
    }
  }
  
  logEvent = (name: string, params: object): void => {
    logEvent(this.analytics, name, params)
  }
}