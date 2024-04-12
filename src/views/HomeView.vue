<template>
  <main>
    <h1 class="text-3xl font-bold underline">

    </h1>
    
    <button @click="selectedCategory = 'web'"> WEB </button>
    <button @click="selectedCategory = 'photo'"> PHOTO </button>
    <button @click="selectedCategory = 'video'"> VIdeo </button>
    <button @click="selectedCategory = ''"> ALL </button>
    
    <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
      <h2>{{ portfolioItem.title }}</h2>
      <p>{{ portfolioItem.description }}</p>
      <p>{{ portfolioItem.id }}</p>
      <p :class="portfolioItem.category">{{ portfolioItem.category }}</p>

      <img :src="portfolioItem.image" alt="">
      <div v-if="portfolioItem.link">
        <a :href="portfolioItem.link">Link</a>
      </div>
      <div v-else>

      </div>
    </div>
  
  </main>
</template>

<script setup>
import { ref } from 'vue'

import image1 from '@/assets/test.jpeg'

const portfolioItems = ref([
  {
    id: 1,
    title: 'Portfolio Item 1',
    description: 'This is the first portfolio item',
    image: image1,
    category: 'web'

  },
  {
    id: 2,
    title: 'Portfolio Item 2',
    description: 'This is the second portfolio item',
    image: 'https://via.placeholder.com/150',
    link: 'https://www.google.com',
    category: 'photo'
  },
  {
    id: 3,
    title: 'Portfolio Item 3',
    description: 'This is the third portfolio item'
  },
  {
    id: 2,
    title: 'Portfolio Item 2',
    description: 'This is the second portfolio item'
  }  
])

</script>

<style lang="scss">
.card {
  color:#333;
  background-color: #f4f4f4;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.web {
  background-color: #af7012;
}
.photo {
  background-color: #f256e2;
}
</style>