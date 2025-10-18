
import React from 'react';
import { Zap, RefreshCw, Expand, CheckCircle, Bolt } from 'lucide-react';
import { Card, CardAction } from '../Card';

export const DemandResponseCard: React.FC = () => {
    return (
        <Card title="Demand Response" icon={<Zap />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="space-y-4">
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="text-green-500 mr-3" />
                    <div>
                        <p className="font-semibold text-green-800">Program Active</p>
                        <p className="text-sm text-green-700">Enrolled in GridFlex DR</p>
                    </div>
                </div>
                <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                    <Bolt className="text-yellow-500 mr-3" />
                    <div>
                        <p className="font-semibold text-yellow-800">Load Flexibility</p>
                        <p className="text-sm text-yellow-700">8.7 kW available for shedding</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                     <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <p className="text-sm text-gray-500">DR Events (Month)</p>
                        <p className="text-xl font-bold text-gray-800">2</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <p className="text-sm text-gray-500">Incentives Earned</p>
                        <p className="text-xl font-bold text-green-600">$145</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};
