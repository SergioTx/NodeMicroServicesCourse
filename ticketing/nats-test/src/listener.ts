import nats, { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto';

console.clear();

const randomId = randomBytes(4).toString('hex');

const stan = nats.connect('ticketing', randomId, {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Listener connected to NATS');

  stan.on('close', () => {
    console.log('NATS connection closed!');
    process.exit();
  });

  const options = stan
    .subscriptionOptions()
    .setManualAckMode(true)
    .setDeliverAllAvailable();
  const subscription = stan.subscribe(
    'ticket:created',
    // 'orders-service-queue-group',
    options
  );
  subscription.on('message', (msg: Message) => {
    const data = msg.getData();

    if (typeof data === 'string') {
      console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
    }

    msg.ack(); // acknowledge message received
  });
});

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());
