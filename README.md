We'd like you to create a basic chat app where the user can send messages and the app will reply advising the user what they wrote. It should be possible to create multiple chats and the chat history should be presented in the app. Wireframe is attached showing an example of how the app should look.
 
There's quite a lot involved in this task for the time given. We’d prefer you focussed on getting each stage done fully, rather reaching partial completion across multiple stages. We’re prioritising code quality above completion of tasks.
 
Please follow the below tasks in stages as described below and commit after each stage. Component structure is just a suggestion, feel free to modify it, create subcomponents, etc.
 
Stage 1:
- Create components for a skeleton layout as shown in the wireframe
  - top bar: header and Add Chat button
  - left panel: chat history
  - right panel: currently selected chat
- Add a header in the top bar describing what the app is (“An awesome chat app”)
- Add a button to the top bar with “Add chat” text
- Create basic tests for these components
 
Stage 2:
- Create a chat component to render chat messages
- Messages by the app and messages by the user should be visually distinct (e.g. different colours/sides)
- When the chat is initially created (the app should come with a first chat precreated), it should contain a welcome message from the app
- There should be a textarea under the chat that allows user to type in a message and submit it by pressing the enter key
- The textarea should get cleared after the message is submitted
- When a user submits a message, it should be displayed in the chat
- Each message, either by the app or by the user, should show a timestamp of when it was sent
- The app should reply to any user message with a message saying "You said: <user message>"
- Create tests for the chat component
 
Stage 3:
- Create a chat history component to render the chat history in the left panel
- There should be one history item for each chat created in the app
- Chat history items should show the last message in the given chat
- Add chat button should create a new chat
- Newly created chat should get selected automatically
- Each of the chats should have an option to delete it
- At any given time, if there are more than zero chats in the history, a chat should always be selected (e.g. if you delete selected chat, another chat should get selected in a predictable way)
- Only one chat should be selected at any given time
- Selected chat should be visually different to non-selected chats
- Messaging textarea should NOT persist state between selected chats
- Create tests for the chat history
