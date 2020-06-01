import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new user
interface TicketAttrs {
  title: string;
  price: number;
  userId: string;
}

// An interface that describes the properties
// that a User Document has
interface TicketDoc extends mongoose.Document {
  title: string;
  price: number;
  userId: string;
}

// An interface that describes the properties
// that a User Model has
interface TicketModel extends mongoose.Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}
