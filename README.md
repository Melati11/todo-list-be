# API TODOLIST
### User Terms
| Schema | Type | 
| ------ | ------ |
| name | `String` |
| username | `String` |
| email | `String` |
| password | `String` |

### Register
```sh
POST auth/register
```
| Schema | terms | 
| ------ | ------ |
| name | `Require` |
| username | `Require` |
| email | `Require` |
| password | `Require` |

### Login
```sh
POST auth/register
```
| Schema | terms | 
| ------ | ------ |
| username | `Require` |
| email | `Require` |
| password | `Require` |

### Todo Terms
| Schema | type | 
| ------ | ------ |
| value | `String` |
| status | `Boolean` |
| userID | `mongoose.ObjectId` |

### Create Todo
```sh
POST /todos
```
| Schema | terms |                     
| ------ | ------ |
| value | `Require` |
| status | `Require` |
| userID | `Require` |

| Headers | type | 
| ------ | ------ |
| authorization | `Bearer token` |

### Get All Todo
```sh
GET /todos
```
| Headers | type | 
| ------ | ------ |
| authorization | `Bearer token` |

### Get Todo By Id
```sh
GET /todos/:id
```
| Headers | type | 
| ------ | ------ |
| authorization | `Bearer token` |

### Edit Todo
```sh
PUT /todos/:id
```
| Headers | type | 
| ------ | ------ |
| authorization | `Bearer token` |

### Delete Todo By Id
```sh
DELETE /todos/:id
```
| Headers | type | 
| ------ | ------ |
| authorization | `Bearer token` |

### Delete All Todo
```sh
POST /todos/delete_all
```
| Headers | type | 
| ------ | ------ |
| authorization | `Bearer token` |
