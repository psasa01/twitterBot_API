const app = require('./app');

app.set('port', process.env.PORT || 3050);

app.listen(app.get('port'), () => {
   console.log(`Running on port ${port}`);
});
