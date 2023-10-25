<template>
    <WujieVue width="100%" height="100%" name="excrement-resource" :url="url" :sync="true"></WujieVue>
</template>
  
<script>
import hostMap from "../hostMap";
export default {
    data() {
        return {
            url: hostMap("//localhost:7002/background"),
        };
    },
};
</script>
  
<style lang="scss" scoped></style>