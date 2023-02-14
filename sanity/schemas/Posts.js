export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'posttitle', title: 'postTitle', type: 'string'},
    {name: 'postimage', title: 'postImage', options: {hotspot: true}, type: 'image'},
    {name: 'booktitle', title: 'bookTitle', type: 'string'},
  ],
}
