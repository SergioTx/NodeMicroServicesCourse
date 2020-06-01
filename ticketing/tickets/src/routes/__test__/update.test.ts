import request from 'supertest';
import mongoose from 'mongoose';

import { app } from '../../app';

it('returns a 404 if the provided ID does not exist', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`/api/ticets/${id}`)
    .set('Cookie', global.signin())
    .send({ title: 'Test', price: 20 })
    .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`/api/tickets/${id}`)
    .send({ title: 'Test', price: 20 })
    .expect(401);
});

it('returns a 401 if the user does not own the ticket', async () => {
  const response = await request(app)
    .post('/api/tickets/')
    .set('Cookie', global.signin())
    .send({ title: 'FirstTest', price: 20 });

  console.log(response.body);

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', global.signin())
    .send({ title: 'OtherTest', price: 30 })
    .expect(401);
});

it('returns a 400 if the user provides an invalid title or price', async () => {});

it("updates the ticket's provided valid inputs", async () => {});
