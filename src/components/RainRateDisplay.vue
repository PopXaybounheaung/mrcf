// src/components/RainRateDisplay.vue
<template>
  <div class="rain-rate-display">
    <div class="header-container" style="display: flex; align-items: center; justify-content: center; gap: 12px;">
      <svg fill="#32b2ff" height="50px" width="50px" version="1.1" id="Capa_1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      viewBox="-38.54 -38.54 462.49 462.49" 
      xml:space="preserve" 
      transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" 
      stroke="#29b7db"><g id="SVGRepo_bgCarrier" 
      stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
      stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" 
      stroke-width="0.770814"></g><g id="SVGRepo_iconCarrier"> <g> 
        <path d="M124.704,259.055c-5.523,0-10,4.478-10,10v44c0,5.522,4.477,10,10,10s10-4.478,10-10v-44 C134.704,263.532,130.227,259.055,124.704,259.055z"></path> 
        <path d="M124.704,195.055c-5.523,0-10,4.478-10,10v33c0,5.522,4.477,10,10,10s10-4.478,10-10v-33 C134.704,199.532,130.227,195.055,124.704,195.055z"></path> 
        <path d="M124.704,337.055c-5.523,0-10,4.478-10,10v13c0,5.522,4.477,10,10,10s10-4.478,10-10v-13 C134.704,341.532,130.227,337.055,124.704,337.055z"></path> 
        <path d="M213.704,239.055c-5.523,0-10,4.478-10,10v36c0,5.522,4.477,10,10,10s10-4.478,10-10v-36 C223.704,243.532,219.227,239.055,213.704,239.055z"></path> 
        <path d="M213.704,308.055c-5.523,0-10,4.478-10,10v42c0,5.522,4.477,10,10,10s10-4.478,10-10v-42 C223.704,312.532,219.227,308.055,213.704,308.055z"></path> 
        <path d="M213.704,193.055c-5.523,0-10,4.478-10,10v13c0,5.522,4.477,10,10,10s10-4.478,10-10v-13 C223.704,197.532,219.227,193.055,213.704,193.055z"></path> 
        <path d="M258.704,194.055c-5.523,0-10,4.478-10,10v13c0,5.522,4.477,10,10,10s10-4.478,10-10v-13 C268.704,198.532,264.227,194.055,258.704,194.055z"></path> 
        <path d="M258.704,241.055c-5.523,0-10,4.478-10,10v13c0,5.522,4.477,10,10,10s10-4.478,10-10v-13 C268.704,245.532,264.227,241.055,258.704,241.055z"></path> 
        <path d="M258.704,290.055c-5.523,0-10,4.478-10,10v13c0,5.522,4.477,10,10,10s10-4.478,10-10v-13 C268.704,294.532,264.227,290.055,258.704,290.055z"></path> 
        <path d="M258.704,337.055c-5.523,0-10,4.478-10,10v13c0,5.522,4.477,10,10,10s10-4.478,10-10v-13 C268.704,341.532,264.227,337.055,258.704,337.055z"></path> 
        <path d="M169.704,194.055c-5.523,0-10,4.478-10,10v13c0,5.522,4.477,10,10,10s10-4.478,10-10v-13 C179.704,198.532,175.227,194.055,169.704,194.055z"></path> 
        <path d="M169.704,241.055c-5.523,0-10,4.478-10,10v13c0,5.522,4.477,10,10,10s10-4.478,10-10v-13 C179.704,245.532,175.227,241.055,169.704,241.055z"></path> 
        <path d="M169.704,290.055c-5.523,0-10,4.478-10,10v13c0,5.522,4.477,10,10,10s10-4.478,10-10v-13 C179.704,294.532,175.227,290.055,169.704,290.055z"></path> 
        <path d="M169.704,337.055c-5.523,0-10,4.478-10,10v13c0,5.522,4.477,10,10,10s10-4.478,10-10v-13 C179.704,341.532,175.227,337.055,169.704,337.055z"></path> 
        <path d="M336.344,130.546c1.766-7.314,2.659-14.72,2.659-22.073c0-51.347-41.774-93.121-93.121-93.121 c-20.261,0-39.524,6.398-55.706,18.502c-15.356,11.486-27.005,
        27.766-32.89,45.932c-0.007,0-0.014-0.001-0.021-0.001 c-1.081-0.073-2.307-0.156-3.64-0.156c-30.291,0-57.36,19.235-68.253,48.168c-4.234-0.763-8.552-1.149-12.861-1.149 C32.528,126.648,0,
        159.368,0,199.352c0,39.864,32.331,71.703,72.149,72.703c0.045,0,0.09,0,0.135,0h14.607c5.523,0,10-4.478,10-10 s-4.477-10-10-10h-14.38C43.557,252.055,20,228.308,20,199.352s23.557-52.608
        ,52.511-52.608c3.553,0,7.113,0.315,10.579,1.028 c9.324,1.919,17.467-2.438,20.26-10.818c7.433-22.311,27.638-37.313,50.276-37.313c0.656,0,1.448,0.048,2.287,0.104 c0.988,0.067,2.108,0.14,
        3.305,0.15c5.417,0.07,14.736-1.594,16.863-13.101c0.017-0.093,0.033-0.184,0.05-0.273 c9.621-30.613,37.626-51.169,69.752-51.169c40.319,0,73.121,32.802,73.121,73.121c0,6.921-1.015,13.929-3.017,
        20.828 c-1.617,5.57-0.35,9.625,0.998,12.046c2.924,5.253,8.22,6.733,10.214,7.29l0.275,0.077c22.334,6.439,37.934,27.374,37.934,50.637 c0,28.956-23.558,52.703-52.514,52.703h-20.281c-5.523,0-10,
        4.478-10,10s4.477,10,10,10h20.281 c39.984,0,72.514-32.72,72.514-72.703C385.407,168.397,365.402,140.481,336.344,130.546z"></path> </g> </g></svg>
      <h2>Rain Rate</h2>
    </div>
    <div class="gauge-container">
      <div class="gauge" :style="gaugeStyle">
        {{ currentReading?.rainRate?.toFixed(1) || '0' }} mm/h
      </div>
    </div>
    <div class="rate-status" :class="rateLevel">
      {{ rateStatus }}
    </div>
  </div>
</template>

<script setup>

import { ref, computed, onMounted, onUnmounted } from 'vue';
import { firebaseService } from '../services/firebaseService';

const currentReading = ref(null);
const unsubscribe = ref(null);

const rateLevel = computed(() => {
    const rate = currentReading.value?.rainRate || 0;
    if (rate > 50) return 'severe';
    if (rate > 30) return 'moderate';
    return 'light';
});

const rateStatus = computed(() => {
    const rate = currentReading.value?.rainRate || 0;
    if (rate > 50) return 'Severe Rainfall';
    if (rate > 30) return 'Moderate Rainfall';
    return 'Light Rainfall';
});

const gaugeStyle = computed(() => {
    const rate = currentReading.value?.rainRate || 0;
    const percentage = Math.min(rate / 100 * 100, 100);
    return {
        '--fill-percentage': `${percentage}%`
    };
});

onMounted(() => {
    unsubscribe.value = firebaseService.subscribeToCurrentReadings((data) => {
        currentReading.value = data?.STATION1 || null;
    });
});

onUnmounted(() => {
    if (unsubscribe.value) {
        unsubscribe.value();
    }
});
</script>