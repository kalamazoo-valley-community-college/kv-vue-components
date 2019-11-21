# kv-vue-components

## Usage
You need a valid SSH key associated with your account that has read access to this package.
```
npm install git+ssh://git@github.com:kalamazoo-valley-community-college/kv-vue-components.git#master
```

### Import the named component(s).
``` vue
// You can add multiple component imports this way.
import { kvButton, kvLabeledInput } from 'kv-vue-components';
```

### Register the component(s) on your Vue instance.
``` vue
export default {
  components: {
    kvButton,
    kvLabeledInput,
  }
}
```

### Use the component within your template.
``` vue
<kv-button text="Something" />
<kv-labeled-input type="text"id="something" label="Something" :required="false" />
```

#### Combined Example
``` vue
<template>
  <kv-button text="Something" />
  <kv-labeled-input type="text"id="something" label="Something" :required="false" />
</template>

<script>
  // You can add multiple component imports this way.
  import { kvButton, kvLabeledInput } from 'kv-vue-components';

  export default {
    components: {
      kvButton,
      kvLabeledInput,
    }
  }
</script>
```

## Project setup
```
npm install
```

### Build the library for usage.
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
