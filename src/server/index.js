const { PORT } = require('../../config');

const { json } = require('body-parser');
const cors     = require('cors');
const server   = require('restana')({});

server.use(json());
server.use(cors());

// добавить пользователя
server.post('/call', ({ body }, { send }) => {
  if (body && body.email && body.phone && body.message) {
    return send('Ура, всё верно!', 201);
  }
  return send('Упс... Ошибка в данных!', 500);
});

async function start () {
  try {
    await server.start(PORT);
    console.log('Server is running at port ' + PORT);
  } catch (error) {
    console.error('Ошибка запуска сервера - ', error);
  }
}

start();

// Пример запроса
// тип    POST
// адрес  http://localhost:5000/call
// передаваемые данные
//  {
//    "email": "email@qwd.ru",
//    "phone": "+79999998877",
//    "message": "dqowkdpoqkwdpoqkwdk"
//  }