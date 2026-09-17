import {defineField, defineType} from 'sanity'
export const localizedString = defineType({name:'localizedString',title:'Localized string',type:'object',fields:[defineField({name:'vi',title:'Tiếng Việt',type:'string',validation:r=>r.required()}),defineField({name:'en',title:'English',type:'string',validation:r=>r.required()})]})
