<script setup lang="ts">
import { ref } from 'vue'
import { generateClient } from 'aws-amplify/api';
import type { Schema } from '../amplify/data/resource'

const client = generateClient<Schema>()

const createNewUser = async() => {
  await client.models.User.create(
    {
      name: 'Minto'
    },
    {
      authMode: 'apiKey'
    }
  )
} 
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <button>click</button>
</template>

<style scoped></style>
