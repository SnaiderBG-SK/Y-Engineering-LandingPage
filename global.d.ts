type Messages = typeof import('./src/messages/en.json');
type esMxMessages = typeof import('./src/messages/es_MX.json');

declare interface IntlMessages extends Messages, esMxMessages {}