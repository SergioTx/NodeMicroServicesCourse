import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@stxtickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
