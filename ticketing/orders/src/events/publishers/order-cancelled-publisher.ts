import { Publisher, OrderCancelledEvent, Subjects } from '@stxtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
