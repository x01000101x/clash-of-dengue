<template>
    <div>
      <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
    </div>
  </template>
  
  <script>
  import VueApexCharts from 'vue3-apexcharts'; // Pastikan ini yang diimpor
  
  export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [60, 40],
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
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#ffffff'], // Color for data labels
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
            return `${val.toFixed(1)}%`; // Formats label as a percentage
          },
          offsetX: 0, // Horizontal offset
          offsetY: 0, // Vertical offset
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -10, // Moves the data labels closer to the center of each section
            },
          },
        },
      },
    };
  },
};
  </script>
  
  <style scoped>
  /* Tambahkan styling sesuai kebutuhan */
  </style>
  