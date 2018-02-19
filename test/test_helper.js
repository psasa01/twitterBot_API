const mongoose = require('mongoose');
before((done) => {
  mongoose.connect('mongodb://localhost:27017/muber_test', {
    useMongoClient: true
  });
  mongoose.connection
    .once('open', () => {
      console.log('connectttedeedd to TES_TTTTS_STT')
      done();
    })
    .on('error', err => {
      console.warn('Warning', error);
    });
});


beforeEach(done => {
  const {
    drivers
  } = mongoose.connection.collections;
  drivers.drop()
    .then(() => done())
    .catch(() => done());
});
