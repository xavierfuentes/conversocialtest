import './types';

const initialState = {
  messages: {
    data: {
      0: {
        id: 0,
        sentAt: new Date(),
        author: {
          id: 0,
        },
        text: 'Welcome to the chat'
      },
    },
  },
};

const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};

export default chatReducer;
