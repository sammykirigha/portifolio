import {createClient} from 'next-sanity'

export const client =  createClient ({
  projectId: 'gklulz9k', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})

