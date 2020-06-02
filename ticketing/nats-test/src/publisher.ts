import nats from 'node-nats-streaming';

// stan is the common name for nats client (nats backwards)
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Publisher connected to NATS');
});
