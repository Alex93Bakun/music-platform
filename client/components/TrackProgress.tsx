import React from 'react';

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e: any) => void;
    controlType: string;
}

const TrackProgress: React.FC<TrackProgressProps> = ({
    left,
    right,
    onChange,
    controlType,
}) => {
    const formatTime = (timestamp: number) => {
        const minutes = Math.floor(timestamp / 60);
        const seconds =
            Math.floor(timestamp % 60) > 9
                ? Math.floor(timestamp % 60)
                : `0${Math.floor(timestamp % 60)}`;
        return `${minutes}:${seconds}`;
    };

    return (
        <div style={{ display: 'flex' }}>
            <input
                type="range"
                min={0}
                max={right}
                step={1}
                value={left}
                onChange={onChange}
            />
            {controlType === 'time' && (
                <div>
                    {formatTime(left)} / {formatTime(right)}
                </div>
            )}
        </div>
    );
};

export default TrackProgress;
