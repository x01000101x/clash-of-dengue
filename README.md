<p align="center"><a href="https://clashofdengue" target="_blank"><img src="https://clashofdengue.com/img/logo.067e1f8a.png" width="400" alt="COD Logo"></a></p>

## About Clash Of Dengue

Nice app built by nice people.

### API LISTS

1. Register :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`    | `/api/auth/register`                    | Register User.                          |

#### Request

```
{
    "name": "leonard deniel damanik",
    "username": "leo69",
    "school_name": "tester",
    "password": "12345678"
}
```

#### Response
```
{
    "status": true,
    "message": "User Created Successfully",
    "token": "4|HEtQ5W82RESCqSfpfLN1iQBLOCt9AX016jbWFJWZe74bf6fe"
}
```


2. Login :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`    | `/api/auth/login`                    | Login User.                          |

#### Request

```
{
    "username": "leo69",
    "password": "12345678" 
}
```

#### Response
```
{
    "status": true,
    "message": "Berhasil Login",
    "token": "5|M3NfxofxiowmXSFW5he4nJh6hzHr7p598YUSSZM1e8ad0326"
}
```

3. Logout :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`    | `/api/auth/logout`                    | Logout User.                          |

#### Request

```
By Auth Token dari login
```

#### Response
```
{
    "message": "Berhasil Logout"
}
```

4. GET Scores :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/score`                             | Get User Scores.                          |


#### Response
```
{
    "status": true,
    "response": [
        {
            "id": 1,
            "score_id": "1",
            "correct_answer": "10",
            "false_answer": "11",
            "total_score": "0",
            "rank": null,
            "created_at": "2024-11-01T10:05:43.000000Z",
            "updated_at": "2024-11-02T05:42:26.000000Z"
        },
        {
            "id": 2,
            "score_id": "2",
            "correct_answer": "0",
            "false_answer": "0",
            "total_score": "0",
            "rank": null,
            "created_at": "2024-11-02T04:38:03.000000Z",
            "updated_at": "2024-11-02T04:38:03.000000Z"
        },
        {
            "id": 3,
            "score_id": "3",
            "correct_answer": "0",
            "false_answer": "0",
            "total_score": "0",
            "rank": null,
            "created_at": "2024-11-02T08:37:45.000000Z",
            "updated_at": "2024-11-02T08:37:45.000000Z"
        }
    ]
}
```

5. GET Score By Id :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/score/{id}`                    | Get specific User score.                         |


#### Response
```
{
    "status": true,
    "response": {
        "id": 1,
        "score_id": "1",
        "correct_answer": "10",
        "false_answer": "11",
        "total_score": "0",
        "rank": null,
        "created_at": "2024-11-01T10:05:43.000000Z",
        "updated_at": "2024-11-02T05:42:26.000000Z"
    }
}
```

6. Update Score :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`    | `api/score/{id}`                    | Update score pada saat user jawab salah atau benar. is_correct = "Y" jika benar, "N" jika salahs                         |

#### Request

```
{
    "score": "5",
    "is_correct": "N"
}
```

#### Response
```
{
    "status": true,
    "response": {
        "id": 1,
        "score_id": "1",
        "correct_answer": "10",
        "false_answer": "12",
        "total_score": "0",
        "rank": null,
        "created_at": "2024-11-01T10:05:43.000000Z",
        "updated_at": "2024-11-02T08:54:04.000000Z"
    }
}
```

7. GET Users :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/user`                    | GET Users info                   |


#### Response
```
{
    "status": true,
    "response": [
        {
            "id": 1,
            "name": "leonard",
            "username": "leo999",
            "school_name": "tester",
            "type": null,
            "session": null,
            "image": null,
            "email": null,
            "email_verified_at": null,
            "created_at": "2024-11-01T10:05:42.000000Z",
            "updated_at": "2024-11-01T10:05:42.000000Z"
        },
        {
            "id": 2,
            "name": "leonard",
            "username": "leo69",
            "school_name": "tester",
            "type": null,
            "session": null,
            "image": null,
            "email": null,
            "email_verified_at": null,
            "created_at": "2024-11-02T04:38:02.000000Z",
            "updated_at": "2024-11-02T04:38:02.000000Z"
        },
        {
            "id": 3,
            "name": "leonard deniel damanik",
            "username": "leo7",
            "school_name": "tester",
            "type": null,
            "session": null,
            "image": null,
            "email": null,
            "email_verified_at": null,
            "created_at": "2024-11-02T08:37:44.000000Z",
            "updated_at": "2024-11-02T08:37:44.000000Z"
        }
    ]
}
```

8. GET Users By Id :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/user/{id}`                    | GET Users By Id info                   |


#### Response
```
{
    "status": true,
    "response": {
        "id": 1,
        "name": "leonard",
        "username": "leo999",
        "school_name": "tester",
        "type": null,
        "session": null,
        "image": null,
        "email": null,
        "email_verified_at": null,
        "created_at": "2024-11-01T10:05:42.000000Z",
        "updated_at": "2024-11-01T10:05:42.000000Z"
    }
}
```

9. GET Questions :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/question`                    | GET Questions info                   |


#### Response
```
{
    "status": true,
    "response": [
        {
            "id": 1,
            "category_id": "1",
            "session_id": "1",
            "question": "Hello how are you?",
            "option_a": "A. ABC",
            "option_b": "B. ABC",
            "option_c": "C. ABC",
            "option_d": "D. ABC",
            "option_e": "E. ABC",
            "answer": "A",
            "point": "10",
            "time": "12",
            "created_at": "2024-11-01T10:11:08.000000Z",
            "updated_at": "2024-11-01T10:11:08.000000Z"
        }
    ]
}
```

10. GET Questions By Id :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/question/{id}`                    | GET Question By Id info                   |


#### Response
```
{
    "status": true,
    "response": {
        "id": 1,
        "category_id": "1",
        "session_id": "1",
        "question": "Hello how are you?",
        "option_a": "A. ABC",
        "option_b": "B. ABC",
        "option_c": "C. ABC",
        "option_d": "D. ABC",
        "option_e": "E. ABC",
        "answer": "A",
        "point": "10",
        "time": "12",
        "created_at": "2024-11-01T10:11:08.000000Z",
        "updated_at": "2024-11-01T10:11:08.000000Z"
    }
}
```

11. POST Questions :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`    | `/api/question`                    | POST Question                 |

#### Request

```
{
    "category_id": "2",
    "session_id": "2",
    "question": "Heyya fam?",
    "option_a": "A. ABC",
    "option_b": "B. ABC",
    "option_c": "C. ABC",
    "option_d": "D. ABC",
    "option_e": "E. ABC",
    "answer": "B",
    "point": "5",
    "time": "5"
}
```

#### Response
```
{
    "status": true,
    "message": "Question Created Successfully",
    "data": {
        "category_id": "2",
        "session_id": "2",
        "question": "Heyya fam?",
        "option_a": "A. ABC",
        "option_b": "B. ABC",
        "option_c": "C. ABC",
        "option_d": "D. ABC",
        "option_e": "E. ABC",
        "answer": "B",
        "point": "5",
        "time": null,
        "updated_at": "2024-11-02T09:06:08.000000Z",
        "created_at": "2024-11-02T09:06:08.000000Z",
        "id": 1
    }
}
```

12. Edit User :

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `PATCH`    | `/api/user`                    | Edit User (if there is no value request dont send the key)                 |

#### Request

```
{
    "id": "1",
    "name": "leo gantenk",
    "username": "leo6969",
    "email": "leo@gmail.com",
    "school_name": "SMK 3 JOMOKERTO SELATAN",
    "password": "12345678"
}
```

#### Response
```
{
    "status": true,
    "response": {
        "id": 1,
        "session_id": "1",
        "name": "leo gantenk",
        "username": "leo6969",
        "school_name": "SMK 3 JOMOKERTO SELATAN",
        "type": null,
        "session": null,
        "image": null,
        "email": leo@gmail.com,
        "email_verified_at": null,
        "created_at": "2024-11-03T00:15:33.000000Z",
        "updated_at": "2024-11-04T04:01:18.000000Z"
    }
}
```

