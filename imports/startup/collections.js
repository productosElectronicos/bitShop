import Collections from '../collections';

const CollectionsArray = Object.values(Collections);

CollectionsArray.forEach((collection) => {
  const rawCollection = collection.rawCollection();

  const { indexes } = collection;

  indexes.forEach(({ index, options = {} }) => {
    rawCollection.createIndex(index, options);
  });
});
