
import React from 'react';
import { Shield, RefreshCw, Expand } from 'lucide-react';
import { Card, CardAction } from '../Card';

const ThreatItem: React.FC<{ level: string; details: string; }> = ({ level, details }) => (
    <div className="bg-gray-50 p-3 rounded-lg text-center">
        <p className="font-semibold text-gray-700">{level}</p>
        <p className="text-green-500 font-bold text-sm">MITIGATED</p>
        <p className="text-xs text-gray-500">{details}</p>
    </div>
);

export const SecurityStatusCard: React.FC = () => {
    return (
        <Card title="Security Status" icon={<Shield />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Threat Detection</p>
                    <p className="text-2xl font-bold text-green-500">100%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Response Time</p>
                    <p className="text-2xl font-bold text-gray-800">0.45ms</p>
                </div>
            </div>
            <h4 className="mt-4 mb-2 font-semibold text-gray-600">Threat Matrix</h4>
            <div className="grid grid-cols-2 gap-4">
                <ThreatItem level="Replay Attacks" details="0.12ms response" />
                <ThreatItem level="Device Spoofing" details="0.08ms response" />
                <ThreatItem level="Data Injection" details="0.34ms response" />
                <ThreatItem level="DoS Attacks" details="1.0s recovery" />
            </div>
        </Card>
    );
};
