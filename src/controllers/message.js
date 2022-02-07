import {messageCollection } from "../db/db";

const getMessages = async () => {
    let messages = await messageCollection
      .find()
      .toArray()
      .then((result) => {
        return result;
      })
      .catch((error) => console.error(error));
    return messages;
  };
  
  const postMessage = (chat) => {
    messageCollection
      .insertOne(chat)
      .then((result) => {
        console.log('Success')
      })
      .catch((error) => console.error(error));
  };
  
  export {
    getMessages,
    postMessage,
    };