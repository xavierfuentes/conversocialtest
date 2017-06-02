import { SEND_MESSAGE_REQUEST } from './types';

const initialState = {
  messages: {
    0: {
      id: '0',
      sentAt: new Date(),
      author: { id: 0 },
      text: 'Welcome to the chat',
    },
  },
};

const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_MESSAGE_REQUEST: {
      const newstate = { ...state, messages: { ...state.messages, [payload.message.id]: payload.message } };
      return newstate;
    }

    default: {
      return state;
    }
  }
};

export default chatReducer;
