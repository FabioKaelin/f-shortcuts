<template>
    <OverView />
</template>

<script lang="ts">
import OverView from '@/components/OverView.vue';

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Home',
    components: {
    OverView
},
})
</script>
