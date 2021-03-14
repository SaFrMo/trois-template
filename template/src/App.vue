<template>
    <Renderer ref="renderer" mouse-over click resize antialias orbit-ctrl>
        <Camera :position="{ y: 30, z: 30 }" />
        <Scene>
            <PointLight :position="{ y: 50, z: 50 }" />
            <Ground />
        </Scene>
    </Renderer>
</template>

<script>
import Ground from './components/Ground.vue'
export default {
    components: { Ground },
}
</script>

<style lang="scss">
body {
    margin: 0;
}

body,
html,
#app,
.app {
    height: 100%;
}

.app {
    canvas {
        display: block;
    }
}
</style>
