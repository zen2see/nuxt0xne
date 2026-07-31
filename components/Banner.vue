<template>
  <section class="banner" :style="bgStyle">
    <div class="banner-content">
      <h1 v-if="title">{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
  height: { type: [String, Number], default: '320' }
})

const props = defineProps()

const bgStyle = props.imageUrl
  ? { backgroundImage: `url(${props.imageUrl})`, minHeight: props.height + 'px' }
  : { background: 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)', minHeight: props.height + 'px' }
</script>

<style scoped>
.banner {
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}
.banner-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
  color: white;
  text-align: left;
}
.banner h1 { font-size: 2rem; margin: 0 0 4px; }
.banner p { margin: 0; opacity: 0.95 }
@media (max-width: 640px) {
  .banner-content { padding: 14px }
  .banner h1 { font-size: 1.4rem }
}
</style>
