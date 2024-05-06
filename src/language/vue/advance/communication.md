---
title: 组件通信
icon: tower-cell
date: 2024-04-30
tag:
 - Vue
 - 进阶
category:
 - 编程语言
---

<!-- more -->

## 组件通信

### 自定义属性-props

> 父组件向子组件传递数据

父组件

```vue{4}
<template>
    <div class="parent">
        <h1>父组件</h1>
        <Child :msg="msg" :count="count" />
    </div>
</template>

<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const msg = ref('Hello World')
const count = ref(0)
</script>
```

子组件

```{4,5,17}
<template>
    <div class="child">
        <h1>子组件</h1>
        <h6>msg:{{ props.msg }}</h6>
        <button @click="handler">count:{{ count }}</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
let props = defineProps({
    msg: String,
    count: Number,
});

const handler = () => {
    //props.count += 1; // 这样会报错，因为props是只读的
    console.log(props.count);
};
</script>
```

::: warning

- 单向数据流
- 子组件不能修改父组件传递的值

:::

### 自定义事件-$emit

> 子组件向父组件传递数据

父组件

```vue{6}
<template>
    <div class="parent">
        <h1>父组件</h1>
        <p>子组件传递过来的数据：</p>
        <li v-for="item in list">{{ item }}</li>
        <Child @my-event="handle" />
    </div>
</template>

<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const list = ref([])

function handle(value) {
    console.log('子传父的数据', value)
    list.value.push(value)
}
</script>
```

子组件

```vue
<template>
    <div class="child">
        <h1>子组件</h1>
        <button @click="$emit('my-event', 'Hello')">触发事件</button>
        <button @click="handle">触发事件</button>
    </div>
</template>

<script setup lang="ts">
let $emit = defineEmits(['my-event'])
const handle = () => {
    $emit('my-event', 'World')
}
</script>
```

### 事件总线-$bus

> 适合任意组件之间的通信，比如：兄弟组件、父子组件等。

事件总线

首先安装mitt

```bash
npm install --save mitt 
```

```vue
import mitt from 'mitt';

const $bus = mitt();

export default $bus;
```

父组件

```vue
<template>
    <div class="parent">
        <h1>父组件</h1>
        <button @click="handle">没收玩具</button>
        <Child1 />
        <Child2 />
    </div>
</template>

<script setup>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import $bus from '@/bus';

const handle = () => {
    $bus.emit('clear-toy');
}

</script>
```

哥哥组件

```vue
<template>
    <div class="child">
        <h1>哥哥组件</h1>
        <li v-for="toy in toys">{{ toy }}</li>
        <button v-show="toys.length > 0" @click="handle">给弟弟一个玩具</button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import $bus from '@/bus'

let toys = ref(['BB枪', '变形金刚', '赛车'])

const handle = () => {
    let toy = toys.value.pop()
    $bus.emit('send-toy', toy)
}

onMounted(() => {
    $bus.on('clear-toy', () => {
        toys.value = []
    })
})
</script>
```

弟弟组件

```vue
<template>
    <div class="child">
        <h1>弟弟组件</h1>
        <li v-for="toy in toys">{{ toy }}</li>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import $bus from '@/bus'

let toys = ref(['奥特曼'])

onMounted(() => {
    $bus.on('send-toy', (data: any) => {
        toys.value.push(data)
    })
    $bus.on('clear-toy', () => {
        toys.value = []
    })
})
</script>
```


### v-model

> 父子组件双向数据同步，相当于：
> - 通过props传递modelValue，实现父到子传递数据
> - 通过emit触发update:modelValue，实现子到父传递数据

父组件

```vue{5-6}
<template>
    <div class="parent">
        <h1>父组件</h1>
        {{ msg }}
        <Child v-model="msg" />
        <Child :modelValue="msg" @update:modelValue="msg = $event" />
    </div>
</template>

<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const msg = ref('Hello World')
</script>
```

子组件

```vue{11-12}
<template>
    <div class="child">
        <h1>子组件</h1>
        <h6>msg:{{ props.modelValue }}</h6>
        <button @click="handler">改变</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
let props = defineProps(['modelValue']);
let $emit = defineEmits(['update:modelValue'])
const handler = () => {
    let msg = props.modelValue + ' hello '
    $emit('update:modelValue', msg)
};
</script>
```

### useAttrs

> 用于传递属性和事件

父组件

```vue{4}
<template>
    <div class="parent">
        <h1>父组件</h1>
        <Child :msg="msg" :count="count" @xxx="handle" />
    </div>
</template>

<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const msg = ref('Hello World')
const count = ref(0)
const handle = () => {
    count.value++
    console.log(count.value)
}
</script>
```

子组件

```vue{4-5}
<template>
    <div class="child">
        <h1>子组件</h1>
        <h6>msg:{{ $attrs.msg }}</h6>
        <button @click="$attrs.onXxx">count:{{ $attrs.count }}</button>
    </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
let $attrs = useAttrs();
</script>
```

::: tip useAttrs和defineProps的区别
- 和使用 defineProps 接收属性时相比，useAttrs 的优先级要低
- useAttrs：方法能够接收到所有属性，包括未在组件中声明的属性，但不能够对接收到的属性进行类型校验和默认值设置。
- defineProps：方法只能接收到在组件中声明的属性，但能够对接收到的属性进行类型校验和默认值设置，使得组件能够更加健壮。
:::

### $refs和$parent

> $refs用于：父->子
> $parent用于：子->父