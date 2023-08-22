// Use type safe message keys with `next-intl`
type Messages = typeof import('./src/translations/en.json')
type IntlMessages = Messages
