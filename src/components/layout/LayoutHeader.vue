<template>
  <header class="header-container">
    <slot name="logo">
      <a class="header-logo" href="/#">
        <img src="../../assets/FIT2CLOUD-white.png" alt="Header Logo"/>
      </a>
    </slot>
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
