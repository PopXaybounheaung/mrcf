// src/services/firebaseService.js
import { ref, set, get, query, orderByChild, limitToLast, onValue } from 'firebase/database';
import { db } from '../firebase/config';

const calculateAlertLevel = (waterLevel, rainRate) => {
    if (waterLevel > 5 || rainRate > 50) return 'danger';
    if (waterLevel > 3 || rainRate > 30) return 'warning';
    return 'normal';
};

export const firebaseService = {
    async postReading(stationId, waterLevel, rainRate, location) {
        const timestamp = Date.now();
        const alertLevel = calculateAlertLevel(waterLevel, rainRate);
        
        try {
            await set(ref(db, `readings/${stationId}/${timestamp}`), {
                waterLevel,
                rainRate,
                location,
                alertLevel,
                timestamp
            });

            await set(ref(db, `currentStatus/${stationId}`), {
                waterLevel,
                rainRate,
                location,
                alertLevel,
                timestamp
            });

            return { success: true };
        } catch (error) {
            console.error('Error posting reading:', error);
            throw error;
        }
    },

    subscribeToCurrentReadings(callback) {
        const currentStatusRef = ref(db, 'currentStatus');
        return onValue(currentStatusRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    },

    subscribeToAlerts(callback) {
        const alertsQuery = query(
            ref(db, 'currentStatus'),
            orderByChild('alertLevel')
        );

        return onValue(alertsQuery, (snapshot) => {
            const data = snapshot.val();
            const alerts = Object.entries(data || {})
                .map(([stationId, reading]) => ({
                    stationId,
                    ...reading
                }))
                .filter(reading => 
                    reading.alertLevel === 'warning' || 
                    reading.alertLevel === 'danger'
                );
            callback(alerts);
        });
    },

    async getStationHistory(stationId, hours = 24) {
        const startTime = Date.now() - (hours * 60 * 60 * 1000);
        const historyQuery = query(
            ref(db, `readings/${stationId}`),
            orderByChild('timestamp'),
            limitToLast(100)
        );

        try {
            const snapshot = await get(historyQuery);
            const data = snapshot.val();
            return Object.values(data || {})
                .filter(reading => reading.timestamp >= startTime)
                .sort((a, b) => a.timestamp - b.timestamp);
        } catch (error) {
            console.error('Error fetching history:', error);
            throw error;
        }
    }
};