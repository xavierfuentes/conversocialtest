import { v4 } from 'uuid';

import { SEND_MESSAGE_REQUEST } from './types';

export const sendMessageRequest = text => {
  const message = {
    author: { id: 1 },
    id: v4(),
    sentAt: new Date(),
    text,
  };

  return {
    type: SEND_MESSAGE_REQUEST,
    payload: { message },
  };
};
