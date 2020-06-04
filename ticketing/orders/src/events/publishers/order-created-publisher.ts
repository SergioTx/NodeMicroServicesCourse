import { Publisher, OrderCreatedEvent, Subjects } from '@stxtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
