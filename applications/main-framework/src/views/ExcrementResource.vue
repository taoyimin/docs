<template>
    <WujieVue width="100%" height="100%" name="excrement-resource" :url="url"></WujieVue>
</template>
  
<script>
import hostMap from "../hostMap";
export default {
    computed: {
        url() {
            return hostMap("//localhost:7002/") + this.$route.params.path;
        },
    }
};
</script>
  
<style lang="scss" scoped></style>