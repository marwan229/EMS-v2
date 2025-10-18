import React from 'react';
import { PVSystemCard, WindSystemCard, FuelCellCard, BatterySystemCard, PowerTrendCard, GridInterfaceCard, EnergyCostCard, CarbonFootprintCard, PredictiveMaintenanceCard, EnergyForecastCard, WeatherCard, SecurityStatusCard, SystemLogCard, LoadManagementCard, EnergyDistributionCard, RealTimePricingCard, PeakDemandCard, StorageOptimizationCard, EquipmentEfficiencyCard, DemandResponseCard, RenewableIntegrationCard, PowerQualityCard, HistoricalPerformanceCard, PowerFlowDiagram, AIInsightsCard } from './cards';
import { LogEntry } from '../types';

interface MainContentProps {
    batteryLevel: number;
    logs: LogEntry[];
    monthlyConsumption: number;
}

export const MainContent: React.FC<MainContentProps> = ({ batteryLevel, logs, monthlyConsumption }) => {
    return (
        <main className="grid grid-cols-12 gap-6">
             {/* Row 1: Core Generation & Storage */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3"><PVSystemCard /></div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3"><WindSystemCard /></div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3"><FuelCellCard /></div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3"><BatterySystemCard batteryLevel={batteryLevel} /></div>

            {/* Row 2: AI Insights */}
            <div className="col-span-12"><AIInsightsCard /></div>

            {/* Row 3: Power & Grid */}
            <div className="col-span-12 lg:col-span-8"><PowerTrendCard /></div>
            <div className="col-span-12 lg:col-span-4"><GridInterfaceCard /></div>
            
            {/* Row 4: New Economic Features */}
            <div className="col-span-12 lg:col-span-4"><RealTimePricingCard monthlyConsumption={monthlyConsumption} /></div>
            <div className="col-span-12 lg:col-span-4"><PeakDemandCard /></div>
            <div className="col-span-12 lg:col-span-4"><StorageOptimizationCard /></div>

            {/* Row 5: New Operational Features */}
            <div className="col-span-12 lg:col-span-4"><EquipmentEfficiencyCard /></div>
            <div className="col-span-12 lg:col-span-4"><DemandResponseCard /></div>
            <div className="col-span-12 lg:col-span-4"><RenewableIntegrationCard /></div>
            
            {/* Row 6: Financial & Environmental */}
            <div className="col-span-12 lg:col-span-4"><EnergyCostCard /></div>
            <div className="col-span-12 lg:col-span-4"><CarbonFootprintCard /></div>
            <div className="col-span-12 lg:col-span-4"><PowerQualityCard /></div>
            
            {/* Row 7: Performance & Maintenance */}
            <div className="col-span-12 lg:col-span-6"><HistoricalPerformanceCard /></div>
            <div className="col-span-12 lg:col-span-6"><PredictiveMaintenanceCard /></div>

            {/* Row 8: Forecasting */}
            <div className="col-span-12 lg:col-span-6"><EnergyForecastCard /></div>
            <div className="col-span-12 lg:col-span-6"><WeatherCard /></div>

            {/* Row 9: System & Logs */}
            <div className="col-span-12 lg:col-span-6"><SecurityStatusCard /></div>
            <div className="col-span-12 lg:col-span-6"><SystemLogCard logs={logs} /></div>

            {/* Row 10: Load & Distribution */}
            <div className="col-span-12 lg:col-span-6"><LoadManagementCard /></div>
            <div className="col-span-12 lg:col-span-6"><EnergyDistributionCard /></div>

            {/* Row 11: System Diagram */}
            <div className="col-span-12"><PowerFlowDiagram /></div>
        </main>
    );
};