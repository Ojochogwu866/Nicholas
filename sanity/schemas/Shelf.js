export default {
  name: 'shelf',
  title: 'Shelf',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'booktitle', title: 'bookTitle', type: 'string'},
    {name: 'bookinformation', title: 'bookInformation', type: 'string'},
    {
      name: 'bookimage',
      title: 'BookImage',
      type: 'image',
      options: {hotspot: true},
    },
    {name: 'url', title: 'url', type: 'url'},
  ],
}
