import { Message } from 'node-nats-streaming';
import mongoose from 'mongoose';
import { TicketUpdatedEvent } from '@stxtickets/common';
import { TicketUpdatedListener } from '../ticket-updated-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Ticket } from '../../../models/ticket';

const setup = async () => {
  // create a listener
  const listener = new TicketUpdatedListener(natsWrapper.client);

  // create and save a ticket
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'TestTitle',
    price: 20,
  });
  await ticket.save();

  // create a fake data event
  const data: TicketUpdatedEvent['data'] = {
    id: ticket.id,
    version: ticket.version + 1,
    title: 'NewTitle',
    price: 10,
    userId: new mongoose.Types.ObjectId().toHexString(),
  };
  // create a fake message object
  const msg: Partial<Message> = {
    ack: jest.fn(),
  };

  // return all of this stuff
  return { listener, data, msg };
};

it('finds, updates and saves a ticket', async () => {});

it('acknowledges the message', async () => {});
