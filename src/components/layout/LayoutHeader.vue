<template>
  <header class="header-container">
    <div class="header-title">
      <slot name="title">
        Dashboard
      </slot>
    </div>
    <div class="header-navbar">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "LayoutHeader"
}
</script>
