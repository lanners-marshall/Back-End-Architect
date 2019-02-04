# Back-End-Architect
## Brooks Poltl

### **Register a user**
*method url*: `/api/register`

*http method*: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `username`     | String | Yes      | Must be unique           |
| `fullName`     | String | Yes      |                          |
| `password`     | String | Yes      |                          |
| `email`        | String | No       |                          |
| `userImgUrl`   | String | No       |                          |

#### Example
```
  {
    username: 'brooks',
    password: '1234',
    fullName: 'Brooks Poltl',
    email: 'bpoltl1@gmail.com',
    userImgUrl: 'something.jpg'
  }
  ```
#### Response
##### 200 (ok)
> correctly executed endpoint
##### 400 (Bad Request)
```
  {
    errorMessage: 'missing ${itemMissing}'
  }
  ```
