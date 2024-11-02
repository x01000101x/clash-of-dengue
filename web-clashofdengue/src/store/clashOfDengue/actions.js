import socket from '@/socket';

export const initializeSocket = async ({ commit }) => {
  // Menerima event dari server
  socket.on('materi:status', (status) => {
    commit('setToggleMateri', status);
  });

  socket.on('crusor:status', (data) => {
    if (data) {
      commit('setCursorPosition', { x: data.x, y: data.y });
    }
  });

  socket.on('image:index:status', (imageSrc) => {
    commit('setCurrentIndex', imageSrc);
  });

  socket.on('image:upload:status', (data) => {
    if (data) {
      commit('addImage', data.imageUrl);
    }
  });
};

export const sendButtonSelect = async ({ commit }, callback) => {
  socket.emit('materi:button', callback);
  commit('setToggleMateri', callback);
};

// Update gambar berikutnya
export const nextImage = ({ commit, state }) => {
  const newIndex =
    state.currentIndex < state.images.length - 1 ? state.currentIndex + 1 : 0;
  socket.emit('image:select', newIndex);
  commit('setCurrentIndex', newIndex);
};

// Update gambar sebelumnya
export const prevImage = ({ commit, state }) => {
  const newIndex =
    state.currentIndex > 0 ? state.currentIndex - 1 : state.images.length - 1;
  socket.emit('image:select', newIndex);
  commit('setCurrentIndex', newIndex);
};

// Upload gambar baru
export const onImageUpload = ({ commit }, event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;

      commit('addImage', imageUrl);
      socket.emit('image:upload', { imageUrl });
    };
    reader.readAsDataURL(file);
  }
};

// Update posisi kursor
export const cursorPosition = ({ commit }, { x, y }) => {
  socket.emit('crusor:input', { x, y });
  commit('setCursorPosition', { x, y });
};
