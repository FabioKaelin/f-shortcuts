<template>
    <div>
        <v-container class="fill-height">
            <v-responsive class="d-flex align-center text-center fill-height">
                <div>
                    <v-expansion-panels v-model="panels" multiple variant="default">
                        <v-expansion-panel v-for="item in shortcuts" :key="item.name">
                            <v-expansion-panel-title>{{ item.name }}</v-expansion-panel-title>
                            <v-expansion-panel-text>

                                <p>{{ item.description }}</p>
                                <categories v-for="category in item.categories" :key="item.name + '-' + category.name"
                                    v-bind:categories="category"></categories>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <br>

                    </v-expansion-panels>

                </div>
            </v-responsive>
        </v-container>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { getShortcuts } from '@/else'
import categories from './categories.vue';

export default defineComponent({
    name: "OverView",
    data() {
        return {
            shortcuts: getShortcuts(),
            panels: [0,1,2]
        };
    },
    mounted() {
        const isLocal = window.location.href.includes('localhost');
        if (isLocal) {
            this.panels = [1];
        }
    },
    components: { categories }
})
</script>