# API-demo
an api demo using express.js and mongodb

--------------------------------------------------------
DESCRIPSION:
Design a REST API that will serve up a unique question each time the embed widget on
the publisher website calls it. After the embed has served up the question, make sure a
record of the result is stored in the database. Some questions will have right
and wrong answers.
a. Assume that each user already has a unique identifier (UUID) assigned to them
and it will be passed with each REST request.
b. Also assume that each site will have its own list of questions
c. Assume a user will always see a unique question as long as one exists. If a
unique question does not exist you are free to reset and start the list of questions
a user has seen again over
d. Questions MUST be stored in the Database. Manually entering them in the DB is
fine. 

A trivia is a question have two to four options with one of them is the correct answer. Example:
Which team won the 2017 super bowl?
Falcons
Patriots

A poll is an objective question have two to four options without a correct answer. Example:
What's your favorite car brand?
Nissan
Honda
Audi
BMW

A checkbox question is an objective question with up to ten options and people can choose
anything between one and ten options. There is no correct and wrong. Example:
What are the colors do you like?
Red
Blue
Yellow
Green
Black
Purple

A matrix question is an objective question that shows options in a matrix. A visitor can only pick
one of the available options, there is no right or wrong answer. Example:
Please tell us a bit about yourself?
Age/Gender Male Female
<18
18 to 35
35 to 55
> 55

--------------------------------------------------------
FUNCTION EXPLANATION

the api.js set up a api server using express.js, listening to incoming get and post requests

if get request at the root "/":
  set up connection to mongodb questions databse
    if the number of documents is small, get all document and return them in the response
    else get say 10 questions, mark down the last document id, next time send it with the get request, return the next 10 documents start from the last document id
  close the connection
 
 the client will send a post request with question type as parameter, for example "/trivia", the api server handle it by
  set up connection to mongodb responses databse
  insert this new object as document
  close the connection
  
 
