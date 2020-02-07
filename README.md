# Timestamp-Microservice

App Link: [Timestamp-Microservice](https://timestamp-microservice7.herokuapp.com/)

## Building a Timestamp Microservice

:one: In this a user can pass a URL parameter and it will check wether the entered URL parameter contains a UNIX timestamp or a regular date (ie February 05, 2020 or Feb 05, 2020, with or without commas).

:two: If it does, it returns both the Unix timestamp and the utc form of the date.

:three: If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example Usage:

`Timestamp-Microservice/api/timestamp/2020-02-05`

`Timestamp-Microservice/api/timestamp/1580860800000`


### Example Output:

`{"unix":1580860800000,"utc":"Wed, 05 Feb 2020 00:00:00 GMT"}`

## Technologies used:

:one: Node

:two: Express
