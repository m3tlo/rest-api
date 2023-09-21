<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p class="currency-line" v-for="cur of currencies" :key="cur">
          <span>{{ getCurrency(cur) | currency(cur) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['rates'],
  data: () => ({
    currencies: ['RUB', 'USD', 'EUR'],
    bill: 65000
  }),
  computed: {
    // bill() {
    //     return this.$store.getters.info.bill
    //   },
    base() {
      let cur = this.bill / (this.rates['RUB'] / this.rates['EUR']);
      console.log(cur)
      return cur;
    },
  },
  methods: {
    getCurrency(currency) {
      console.log(currency)

      return Math.floor(this.base * this.rates[currency]);
    },
  },
};
</script>
