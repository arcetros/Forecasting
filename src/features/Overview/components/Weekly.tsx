import { useState } from 'react';
import { useSelector } from '@/store';
import { getLocalTime } from '@/helpers';
import { DetailedInfo } from './DetailedInfo';
import { WeeklyChart } from './WeeklyChart';

const tabTypes = ['Chart', 'Detailed Info'];

export function Weekly() {
  const [activeTab, setActiveTab] = useState(tabTypes[0]);
  const { forecasts } = useSelector((state) => state.weather);
  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-md py-8">
      <div className="mb-4 border-b-2 border-gray-300 w-full">
        <div className="flex flex-col md:flex-row mx-8 pb-8 justify-between items-start">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-base md:text-lg text-gray-600 font-bold ">Average Weekly Overview</h1>
            <span className="text-xs lg:text-sm text-gray-400">
              showing data from {getLocalTime(forecasts?.daily[0]?.dt, forecasts?.timezone).format('dddd')} to{' '}
              {getLocalTime(forecasts?.daily[6]?.dt, forecasts?.timezone).format('dddd')}
            </span>
          </div>
          <ul className="relative flex w-full md:w-1/3 mt-auto">
            {tabTypes.map((item, i) => (
              <li
                key={i}
                className="relative flex-1 text-center cursor-pointer"
                onClick={() => setActiveTab(item)}
                aria-hidden
              >
                {item}
                {activeTab === item && <div className="w-full h-1 absolute -bottom-8 md:-bottom-9 bg-blue-500" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {activeTab === 'Chart' && <WeeklyChart />}
      {activeTab === 'Detailed Info' && <DetailedInfo />}
    </div>
  );
}