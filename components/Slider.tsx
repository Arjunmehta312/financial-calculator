import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 20px;
`;

const StyledThumb = styled.div`
  height: 24px;
  line-height: 24px;
  width: 24px;
  text-align: center;
  background-color: #6200ea;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
  top: -2px;
  outline: none;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 0 0 8px rgba(98, 0, 234, 0.1);
  }

  &:active {
    cursor: grabbing;
  }
`;

const StyledTrack = styled.div<{ index: number }>`
  top: 0;
  bottom: 0;
  background: ${props => (props.index === 0 ? '#6200ea' : '#e0e0e0')};
  border-radius: 999px;
`;

const InputBox = styled.input`
  width: 80px;
  padding: 4px 8px;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  color: #333;
  background-color: #fff;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6200ea;
  }
`;

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  formatLabel?: (value: number) => string;
}

const Thumb = (props: any) => <StyledThumb {...props} />;
const Track = (props: any, state: any) => <StyledTrack {...props} index={state.index} />;

const Slider: React.FC<SliderProps> = ({ min, max, value, onChange, step = 1, formatLabel }) => {
  const [inputValue, setInputValue] = useState(formatLabel ? formatLabel(value) : value.toString());

  useEffect(() => {
    setInputValue(formatLabel ? formatLabel(value) : value.toString());
  }, [value, formatLabel]);

  const handleSliderChange = (newValue: number | readonly number[], index: number) => {
    if (typeof newValue === 'number') {
      onChange(newValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);

    // Remove currency symbol and commas for parsing
    const numericValue = parseFloat(newInputValue.replace(/[^0-9.-]+/g, ""));

    if (!isNaN(numericValue) && numericValue >= min && numericValue <= max) {
      onChange(numericValue);
    }
  };

  const handleInputBlur = () => {
    setInputValue(formatLabel ? formatLabel(value) : value.toString());
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <StyledSlider
        min={min}
        max={max}
        value={value}
        onChange={handleSliderChange}
        step={step}
        renderTrack={Track}
        renderThumb={Thumb}
      />
      <InputBox
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        aria-label="Slider value"
      />
    </div>
  );
};

export default Slider;