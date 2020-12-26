import Queue from 'bull';
import redisConfig from '../../config/redis'

import * as jobs from '../jobs' // retorna todos os "exports" da pasta importada. Necessário ter o arquivo "index.js" no diretório.

// utilizando "map" o código fica escalável, para situações que obtesse mais arquivos em "jobs"
// ↓ Está funcionando bascimanete como um construtor
const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options,
}))

export default {
    queues,
    add(name, data) {
        const queue = this.queues.find(queue => queue.name === name);
        // ↑ irá procurar um queue em que o nome(chave) dela seja igual ao nome(chave) recebido no parâmetro
        // add = como adicionamos um processo na fila

        return queue.bull.add(data, queue.options); // retorna a queue e valida se a fila foi criada
    },
    process(){
        // aqui monitora-se os eventos que acontecem na fila
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle); //processo monitorado (handle)

            // passa-se aqui o evento que pretende-se chegar, este é um evento de falha para caso ocorra alguma excessão ou erro na aplicação, assim podemos saber oq aconteceu no ambiente de desenvolvimento e corrigir para não subir aos servidores esse erro.
            queue.bull.on('failed', (job, err) => {
                console.log('job failed', queue.key, job.data);
                console.log(err);
            });
        })
    }
}