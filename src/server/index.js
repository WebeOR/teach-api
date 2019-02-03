const { PORT } = require('../../config');

const bodyParser = require('body-parser');
const server     = require('restana')({});

server.use(bodyParser.json());

// добавить пользователя
server.post('/call', ({ body } , { send }) => {
  if (body && body.email && body.phone && body.message) {
    return send('Ура, всё верно!' , 201);
  }
  return send('Упс... Ошибка в данных!', 500);
});

server.start(PORT);
console.log('Server is running at port ' + PORT);

// Пример запроса
// тип    POST
// адрес  http://localhost:5000/call
// передаваемые данные
//  {
//    "email": "email@qwd.ru",
//    "phone": "+79999998877",
//    "message": "dqowkdpoqkwdpoqkwdk"
//  }