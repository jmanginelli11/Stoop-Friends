import { Realm, createRealmContext } from '@realm/react';

export class PostSchema extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  // the Task.generate() method creates Task objects with fields with default values
  static generate(description: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      description,
      isComplete: false,
      createdAt: new Date(),
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'PostSchema',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      description: 'string',
      isComplete: { type: 'bool', default: false },
      createdAt: 'date',
    },
  };
}

const config = {
  schema: [PostSchema],
};
export default createRealmContext(config);

// import Realm from 'realm';

// const PostSchema = {
//   name: 'Post',
//   properties: {
//     _id: 'int',
//     name: 'string',
//     location: 'string',
//     description: 'string',
//     owner_id: 'string?',
//   },
//   primaryKey: '_id',
// };

// const realm = async () => {
//   await Realm.open({
//     path: 'realm-files/myrealm',
//     schema: [PostSchema],
//   });
// };

// realm();

// // Add a couple of Tasks in a single, atomic transaction
// let post1, post2;
// realm.write(() => {
//   post1 = realm.create('Post', {
//     _id: 1,
//     name: 'first post',
//     location: 'somewhere',
//     description: 'stuff here',
//   });

//   post2 = realm.create('Post', {
//     _id: 2,
//     name: 'second post',
//     location: 'somewhere else',
//     description: 'some more stuff',
//   });
//   console.log(`created two tasks: ${post1.name} & ${post2.name}`);
// });

// realm.close();
