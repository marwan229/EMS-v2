import React, { useMemo, useState, useEffect } from 'react';
import { DollarSign, Clock } from 'lucide-react';
import { Card } from '../Card';

interface RealTimePricingCardProps {
    monthlyConsumption: number;
}

const TARIFF_STRUCTURE = [
    { tier: 1, range: '0-50', rate: 0.58, serviceFee: 1 },
    { tier: 2, range: '51-100', rate: 0.68, serviceFee: 2 },
    { tier: 3, range: '101-200', rate: 0.83, serviceFee: 6 },
    { tier: 4, range: '201-350', rate: 1.25, serviceFee: 11, flat: true },
    { tier: 5, range: '351-650', rate: 1.40, serviceFee: 15, flat: true },
    { tier: 6, range: '651-1000', rate: 1.50, serviceFee: 25, flat: true },
    { tier: 7, range: '> 1000', rate: 1.65, serviceFee: 40, flat: true },
];

const TOU_PERIODS = {
  PEAK: { name: 'Peak', startHour: 17, endHour: 22, rate: 2.50, color: 'bg-red-500' },
  SHOULDER: { name: 'Shoulder', startHour: 13, endHour: 17, rate: 1.80, color: 'bg-yellow-500' },
  OFF_PEAK: { name: 'Off-Peak', startHour: 22, endHour: 13, rate: 1.20, color: 'bg-green-500' },
};

const getCurrentTouPeriod = (date: Date) => {
  const hour = date.getHours();
  if (hour >= TOU_PERIODS.PEAK.startHour && hour < TOU_PERIODS.PEAK.endHour) {
    return TOU_PERIODS.PEAK;
  }
  if (hour >= TOU_PERIODS.SHOULDER.startHour && hour < TOU_PERIODS.SHOULDER.endHour) {
    return TOU_PERIODS.SHOULDER;
  }
  // Note: For Off-Peak, the period crosses midnight. The logic works because hours are 0-23.
  // Any hour not in Peak or Shoulder falls into Off-Peak.
  return TOU_PERIODS.OFF_PEAK;
};


const calculateBill = (consumption: number) => {
    if (consumption <= 0) {
        return { tierName: 'N/A', totalBill: 0, effectiveRate: 0, serviceFee: 0 };
    }

    let tierInfo;
    let energyBill = 0;
    
    if (consumption <= 50) {
        tierInfo = TARIFF_STRUCTURE[0];
        energyBill = consumption * tierInfo.rate;
    } else if (consumption <= 100) {
        tierInfo = TARIFF_STRUCTURE[1];
        energyBill = (50 * TARIFF_STRUCTURE[0].rate) + ((consumption - 50) * tierInfo.rate);
    } else if (consumption <= 200) {
        tierInfo = TARIFF_STRUCTURE[2];
        energyBill = (50 * TARIFF_STRUCTURE[0].rate) + (50 * TARIFF_STRUCTURE[1].rate) + ((consumption - 100) * tierInfo.rate);
    } else if (consumption <= 350) {
        tierInfo = TARIFF_STRUCTURE[3];
        energyBill = consumption * tierInfo.rate;
    } else if (consumption <= 650) {
        tierInfo = TARIFF_STRUCTURE[4];
        energyBill = consumption * tierInfo.rate;
    } else if (consumption <= 1000) {
        tierInfo = TARIFF_STRUCTURE[5];
        energyBill = consumption * tierInfo.rate;
    } else {
        tierInfo = TARIFF_STRUCTURE[6];
        energyBill = consumption * tierInfo.rate;
    }

    const totalBill = energyBill + tierInfo.serviceFee;
    const effectiveRate = consumption > 0 ? totalBill / consumption : 0;
    
    return {
        tierName: `Tier ${tierInfo.tier} (${tierInfo.range} kWh)`,
        totalBill: totalBill,
        effectiveRate: effectiveRate,
        serviceFee: tierInfo.serviceFee
    };
};

const TariffRow: React.FC<{ tier: any; isCurrent: boolean }> = ({ tier, isCurrent }) => (
    <tr className={`text-center text-sm ${isCurrent ? 'bg-blue-100 font-bold' : ''}`}>
        <td className="py-2 px-1 border">{tier.tier}</td>
        <td className="py-2 px-1 border">{tier.range}</td>
        <td className="py-2 px-1 border">{(tier.rate).toFixed(2)} EGP</td>
        <td className="py-2 px-1 border">{tier.serviceFee} EGP</td>
    </tr>
);

export const RealTimePricingCard: React.FC<RealTimePricingCardProps> = ({ monthlyConsumption }) => {
    
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    const { tierName, totalBill, effectiveRate } = useMemo(() => calculateBill(monthlyConsumption), [monthlyConsumption]);
    const currentTouPeriod = useMemo(() => getCurrentTouPeriod(currentTime), [currentTime]);

    const currentTierNumber = parseInt(tierName.split(' ')[1] || '0', 10);
    const maxConsumptionForProgressBar = 1100;

    return (
        <Card title="Egyptian Electricity Tariff" icon={<DollarSign />}>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Estimated Bill</p>
                    <p className="text-xl font-bold text-gray-800">{totalBill.toFixed(2)} EGP</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Avg. Monthly Rate</p>
                    <p className="text-xl font-bold text-blue-600">{effectiveRate.toFixed(3)} EGP/kWh</p>
                </div>
            </div>

            <div className={`p-4 rounded-lg text-center text-white mb-4 shadow-lg transition-colors duration-500 ${currentTouPeriod.color}`}>
                <div className="flex justify-between items-center text-xs opacity-80 mb-2">
                    <span>Time-of-Use (TOU)</span>
                    <div className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {currentTime.toLocaleTimeString()}
                    </div>
                </div>
                <div className="font-bold text-4xl tracking-wider uppercase">
                    {currentTouPeriod.name}
                </div>
                <div className="text-2xl font-semibold mt-1">
                    {currentTouPeriod.rate.toFixed(2)} <span className="text-base opacity-90">EGP/kWh</span>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-gray-600 font-semibold">Monthly Consumption</span>
                    <span className="font-bold text-gray-800">{monthlyConsumption} / 1000+ kWh</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 relative">
                    <div className="bg-gradient-to-r from-green-400 to-red-500 h-4 rounded-full" style={{ width: `${Math.min(monthlyConsumption / maxConsumptionForProgressBar, 1) * 100}%` }}></div>
                </div>
                 <div className="text-center mt-2">
                    <p className="text-sm text-gray-600">You are in: <span className="font-bold text-blue-700">{tierName}</span></p>
                </div>
            </div>

             <div>
                <h4 className="font-semibold text-gray-700 mb-2 text-center">Residential Tariff Structure (EGP)</h4>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-xs text-gray-600">
                            <th className="py-2 px-1 border">Tier</th>
                            <th className="py-2 px-1 border">Range (kWh)</th>
                            <th className="py-2 px-1 border">Rate/kWh</th>
                            <th className="py-2 px-1 border">Service Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TARIFF_STRUCTURE.map(tier => (
                            <TariffRow key={tier.tier} tier={tier} isCurrent={tier.tier === currentTierNumber} />
                        ))}
                    </tbody>
                </table>
             </div>
        </Card>
    );
};