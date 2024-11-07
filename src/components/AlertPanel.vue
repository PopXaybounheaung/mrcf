<template>
    <div class="alert-panel">
      <div class="alert-header">
        <h2>Active Alerts</h2>
        <span :class="['status-badge', currentStatus]">
          {{ alerts.length }} Active Alerts
        </span>
      </div>
      <div class="alert-list">
        <div v-for="alert in alerts" :key="alert.stationId" 
             :class="['alert-item', alert.alertLevel]">
          <div class="alert-info">
            <h3>Station {{ alert.stationId }}</h3>
            <p>Water Level: {{ alert.waterLevel }}m</p>
            <p>Rain Rate: {{ alert.rainRate }}mm/h</p>
            <p>{{ formatTime(alert.timestamp) }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  // Using standard script to ensure proper export
export default {
  name: 'AlertPanel',
  data() {
    return {
      alertCount: 0,
      mockAlerts: [
        {
          id: 1,
          waterLevel: 2.5,
          rainRate: 30,
          level: 'warning',
          timestamp: new Date()
        },
        {
          id: 2,
          waterLevel: 3.2,
          rainRate: 45,
          level: 'danger',
          timestamp: new Date()
        }
      ]
    }
  },
  methods: {
    formatTime(timestamp) {
      return new Date(timestamp).toLocaleString()
    }
  }
}
  </script>
  
  <script setup>
  import { ref, onMounted, computed, onUnmounted } from 'vue';
  import { firebaseService } from '../services/firebaseService';
  
  const alerts = ref([]);
  const unsubscribe = ref(null);
  
  const currentStatus = computed(() => {
      if (alerts.value.some(a => a.alertLevel === 'danger')) return 'danger';
      if (alerts.value.some(a => a.alertLevel === 'warning')) return 'warning';
      return 'normal';
  });
  
  onMounted(() => {
      unsubscribe.value = firebaseService.subscribeToAlerts((data) => {
          alerts.value = data;
      });
  });
  
  onUnmounted(() => {
      if (unsubscribe.value) {
          unsubscribe.value();
      }
  });
  
  const formatTime = (timestamp) => {
      return new Date(timestamp).toLocaleString();
  };
  </script>