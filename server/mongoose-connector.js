import mongoose from 'mongoose';
import { MONGO_URL, DB_NAME } from './config';

export default function() {
  mongoose.Promise = global.Promise;

  mongoose
    .connect(MONGO_URL + DB_NAME, {
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(
      () => console.log(`successfully connected to mongo`),
      err => {
        console.log(`error connecting to mongo: `, err);
      }
    );
}
