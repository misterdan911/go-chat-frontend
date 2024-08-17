import { setGlobal } from 'reactn';
import Config from '../config';
import Actions from '../constants/Actions';
import store from '../store';
import getRooms from './getRooms';
import messageSound from '../assets/message.mp3';
import socketPromise from '../lib/socket.io-promise';




const initIO2 = (user) => {

  let wsUrl = Config.url2 + `/ws/${user.id}`;
  wsUrl = wsUrl.replace('http://', 'ws://');

  socket = new WebSocket(wsUrl);

  socket.onopen = function () {
    console.log('Masuk onopen');
  };

  socket.onmessage = function (event) {
    console.log('Masuk onmessage');
    // const messageElement = document.createElement('div');
    // messageElement.textContent = event.data;
    // messagesElement.appendChild(messageElement);

    const { room, message } = event.data;

    const currentRoom = store.getState().io.room;

    const audio = document.createElement('audio');
    audio.style.display = 'none';
    audio.src = messageSound;
    audio.autoplay = true;
    audio.onended = () => audio.remove();
    document.body.appendChild(audio);

    if (!currentRoom || currentRoom._id !== room._id) {
      store.dispatch({ type: Actions.MESSAGES_ADD_ROOM_UNREAD, roomID: room._id });
    }

    if (!currentRoom) return;
    if (currentRoom._id === room._id) store.dispatch({ type: Actions.MESSAGE, message });

    getRooms()
      .then((res) => store.dispatch({ type: Actions.SET_ROOMS, rooms: res.data.rooms }))
      .catch((err) => console.log(err));
  };

};

export default initIO2;