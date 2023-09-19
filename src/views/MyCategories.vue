<template>
  <div class="app-page">
    <div>
      <div class="page-title">
        <h3>Категории</h3>
      </div>
      <section>
        <div class="row">
        <CategoryCreate/>
          <CategoryEdit/>
      </div>
      </section>
    </div>
  </div>
</template>

<script>
import CategoryCreate from '@/components/CategoryCreate'
import CategoryEdit from '@/components/CategoryEdit'

export default {
  name: 'MyCategories',
  components: {
    CategoryEdit,
    CategoryCreate,
  }
}
</script>
