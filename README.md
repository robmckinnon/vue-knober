# vue-knober v1.0.3

> VueKnober - a knob ui component

## [Dome Online](https://www.shisaner.com/projects/vue-knober/)

### Laptop
![vue-knobe](https://raw.githubusercontent.com/shiasn/vue-knober/master/docs/images/vue-knober.gif)
### Mobile
![vue-knobe](https://raw.githubusercontent.com/shiasn/vue-knober/master/docs/images/vue-knober-mobile.gif)

## Usage

```dash
npm install -S vue-knober

import Vue form 'vue';
import VueKnober from 'vue-knober';
Vue.component(VueKnober);
```

```html
<vue-knober v-model="level"/>
```

| prop | describe | type | default |
| --- | --- | --- | --- |
| size | define knob size | `string` / `number` | 250(px) |
| value | v-model | `string` / `number` | 0 |
| min | minimum value | `string` / `number` | 0 |
| max | maximum value | `string` / `number` | 255  |
| primaryColor | primary color | `string` | #79bd9a |
| diffColor | diff color | `string` | #cff0da |
| quenchColor | quanch color | `string` | #eee |

