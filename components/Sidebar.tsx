import React, { useState } from 'react';
// Fix: Replaced SolarPanel with SunMedium as it was not found in the module.
import { Zap, Gauge, Sliders, LineChart, Shield, BatteryFull, SunMedium, TowerControl, DollarSign, Leaf, Wrench, Settings, History, AlertTriangle } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  notificationCount?: number;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, notificationCount, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-all duration-300 relative group ${
        active
          ? 'bg-blue-600 text-white shadow-lg -mr-4'
          : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600 hover:translate-x-2'
      }`}
    >
      {active && <div className="absolute left-0 top-0 h-full w-1 bg-white rounded-r-full"></div>}
      {icon}
      <span className="ml-3 font-medium">{label}</span>
      {notificationCount && (
        <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {notificationCount}
        </span>
      )}
    </div>
  );
};

export const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { icon: <Gauge size={20} />, label: 'Dashboard' },
    { icon: <Sliders size={20} />, label: 'Control Panel' },
    { icon: <LineChart size={20} />, label: 'Analytics' },
    { icon: <Shield size={20} />, label: 'Security' },
    { icon: <BatteryFull size={20} />, label: 'Battery Management' },
    // Fix: Replaced SolarPanel with SunMedium.
    { icon: <SunMedium size={20} />, label: 'Renewable Sources' },
    { icon: <TowerControl size={20} />, label: 'Grid Interface' },
    { icon: <DollarSign size={20} />, label: 'Cost Analysis' },
    { icon: <Leaf size={20} />, label: 'Environmental' },
    { icon: <Wrench size={20} />, label: 'Maintenance' },
    { icon: <Settings size={20} />, label: 'System Settings' },
    { icon: <History size={20} />, label: 'Historical Data' },
    { icon: <AlertTriangle size={20} />, label: 'Alerts & Logs', notificationCount: 3 },
  ];

  return (
    <aside className="bg-white rounded-xl p-4 shadow-lg hidden lg:block glassmorphism">
      <div className="flex items-center text-xl font-semibold mb-5 pb-4 border-b border-gray-200 text-gray-800">
        <Zap className="text-blue-500 mr-2" />
        EMS Model 3
      </div>
      <nav>
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.label}
            notificationCount={item.notificationCount}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </nav>
    </aside>
  );
};