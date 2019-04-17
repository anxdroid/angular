import {KeycloakConfig} from "keycloak-angular";

const keycloakConfig: KeycloakConfig = {
  url: 'https://idp.app-dev.infn.it/auth',
  realm: 'infn',
  clientId: 'infn-portal'
};

export const environment = {
  production: true,
  YOUTUBE_API_KEY: 'AIzaSyCtqVahdJySRfiS5RzubU-B0JwugsEIkSo',
  YOUTUBE_API_URL: 'https://www.googleapis.com/youtube/v3',
  keycloak: keycloakConfig,
};
