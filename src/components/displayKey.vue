<template>
    &emsp;
    <span>
        <span v-html="html"></span>
    </span>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'displayKey',
    props: {
        keys: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            html: "",
        };
    },
    mounted() {
        let html = ""
        html = "<kbd>" + this.keys + "</kbd>"
        html = html.replaceAll(" + ", "</kbd>&nbsp;+&nbsp;<kbd>")
        html = html.replaceAll(" / ", "</kbd>&nbsp;/&nbsp;<kbd>")
        html = html.replaceAll(" or ", "</kbd>&nbsp;or&nbsp;<&nbsp;or&nbsp;>")
        html = html.replaceAll(" ", "&nbsp")
        this.html = html
        console.log(html)
    },
})
</script>

<style lang="scss">
kbd {
    background-color: rgb(70, 70, 70);
    border-radius: 5px;
    padding: 1px;
}
</style>