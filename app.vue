<template>
  <div>
    Hello there!
    <p>
      <router-link to="/home">
        Home
      </router-link> / 
      <router-link to="/about">
        About
      </router-link>
    </p>
    <router-view />
  </div>
</template>
