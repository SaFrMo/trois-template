<template>
    <Plane
        :rotation="{ x: Math.PI * -0.5 }"
        :scale="{ x: 40, y: 40 }"
        :width-segments="100"
        :height-segments="100"
    >
        <ShaderMaterial
            ref="shader"
            :fragment-shader="fragmentShader"
            :vertex-shader="vertexShader"
        />
    </Plane>
</template>

<script>
import vertexShader from '../shaders/ground.vert'
import fragmentShader from '../shaders/ground.frag'

export default {
    data() {
        return {
            fragmentShader,
            vertexShader,
        }
    },
    mounted() {
        this.update()
    },
    methods: {
        update() {
            requestAnimationFrame(this.update)
        },
    },
}
</script>