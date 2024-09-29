import { environment } from './environment';

export const servicesUrl = {
  serviceUrl: environment.serviceUrl,

  // AUTH
  authUrl: `${environment.serviceUrl}auth`,

  // USER
  userUrl: `${environment.serviceUrl}users`,

  // BOAT
  boatUrl: `${environment.serviceUrl}boats`

};
