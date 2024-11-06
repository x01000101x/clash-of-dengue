<template>
  <div>
    <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
  components: {
    apexchart: VueApexCharts,
  },
  computed: {
    scoreData() {
      return this.$store.getters["ClashOfDengue/getScoreUser"];
    },
    series() {
      const stringArr = [this.scoreData.correct_answer, this.scoreData.false_answer];
      return stringArr.map(Number);
    },
  },
  data() {
    return {
      chartOptions: {
        labels: ['Jawaban Benar', 'Jawaban Salah'],
        colors: ['#FFA500', '#EB008B'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 250,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#ffffff'],
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            color: '#000',
            opacity: 0.5,
          },
          formatter: function (val) {
            return `${val.toFixed(1)}%`;
          },
          offsetY: 0,
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -20,
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.empty-message {
  font-size: 24px;
  color: white;
  text-align: center;
  margin-top: 10%;
  background-color: #2d93a5;
  border: 2px solid #2d93a5;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
}
</style>
