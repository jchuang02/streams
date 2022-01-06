# Twitch clone streaming application

This is a streaming application inspired by Twitch built in modern React. The application was
built as a part of Stephen Grider's Modern React with Redux course. The application was
initially built with React Class components, which were later converted to the more modern
Functional Components with Hooks.

The application uses an RTMP server allowing for streaming video using http:flv.
Streams and stream data are stored on a local JSON server using the json-server library.

The application uses the Semantic UI styling via a CDN to provide basic styling to components.

To try out the application yourself, use `npm start` at the api, client, and rtmpserver directories
to start the respective local servers.

This application showcases mastery in:

- User login/logout functionality using Google OAuth
- React Final Form (Previously Redux Form)
- CRUD Operations in React and Redux
- React Router (Version 6 and above)
