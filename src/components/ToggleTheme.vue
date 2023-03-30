<template>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
</template>

<script lang="ts" >
import { useTheme } from 'vuetify'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ToggleTheme',
    setup() {
        const theme = useTheme()

        return {
            theme,
            toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
        }
    }
})
</script>