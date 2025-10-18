
import React from 'react';
import { List, RefreshCw, Expand } from 'lucide-react';
import { Card, CardAction } from '../Card';
import { LogEntry, LogType } from '../../types';

const logTypeClasses: Record<LogType, string> = {
    info: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    maintenance: 'text-purple-500',
};

interface SystemLogCardProps {
    logs: LogEntry[];
}

export const SystemLogCard: React.FC<SystemLogCardProps> = ({ logs }) => {
    return (
        <Card title="System Log" icon={<List />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="h-64 overflow-y-auto bg-gray-800 text-white p-3 rounded-lg font-mono text-sm">
                {logs.map((log, index) => (
                    <div key={index} className="border-b border-gray-700 pb-1 mb-1">
                        <span className="text-blue-400 mr-2">{log.time}</span>
                        <span className={logTypeClasses[log.type]}>{log.message}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
};
