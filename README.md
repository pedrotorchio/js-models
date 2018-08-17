# jsapi-torchiodev.com

### Typescript/Javascript data model classes

#### Typescript files in src folder. 
###### index.ts exports every module.
#### Mirrorred Javascript generated in dist folder
###### package.main points to dist/index, exporting all files

### Models
#### Model (base)
```typescript
  interface Metadata {
    [key: string]: any;
  }
  meta:Metadata = {}
  // stores any metadata, usually:
  //  sort: number = 0; // item order
  //  tags: Tags = new Tags(); // meta tags
  //  synonyms: Tags = new Tags();
  //  description: string; // meta description

  // copies itself into a child instance
  copyInto<T extends Model>(Type: new (id: number | string) => T): T;
```
#### Image
```typescript

  interface ISrcset = {url:string, size:[string, number]}

  title: string = '';
  name: string = '';
  main_url:string = '';
  width: number = 0;
  height: number = 0;
  srcset: ISrcset[] = []; // size: [label, value]

  addSource(src:ISrcset):itself; // add new image source to srcset
```
### Tags
```typescript
  collection: string[] = [];
```