// src/views/Dashboard.vue
<template>
    <div class="dashboard">
      <header class="dashboard-header">
        <h1>Water Monitoring Dashboard</h1>
        <div class="last-updated">
          Last Updated: {{ formatTime(lastUpdate) }}
        </div>
      </header>
  
      <div class="dashboard-grid">
        <div class="grid-item alerts">
          <AlertPanel />
        </div>
        
        <div class="grid-item water-level">
          <WaterLevelChart />
        </div>
        
        <div class="grid-item rain-rate">
          <RainRateDisplay />
        </div>
      </div>
    </div>
  </template>

<script>
import AlertPanel from '../components/AlertPanel.vue'
import WaterLevelChart from '../components/WaterLevelChart.vue'
import RainRateDisplay from '../components/RainRateDisplay.vue'

export default {
  name: 'Dashboard',
  components: {
    AlertPanel,
    WaterLevelChart,
    RainRateDisplay
  },
  data() {
    return {
      lastUpdate: new Date()
    }
  },
  methods: {
    formatTime(time) {
      return new Date(time).toLocaleString()
    }
  },
  mounted() {
    // Update timestamp every minute
    setInterval(() => {
      this.lastUpdate = new Date()
    }, 60000)
  }
}
</script>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import AlertPanel from '../components/AlertPanel.vue'
  import WaterLevelChart from '../components/WaterLevelChart.vue'
  import RainRateDisplay from '../components/RainRateDisplay.vue'
  
  const lastUpdate = ref(new Date())
  
  const formatTime = (time) => {
    return new Date(time).toLocaleString()
  }
  
  onMounted(() => {
    // Set up interval when component is mounted
    const interval = setInterval(() => {
      lastUpdate.value = new Date()
    }, 60000)
  
    // Clean up interval when component is unmounted
    onUnmounted(() => {
      clearInterval(interval)
    })
  })
  </script>

<style scoped>
.dashboard {
    padding: 30px;
    height: 110vh;
    background: #f5f5f5;
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    gap: 20px;
    height: calc(100vh - 100px);
}

.grid-item {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.alerts {
    grid-column: 1 / -1;
}

.water-level {
    grid-row: 2;
    grid-column: 1;
}

.rain-rate {
    grid-row: 2;
    grid-column: 2;
}
</style>