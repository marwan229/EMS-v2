
import React from 'react';
import { Wrench, RefreshCw, Expand, AlertTriangle, Info } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Card, CardAction } from '../Card';

const data = [
  { subject: 'PV System', A: 96, fullMark: 100 },
  { subject: 'Wind System', A: 84, fullMark: 100 },
  { subject: 'Fuel Cell', A: 92, fullMark: 100 },
  { subject: 'Battery', A: 88, fullMark: 100 },
  { subject: 'Grid Interface', A: 95, fullMark: 100 },
];

const MaintenanceAlert: React.FC<{ icon: React.ReactNode; text: string; color: string; }> = ({icon, text, color}) => (
    <div className={`flex items-center p-3 rounded-lg mb-2 ${color}`}>
        {icon}
        <span className="ml-2 text-sm">{text}</span>
    </div>
)

export const PredictiveMaintenanceCard: React.FC = () => {
    return (
        <Card title="Predictive Maintenance" icon={<Wrench />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <MaintenanceAlert icon={<AlertTriangle size={20} />} text="Wind turbine bearing requires inspection" color="bg-red-100 text-red-800"/>
            <MaintenanceAlert icon={<Info size={20} />} text="PV panel cleaning recommended in 12 days" color="bg-yellow-100 text-yellow-800"/>
            
            <div className="h-56 mt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" tick={{fontSize: 12}}/>
                        <PolarRadiusAxis angle={30} domain={[50, 100]} />
                        <Radar name="System Health" dataKey="A" stroke="#8e44ad" fill="#8e44ad" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
