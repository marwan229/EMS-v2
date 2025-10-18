import React from 'react';
import { PieChart as ChartIcon, RefreshCw, Expand } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { Card, CardAction } from '../Card';

const data = [
  { name: 'Renewable', value: 64.2 },
  { name: 'Fuel Cell', value: 24.7 },
  { name: 'Grid Import', value: 11.1 },
];
const COLORS = ['#3498db', '#1abc9c', '#e67e22'];

export const EnergyDistributionCard: React.FC = () => {
    return (
        <Card title="Energy Distribution" icon={<ChartIcon />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            // Fix: Explicitly convert 'percent' to a number before multiplication to prevent type errors.
                            label={({ name, percent }) => `${name} ${(Number(percent ?? 0) * 100).toFixed(0)}%`}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend wrapperStyle={{fontSize: "14px"}}/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
