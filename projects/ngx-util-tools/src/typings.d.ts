// declare module 'host' {
//   export interface Host {
//     protocol?: string;
//     hostname?: string;
//     pathname?: string;
//   }
//   export function parse(url: string, queryString?: string): Host;
// }
//! In the component or file that uses the library, add the following code:
// import * as host from 'host';
// const parsedUrl = host.parse('https://angular.io');
// console.log(parsedUrl.hostname);
