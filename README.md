
## Setup instructions

`yarn install`

`yarn start`


### Test runner

`yarn test`

### Production build

`yarn run build`


---

## Continuous delivery plan

```
commit --> github
  ^           |
  |           V
  |       +------------------------+
  |       | CircleCI, CodeClimate  +--Yes---> build & deploy to staging/prod server
  |       |  - tests pass?         |
  |       |  - adequate coverage?  +--No--+
  |       +------------------------+      |
  |                                       V
  +-------------------------- dev communication channel
```

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
