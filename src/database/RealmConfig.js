import Realm from 'realm';
import { PostSchema } from '../schemas';

const app = new Realm.App({ id: 'super-stooper-zliyx' });
const credentials = Realm.Credentials.anonymous();
try {
  const user = await app.logIn(credentials);
} catch (err) {
  console.error('Failed to log in', err);
}
