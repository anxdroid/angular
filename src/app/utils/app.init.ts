import {KeycloakService} from 'keycloak-angular';
import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: environment.keycloak,
          initOptions: {
            // onLoad: 'login-required',
            checkLoginIframe: false,
            // flow: "implicit",
          },
          //enableBearerInterceptor: true,
          enableBearerInterceptor: false,
          bearerExcludedUrls: [],
          loadUserProfileAtStartUp: false,
          bearerPrefix: 'Bearer',
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
