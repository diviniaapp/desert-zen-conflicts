/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams:
        | {
            pathname: Router.RelativePathString;
            params?: Router.UnknownInputParams;
          }
        | {
            pathname: Router.ExternalPathString;
            params?: Router.UnknownInputParams;
          }
        | { pathname: `/_sitemap`; params?: Router.UnknownInputParams }
        | {
            pathname: `${'/(tabs)'}/discover` | `/discover`;
            params?: Router.UnknownInputParams;
          }
        | {
            pathname: `${'/(tabs)'}/favorites` | `/favorites`;
            params?: Router.UnknownInputParams;
          }
        | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams }
        | {
            pathname: `${'/(tabs)'}/profile` | `/profile`;
            params?: Router.UnknownInputParams;
          }
        | { pathname: `/+not-found`; params: Router.UnknownInputParams & {} }
        | {
            pathname: `/category/[id]`;
            params: Router.UnknownInputParams & { id: string | number };
          }
        | {
            pathname: `/meditation/[id]`;
            params: Router.UnknownInputParams & { id: string | number };
          };
      hrefOutputParams:
        | {
            pathname: Router.RelativePathString;
            params?: Router.UnknownOutputParams;
          }
        | {
            pathname: Router.ExternalPathString;
            params?: Router.UnknownOutputParams;
          }
        | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams }
        | {
            pathname: `${'/(tabs)'}/discover` | `/discover`;
            params?: Router.UnknownOutputParams;
          }
        | {
            pathname: `${'/(tabs)'}/favorites` | `/favorites`;
            params?: Router.UnknownOutputParams;
          }
        | {
            pathname: `${'/(tabs)'}` | `/`;
            params?: Router.UnknownOutputParams;
          }
        | {
            pathname: `${'/(tabs)'}/profile` | `/profile`;
            params?: Router.UnknownOutputParams;
          }
        | { pathname: `/+not-found`; params: Router.UnknownOutputParams & {} }
        | {
            pathname: `/category/[id]`;
            params: Router.UnknownOutputParams & { id: string };
          }
        | {
            pathname: `/meditation/[id]`;
            params: Router.UnknownOutputParams & { id: string };
          };
      href:
        | Router.RelativePathString
        | Router.ExternalPathString
        | `/_sitemap${`?${string}` | `#${string}` | ''}`
        | `${'/(tabs)'}/discover${`?${string}` | `#${string}` | ''}`
        | `/discover${`?${string}` | `#${string}` | ''}`
        | `${'/(tabs)'}/favorites${`?${string}` | `#${string}` | ''}`
        | `/favorites${`?${string}` | `#${string}` | ''}`
        | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}`
        | `/${`?${string}` | `#${string}` | ''}`
        | `${'/(tabs)'}/profile${`?${string}` | `#${string}` | ''}`
        | `/profile${`?${string}` | `#${string}` | ''}`
        | {
            pathname: Router.RelativePathString;
            params?: Router.UnknownInputParams;
          }
        | {
            pathname: Router.ExternalPathString;
            params?: Router.UnknownInputParams;
          }
        | { pathname: `/_sitemap`; params?: Router.UnknownInputParams }
        | {
            pathname: `${'/(tabs)'}/discover` | `/discover`;
            params?: Router.UnknownInputParams;
          }
        | {
            pathname: `${'/(tabs)'}/favorites` | `/favorites`;
            params?: Router.UnknownInputParams;
          }
        | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams }
        | {
            pathname: `${'/(tabs)'}/profile` | `/profile`;
            params?: Router.UnknownInputParams;
          }
        | `/+not-found`
        | `/category/${Router.SingleRoutePart<T>}`
        | `/meditation/${Router.SingleRoutePart<T>}`
        | { pathname: `/+not-found`; params: Router.UnknownInputParams & {} }
        | {
            pathname: `/category/[id]`;
            params: Router.UnknownInputParams & { id: string | number };
          }
        | {
            pathname: `/meditation/[id]`;
            params: Router.UnknownInputParams & { id: string | number };
          };
    }
  }
}
