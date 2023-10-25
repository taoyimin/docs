<template>
    <WujieVue width="100%" height="100%" name="micro-framework" :url="url" :sync="true"></WujieVue>
</template>
  
<script>
import hostMap from "../hostMap";
export default {
    data() {
        return {
            url: hostMap("//localhost:7000/demo"),
        };
    },
};
</script>
  
<style lang="scss" scoped></style>