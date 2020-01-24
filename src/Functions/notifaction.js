import axios from "axios";

export const sendTextMessage = (phoneNum, text) => {
  axios.post("http://localhost:3001/api/messages", {
    text: text,
    to: phoneNum
  });
};
