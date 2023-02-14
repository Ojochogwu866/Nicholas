export default {
  name: 'profileInfo',
  title: 'profileInfo',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'backgroundInformation', title: 'BackgroundInformation', type: 'string'},
    {
      name: 'profileImage',
      title: 'ProfileImage',
      type: 'image',
      options: {hotspot: true},
    },
    {name: 'email', title: 'email', type: 'string'},
    {name: 'phoneNumber', title: 'PhoneNumber', type: 'string'},
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    },
  ],
}
