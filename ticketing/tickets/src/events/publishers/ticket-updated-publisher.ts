import { Publisher, Subjects, TicketUpdatedEvent } from '@stxtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
