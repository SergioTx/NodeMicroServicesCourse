import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';

it('return an error if the ticket does not exist', async () => {
  const ticketId = mongoose.Types.ObjectId();

  await request(app)
    .post('/api/orders')
    .set('Cookie', global.signin())
    .send({ ticketId })
    .expect(404);
});

it('return an error if the ticket is already reserved', async () => {});

it('reserves the ticket', async () => {});
