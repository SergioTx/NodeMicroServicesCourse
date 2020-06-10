import { Listener, OrderCreatedEvent, Subjects } from "@stxtickets/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from './queue-group-name'

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  onMessage(data: OrderCreatedEvent['data'], msg: Message): void {
    throw new Error("Method not implemented.");
  }
}