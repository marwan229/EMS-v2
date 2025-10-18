import React, { useState, useCallback, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { StatusIndicators } from './components/StatusIndicators';
import { AlertBar } from './components/AlertBar';
import { MainContent } from './components/MainContent';
import { Controls } from './components/Controls';
import { LogEntry, LogType } from './types';

const App: React.FC = () => {
    const [batteryLevel, setBatteryLevel] = useState(65);
    const [alert, setAlert] = useState({
        show: true,
        message: 'Warning: Wind turbine output has dropped below expected levels.',
    });
    const [logs, setLogs] = useState<LogEntry[]>([
        { time: '10:45:32', message: 'System operating normally. All parameters within range.', type: 'info' },
        { time: '10:42:18', message: 'Wind speed decreased. Output reduced by 3.1%.', type: 'warning' },
        { time: '10:40:05', message: 'PV output increased due to improved irradiance.', type: 'info' },
        { time: '10:38:22', message: 'Predictive maintenance: Wind turbine bearing inspection recommended.', type: 'maintenance' },
        { time: '10:35:57', message: 'Fuel cell stack efficiency optimized.', type: 'info' },
    ]);
    const [monthlyConsumption, setMonthlyConsumption] = useState(450); // Initial consumption in kWh

    const addLogEntry = useCallback((message: string, type: LogType) => {
        const newLog = {
            time: new Date().toLocaleTimeString(),
            message,
            type,
        };
        setLogs(prevLogs => [newLog, ...prevLogs.slice(0, 9)]);
    }, []);
    
    const handleBatteryUpdate = useCallback((level: number) => {
        setBatteryLevel(level);
        addLogEntry(`Battery level updated to ${level}%`, 'info');
    }, [addLogEntry]);

    const handleSimulateFault = useCallback(() => {
        setAlert({ show: true, message: 'Warning: Simulated grid instability detected. Switching to island mode.' });
        addLogEntry('Simulated grid fault detected. System operating in island mode.', 'warning');
    }, [addLogEntry]);

    const handleConsumptionUpdate = useCallback((increment: number) => {
        setMonthlyConsumption(prev => prev + increment);
        addLogEntry(`Monthly consumption simulated. Increased by ${increment} kWh.`, 'info');
    }, [addLogEntry]);

    const handleReset = useCallback(() => {
        setBatteryLevel(65);
        setAlert({ show: true, message: 'Warning: Wind turbine output has dropped below expected levels.' });
        addLogEntry('System reset to initial state.', 'info');
        setMonthlyConsumption(450); // Reset consumption
    }, [addLogEntry]);


    return (
        <div className="container mx-auto p-4 md:p-6 max-w-[1800px]">
            <Header />
            <StatusIndicators batteryLevel={batteryLevel} />
            <AlertBar alert={alert} setAlert={setAlert} />
            <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
                <Sidebar />
                <MainContent batteryLevel={batteryLevel} logs={logs} monthlyConsumption={monthlyConsumption} />
            </div>
            <Controls
                onBatteryUpdate={handleBatteryUpdate}
                onSimulateFault={handleSimulateFault}
                onReset={handleReset}
                addLogEntry={addLogEntry}
                onConsumptionUpdate={handleConsumptionUpdate}
            />
        </div>
    );
};

export default App;