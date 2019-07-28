## Api to check holidays in Mexico and US

### Request
`http://localhost:5000/holiday/{year}/{country}/{month}`

|Parameters|value|
|-------------|----------|
|year|2019, 2020, 2021|
|country|US, MX|
|month|01, 02, 03..., 12|


### Response
|||
|-------------|----------|
|date|The date|
|name|English name|

### Example
`http://localhost:5000/holiday/2019/US/11`

```json
		
[
    {
        "date": "2019-11-11",
        "name": "Veterans Day"
    },
    {
        "date": "2019-11-28",
        "name": "Thanksgiving Day"
    }
]
		
```

## Availible scripts

`npm install`
install all required packages

`npm start`
Start the app in development mode

#### It is necessary to have mongoDB installed
[mongoDB installer link](https://www.mongodb.com/download-center/community)


