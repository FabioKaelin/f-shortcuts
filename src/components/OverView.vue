<template>
    <div>
        <v-container class="fill-height">
            <v-responsive class="d-flex align-center text-center fill-height">
                <h1>F-SHORTCUTS</h1>
                <div>

                    <v-expansion-panels multiple variant="accordion">
                        <v-expansion-panel v-for="i in 3" :key="i" title="Item"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></v-expansion-panel>
                    </v-expansion-panels>

                </div>
            </v-responsive>
        </v-container>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'OverView',
})
</script>