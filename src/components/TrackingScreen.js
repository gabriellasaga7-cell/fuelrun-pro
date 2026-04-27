import React from 'react';
import { IoMdWalk, IoMdFitness, IoMdSpeedometer, IoMdFlame, IoMdHeart, IoMdPause } from 'react-icons/io';

const TrackingCard = ({ icon: Icon, title, value, unit }) => (
  <div className="bg-fr-card p-4 rounded-xl border border-fr-border flex flex-col items-center">
    <div className="flex items-center gap-2 text-fr-gray-text mb-1">
      <Icon className="text-lg" />
      <span className="text-sm font-medium tracking-tight">{title}</span>
    </div>
    <div className="flex items-end gap-1">
      <span className="text-4xl font-bold">{value}</span>
      <span className="text-xl font-medium text-fr-gray-text pb-1">{unit}</span>
    </div>
  </div>
);

const ActivitySelector = ({ icon: Icon, name, active }) => (
  <div className={`flex flex-col items-center gap-1 p-2 rounded-lg border w-16 ${active ? 'border-fr-green text-fr-green bg-fr-accent-dim/20' : 'border-fr-border text-fr-gray-text bg-black/10'}`}> 
    <Icon className="text-2xl" />
    <span className="text-[10px] font-semibold">{name}</span>
  </div>
);

const TrackingScreen = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">FuelRun Pro</h1>

      <div className="flex justify-around bg-fr-card p-3 rounded-2xl border border-fr-border">
        <ActivitySelector icon={IoMdWalk} name="WALK" />
        <ActivitySelector icon={IoMdFitness} name="JOG" />
        <ActivitySelector icon={IoMdFlame} name="RUN" active />
        <ActivitySelector icon={IoMdSpeedometer} name="BIKE" />
        <ActivitySelector icon={IoMdPause} name="HIKE" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TrackingCard icon={IoMdWalk} title="DISTANCE" value="0.00" unit="km" />
        <TrackingCard icon={IoMdSpeedometer} title="PACE" value="--:--" unit="/km" />
        <TrackingCard icon={IoMdFlame} title="CALORIES" value="0" unit="kcal" />
        <TrackingCard icon={IoMdHeart} title="HEART RATE" value="65" unit="bpm" />
      </div>

      <div className="flex gap-4">
        <div className="bg-fr-card p-3 rounded-lg flex-grow border border-fr-border text-center">
          <div className="text-xs text-fr-gray-text">CURRENT</div>
          <div className="text-2xl font-bold">0.0<span className="text-lg text-fr-gray-text">km/h</span></div>
        </div>
        <div className="bg-fr-card p-3 rounded-lg flex-grow border border-fr-border text-center">
          <div className="text-xs text-fr-gray-text">AVG</div>
          <div className="text-2xl font-bold">0.0<span className="text-lg text-fr-gray-text">km/h</span></div>
        </div>
        <div className="bg-fr-card p-3 rounded-lg flex-grow border border-fr-border text-center">
          <div className="text-xs text-fr-gray-text">MAX</div>
          <div className="text-2xl font-bold">0.0<span className="text-lg text-fr-gray-text">km/h</span></div>
        </div>
      </div>

      <button className="w-full bg-fr-green hover:bg-emerald-600 text-white font-bold py-4 rounded-full text-lg shadow-lg">
        Start Run
      </button>
    </div>
  );
};

export default TrackingScreen;