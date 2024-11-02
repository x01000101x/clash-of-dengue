<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


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

