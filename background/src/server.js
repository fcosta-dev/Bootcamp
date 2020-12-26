import "dotenv/config"; // dotenv = biblioteca que permite utilizar variáveis de ambiente

import express from "express";
import BullBoard from 'bull-board';

import UserController from './app/controllers/UserController';  
import Queue from './app/lib/Queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));
// ↑ Acessa todas as queues configuradas em "Queue" e para cada adiciona ao bull

app.use(express.json()); // informa que o server deve aceitar requisições em "json"

app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, () => {
  console.log(`Server running on the ${process.env.PORT}`);
});