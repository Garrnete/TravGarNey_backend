## TravGarNey ✈️🌏📝

## Project Overview:

A travel and journaling web app designed to help users to plan, record and relive their adventures. Users can create trips, upload photos and write journal entries to document their travel experiences turning memories into a personalized digital diary. Each trip becomes a digital keepsake that combines trip planning with story telling.

## Project Purpose:

TravGarNey was created to help travelers:

Organize trip details such as destinations, budgets and dates.

Record daily experiences through text and photos.

Reflect on their adventures in a private and digital journal.

From a technical perspective, this project demonstrates proficiency in full-stack web development, including:

Frontend design with React and React Router.

State management using React Hooks.

RESTful API creation with Express.

Data persistence using MongoDB.

Full C.R.U.D. capabilities (Create, Read, Update and Delete).


## 🧭 TravGarNey API Documentation
 ### Base URL
   http://localhost:3000/api

```  
✈️ Trips Routes
Method	Endpoint	Description	Request Body	Response
GET	/trips	Get all trips	–	[ {Trip}, ... ]
GET	/trips/:id	Get a single trip	–	{Trip}
POST	/trips	Create a new trip	{ destination, startDate, endDate, budget?, notes?, coverImage? }	{ newTrip }
PUT	/trips/:id	Update a trip	{ any field }	{ updatedTrip }
DELETE	/trips/:id	Delete a trip	–	{ message: "Trip deleted successfully" }
```

```
🧳 Journal Routes
Method	Endpoint	Description	Request Body	Response
GET	/journals	Get all journal entries	–	[ {Journal}, ... ]
GET	/journals?tripId=<id>	Get journals for a specific trip	–	[ {Journal}, ... ]
POST	/journals	Create a new journal entry	{ tripId, title, content, photo? }	{ newJournal }
PUT	/journals/:id	Update a journal entry	{ any field }	{ updatedJournal }
DELETE	/journals/:id	Delete a journal entry	–	{ message: "Journal deleted successfully" }
```

```
⚠️ Error Responses
Code	Message
400	Missing required fields
404	Resource not found
500	Server error
```



https://github.com/Garrnete/TravGarNey_frontend.git