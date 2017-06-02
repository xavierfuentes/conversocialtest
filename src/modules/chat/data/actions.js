import { v4 } from 'uuid';

import { SEND_MESSAGE_REQUEST } from './types';

export const sendMessageRequest = text => {
  const idUserMessage = v4();
  const idBotMessage = v4();
  const messages = {
    [idUserMessage]: {
      author: { id: 1 },
      id: idUserMessage,
      sentAt: new Date(),
      text,
    },
    [idBotMessage]: {
      author: { id: 0 },
      id: idBotMessage,
      sentAt: new Date(),
      text: `You Said: ${text}`,
    },
  };

  return {
    type: SEND_MESSAGE_REQUEST,
    payload: { messages },
  };
};
