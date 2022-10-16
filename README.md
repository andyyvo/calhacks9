# CalHacks 9.0 -- Moodz

Team: Andy Vo, Natalie Chan, Tyler Wu, Ning Zhang

## What is Moodz?
Moodz is a web-application built on **React.js/TypeScript**, **Flask/Python**, and **Google Firebase** that allows UC Berkeley students to see what the vibe is on campus. Berkeley students are able to associate with a vibe by choosing from a selection of words that correspond to its respective mood alongside with their associated department for data visualization purposes. After the user sends in their mood for the session, they are able to see the broader Berkeley campus mood by hovering over locations of buildings on campus that correspond to the school/department. Furthermore, students can also get a measurement of Berkeley campus's overall vibe.

## What inspired Moodz?
The term "mood" or "vibe" has become quite the popular phrase in today's casual vocabulary, associating with feelings and emotional states as a result of the ambience, aura, and atmosphere of a place or event. Drawn by the audio aura feature from Spotify Wrapped 2021, the Moodz team set out to create a way to measure the aura of Berkeley. As fellow first-year grad students, we all had trouble figuring out what the culture here is at Berkeley.

## What's the need for Moodz?
What really drove the need for Moodz was the future implications the platform can have not only for students but also for the Tang Health Center at Berkeley. Oftentimes, I find myself overhearing that university health centers aren't always the greatest resource and perhaps that's simply because it is an underutilized resource that is lacking sufficient student data. By crowd-sourcing student vibes and moods, the university will have a lot more data to better approach its initiatives, campaigns, and other events.

## How do you use Moodz?
Setting up Moodz is pretty quick and easy!

1. Install package dependencies!

`npm install`

2. Set up and start the Python environment (assuming you have Python 3+ installed). Fortunately for you, we've set up a proxy and script for our backend so that you can start the environment without diving into our files!

`npm run start-backend`

OR if you want to do it manually
- `source env/bin/activate` (mac/unix) and `.\env\Scripts\activate` (windows)
- `flask run`

3. Start the project!

`npm start`

## How was Moodz built and how does Moodz really work?
While our platform looks straightforward, designing it and developing it was a whole adventure. On the design side, our fun moody graphics were hand-drawn. The component system and styles were all written from scratch with the exception of Material UI's select dropdown menu. The data visualizations and the backend gets a little interesting. We trained a model of words using **Natural Language Processing** to obtain a numerical sentiment to measure the severity of the words in each category. By randomizing sets of words in each user session (tracked by a randomized cryptographic hash), a user submission of their mood will go into our Firebase database. From here, our Flask server aggregates the moods by department and as a whole campus, gets run on an NLP model to obtain a new numerical sentiment, and then sends that back to the client-side via Flask.

## Our sources and help!
[Setting up Flask with React](https://dev.to/nagatodev/how-to-connect-flask-to-reactjs-1k8i)