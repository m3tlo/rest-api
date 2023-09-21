<template>
  <div class="app-page">
    <div>
      <div class="page-title">
        <h3>Планирование</h3>
        <h4>{{info.bill | currency('RUB')}}</h4>
      </div>
      <my-loader
        v-if="loading"
      />
      <p v-else-if="!categories.length" class="center">Категорий нет</p>

      <section v-else>
        <div
          v-for="cat in categories" :key="cat.id"
        >
          <p>
            <strong>{{cat.title}}:</strong>
            {{cat.spend | currency}} из {{cat.limit | currency}}
          </p>
          <div class="progress">
            <div 
              class="determinate" 
              :style="{width: cat.progressPercent + '%'}"
              :class="[cat.progressColor]"
            ></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name:'MyPlanning',
  data: () => ({
    loading: true,
    categories: [],
  }),
  async mounted() {
    this.categories = [
      {
        categoryId: 1,
        title: 'car',
        limit: 10000,
        spend:5000,
      },
      {
        categoryId: 2,
        title: 'car',
        limit: 10000,
        spend:5000,
      },
      {
        categoryId: 3,
        title: 'car',
        limit: 10000,
        spend:7000,
      },
    ];
    this.loading = false

    // const categories = await this.$store.dispatch('fetchCategories')
    const records = await this.$store.dispatch('fetchRecords')

    this.categories = this.categories.map(cat => {
      const spend = records
      .filter(r => r.categoryId === cat.id)
      .filter(r => r.type === 'outcome')
      .reduce((total, record) => {
        return total += +record.amount
      },0)

      const percent = 100 * spend / cat.limit
      const progressPercent = percent > 100 ? 100 : percent
      const progressColor = percent < 60
      ? 'green'
      : percent < 100 
        ? 'yellow'
        : 'red'
      
      return {
        ...cat,
        progressColor,
        progressPercent,
        spend
      }
    })
  },
  computed: {
    ...mapGetters(['info'])
  },
  methods: {

  },
}
</script>
