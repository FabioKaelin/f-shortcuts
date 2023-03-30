<template>
    <v-app>
        <default-bar />

        <default-view />
    </v-app>
</template>

<script lang="ts">
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Default',
    components: {
        DefaultBar,
        DefaultView,
    },
})
</script>
