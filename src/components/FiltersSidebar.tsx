import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { filterSections, priceRange } from '@/data/filters';

interface ColorSwatchProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ label, selected, onClick }) => {
  const colorMap: { [key: string]: string } = {
    'ροζ': 'bg-pink-400',
    'άσπρο': 'bg-white border-2 border-gray-300',
    'γκρι': 'bg-gray-400',
    'μαύρο': 'bg-black',
    'μπλε': 'bg-blue-500',
    'κόκκινο': 'bg-red-500',
    'πράσινο': 'bg-green-500',
    'κίτρινο': 'bg-yellow-400',
    'μωβ': 'bg-purple-500',
    'πορτοκαλί': 'bg-orange-500',
    'καφέ': 'bg-amber-800',
    'μπεζ': 'bg-amber-200',
    'ναβί': 'bg-blue-900',
    'κρέμ': 'bg-yellow-100',
    'πολύχρωμο': 'bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400'
  };

  return (
    <div className="flex items-center space-x-2 py-1">
      <div
        className={`w-4 h-4 rounded-full cursor-pointer ${colorMap[label] || 'bg-gray-300'} ${
          selected ? 'ring-2 ring-teal-500 ring-offset-1' : ''
        }`}
        onClick={onClick}
      />
      <span className="text-sm text-gray-700 cursor-pointer" onClick={onClick}>
        {label}
      </span>
    </div>
  );
};

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ min, max, value, onChange }) => {
  if (!value || value.length !== 2) return null;

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-600">
        <span>{value[0].toFixed(2)}€</span>
        <span>{value[1].toFixed(2)}€</span>
      </div>
      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-teal-500 rounded-full"
            style={{
              marginLeft: `${((value[0] - min) / (max - min)) * 100}%`,
              width: `${((value[1] - value[0]) / (max - min)) * 100}%`
            }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value[0]}
          onChange={(e) => onChange([Number(e.target.value), value[1]])}
          className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value[1]}
          onChange={(e) => onChange([value[0], Number(e.target.value)])}
          className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export const FiltersSidebar: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const defaultRange: [number, number] =
    priceRange?.current && Array.isArray(priceRange.current)
      ? priceRange.current
      : [priceRange?.min ?? 0, priceRange?.max ?? 100];

  const [priceValue, setPriceValue] = useState<[number, number]>(defaultRange);

  const handleFilterChange = (sectionId: string, optionId: string, checked: boolean) => {
    setSelectedFilters(prev => ({
      ...prev,
      [sectionId]: checked
        ? [...(prev[sectionId] || []), optionId]
        : (prev[sectionId] || []).filter(id => id !== optionId)
    }));
  };

  const handleColorChange = (colorId: string) => {
    setSelectedColors(prev =>
      prev.includes(colorId)
        ? prev.filter(id => id !== colorId)
        : [...prev, colorId]
    );
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Φίλτρα</h2>
        <button className="text-sm text-teal-600 hover:text-teal-700">
          Καθαρισμός
        </button>
      </div>

      {filterSections.map(section => (
        <div key={section.id} className="space-y-3">
          <h3 className="font-medium text-gray-900">{section.title}</h3>

          {section.type === 'checkbox' && (
            <div className="space-y-2">
              {section.options.map(option => (
                <Checkbox
                  key={option.id}
                  id={`${section.id}-${option.id}`}
                  label={option.count ? `${option.label} (${option.count})` : option.label}
                  checked={selectedFilters[section.id]?.includes(option.id) || false}
                  onChange={(checked) => handleFilterChange(section.id, option.id, checked)}
                />
              ))}
            </div>
          )}

          {section.type === 'color' && (
            <div className="space-y-1">
              {section.options.map(option => (
                <ColorSwatch
                  key={option.id}
                  label={option.label}
                  selected={selectedColors.includes(option.id)}
                  onClick={() => handleColorChange(option.id)}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Price Range */}
      <div className="space-y-3">
        <h3 className="font-medium text-gray-900">Τιμή:</h3>
        <PriceRangeSlider
          min={priceRange.min}
          max={priceRange.max}
          value={priceValue}
          onChange={setPriceValue}
        />
      </div>
    </div>
  );
};
