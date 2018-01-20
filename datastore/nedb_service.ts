/**
 * Created by malaka on 11/4/17.
 */

const Datastore = require('nedb');

const database = {};
database['record'] = new Datastore(
  {
    filename: './datastore/db/record.database',
    autoload: true
  });

// You need to load each database (here we do it asynchronously)
database['record'].loadDatabase();

/*
 ====================================================================================
 DB actions
 ====================================================================================
 */

const operations = {
  insert: 1,
  find: 2.0,
  find_sort: 2.1,
  find_one: 2.2,
  find_id: 2.3,
  count: 4,
  update: 5,
  remove: 6
};

export let dbCalls = (arg, next) => {
  console.log('NeDB', arg['model'], arg['operation'], arg['query'], arg['doc'], arg['_id'], arg['unq']);
  const d = database[arg['model']];
  switch (arg.operation) {
    case operations.insert:
      return d.insert(arg['doc'], next);
    case operations.find:
      return d.find(arg['query'], next);
    case operations.find_sort:
      return d.find(arg['query']).sort(arg['sortBy']).exec(next);
    case operations.find_id:
      return d.findOne({_id: arg['_id']}, next);
    case operations.find_one:
      return d.findOne(arg['query'], next);
    case operations.count:
      return d.count(arg['query'], next);
    case operations.update:
      return d.update(arg['query'], {$set: arg['newObj']}, next);
    case operations.remove:
      return d.remove(arg['query'], {}, next);
  }
};
