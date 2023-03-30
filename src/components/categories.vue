<template>
    <hr>
    <div>
        <h2>
            {{ categories.name }}
        </h2>
        <v-table density="compact">
            <tbody>
                <tr v-for="shortcut in categories.shortcuts" :key="categories.name + '-' + shortcut.description">
                    <td class="desc">{{ shortcut.description }}</td>
                    <td class="key">
                        <DisplayKey :keys="shortcut.keys"></DisplayKey>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { CategoriesEntity } from '@/else'
import DisplayKey from './displayKey.vue';

export default defineComponent({
    name: "categories",
    props: {
        categories: {
            type: Object as () => CategoriesEntity,
            required: true,
        },
    },
    components: { DisplayKey }
})
</script>

<style lang="scss" scoped>
td {
    &.key {
        text-align: left;
        // padding-left: 0px !important;
        // padding-right: 0px !important;
        width: max-content;
    }

    &.desc {
        text-align: left;
        // padding-right: 0px !important;
        overflow-wrap: break-word;
        // padding-left: 0px !important;
    }
}
</style>