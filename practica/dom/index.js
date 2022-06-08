const getSoccerPlayer = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 2) {
          resolve({
            id: 2,
            title: 'Harry potter',
            description: 'lorem ipsum dolor',
            oscars: 0
          });
        } else {
          const error = new Error('No book with that id');
          reject(error);
        }
      }, 2000);
    });
  };