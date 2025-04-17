import {defineType} from 'sanity'

export const galleryImageType = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Maintenance', value: 'maintenance'},
          {title: 'Rubber Surfacing', value: 'rubber-surfacing'},
          {title: 'Synthetic Turf', value: 'synthetic-turf'},
        ],
      },
    },
  ],
})
