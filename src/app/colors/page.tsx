'use client';
import { useState } from 'react';

const colors = {
  gray: {
    100: '#e1e1e6',
    200: '#a9a9b2',
    400: '#7c7c8a',
    500: '#505059',
    600: '#323238',
    700: '#29292e',
    800: '#202024',
    900: '#121214',
  },
  cosmic: {
    blueCosmic: '#0d1b2a',
    purpleNebula: '#5e2bff',
    blueStellar: '#1b6ca8',
    pinkGalactic: '#ff4f8b',
    whiteCelestial: '#f8f9fa',
    yellowSolar: '#ffd700',
  },
  additional: {
    greenDeepSpace: '#0d3b2e',
    redComet: '#d55c5c',
    purpleStarDust: '#a34dff',
    blackHole: '#111111',
    blueNebula: '#3d67a6',
    orangeSupernova: '#ff6f20',
    grayCosmicFog: '#b1afa1',
    grayAsteroid: '#8a8a8a',
    silverGalactic: '#c0c0c0',
  },
  theme: {
    primary: '#0d1b2a',
    primaryContrast: '#f8f9fa',
    secondary: '#5e2bff',
    secondaryContrast: '#ffffff',
    accent: '#ffd700',
    background: '#202024',
    paper: '#29292e',
    text: '#f8f9fa',
    textMuted: '#a9a9b2',
    textError: '#d55c5c',
    buttonPrimary: '#ffd700',
    buttonPrimaryHover: '#ff6f20',
    buttonSecondary: '#5e2bff',
    buttonSecondaryHover: '#3d67a6',
    success: '#0d3b2e',
    warning: '#ff6f20',
    error: '#d55c5c',
    border: '#8a8a8a',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
};

type Palette = {
  background: string;
  primary: string;
  secondary?: string;
  accent: string;
  text: string;
  error?: string;
};

type Palettes = Record<string, Palette>;

const palettes: Palettes = {
  'Espaço Profundo': {
    background: '#0d1b2a',
    primary: '#5e2bff',
    accent: '#ffd700',
    text: '#f8f9fa',
    error: '#d55c5c',
  },
  Supernova: {
    background: '#121214',
    primary: '#ff6f20',
    secondary: '#ff4f8b',
    accent: '#a34dff',
    text: '#f8f9fa',
  },
  'Nebulosa Estelar': {
    background: '#202024',
    primary: '#1b6ca8',
    secondary: '#5e2bff',
    accent: '#ffd700',
    text: '#e1e1e6',
  },
};

// Map to translate hex codes to descriptive color names
const colorNameMap: Record<string, string> = {
  // Gray scale
  '#e1e1e6': 'Gray 100',
  '#a9a9b2': 'Gray 200',
  '#7c7c8a': 'Gray 400',
  '#505059': 'Gray 500',
  '#323238': 'Gray 600',
  '#29292e': 'Gray 700',
  '#202024': 'Gray 800',
  '#121214': 'Gray 900',

  // Cosmic colors
  '#0d1b2a': 'Blue Cosmic',
  '#5e2bff': 'Purple Nebula',
  '#1b6ca8': 'Blue Stellar',
  '#ff4f8b': 'Pink Galactic',
  '#f8f9fa': 'White Celestial',
  '#ffd700': 'Yellow Solar',

  // Additional colors
  '#0d3b2e': 'Green Deep Space',
  '#d55c5c': 'Red Comet',
  '#a34dff': 'Purple Star Dust',
  '#111111': 'Black Hole',
  '#3d67a6': 'Blue Nebula',
  '#ff6f20': 'Orange Supernova',
  '#b1afa1': 'Gray Cosmic Fog',
  '#8a8a8a': 'Gray Asteroid',
  '#c0c0c0': 'Silver Galactic',
};

const getColorName = (hex: string): string => {
  return colorNameMap[hex] || hex;
};

function getTextColor(hex: string) {
  // Converte a cor hex para RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Calcula a luminância relativa
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Define a cor do texto com base na luminância
  return luminance > 0.5 ? '#000' : '#fff';
}

const PalettePreview = ({ palette }: { palette: Palette }) => {
  return (
    <div className="flex w-full flex-col space-y-4">
      {/* Header */}
      <div
        className="rounded-t-lg p-4"
        style={{
          backgroundColor: palette.primary,
          color: getTextColor(palette.primary),
        }}
      >
        <h3 className="font-bold">Header Area</h3>
      </div>

      {/* Main content */}
      <div
        className="flex flex-1 flex-col space-y-4 rounded-lg p-4"
        style={{ backgroundColor: palette.background, color: palette.text }}
      >
        <h4 className="text-lg font-semibold">Main Content</h4>
        <p className="text-sm">
          This is how text appears on your background color.
        </p>

        {/* Buttons row - Fixed for mobile */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            className="rounded-md px-3 py-2 text-xs font-medium sm:text-sm"
            style={{
              backgroundColor: palette.primary,
              color: getTextColor(palette.primary),
            }}
          >
            Primary
          </button>

          {palette.secondary && (
            <button
              className="rounded-md px-3 py-2 text-xs font-medium sm:text-sm"
              style={{
                backgroundColor: palette.secondary,
                color: getTextColor(palette.secondary),
              }}
            >
              Secondary
            </button>
          )}

          <button
            className="rounded-md px-3 py-2 text-xs font-medium sm:text-sm"
            style={{
              backgroundColor: palette.accent,
              color: getTextColor(palette.accent),
            }}
          >
            Accent
          </button>
        </div>

        {/* Alert box */}
        {palette.error && (
          <div
            className="mt-4 rounded-md p-3 text-sm"
            style={{
              backgroundColor: palette.error,
              color: getTextColor(palette.error),
            }}
          >
            This is how error messages would appear.
          </div>
        )}
      </div>
    </div>
  );
};

// Component to display a color palette with visual representations and previews
const PaletteDisplay = ({
  name,
  palette,
}: {
  name: string;
  palette: Palette;
}) => {
  const [showColorDetail, setShowColorDetail] = useState(false);

  return (
    <div className="mb-8 overflow-hidden rounded-lg border border-gray-700">
      <div
        className="p-3 sm:p-5"
        style={{ backgroundColor: palette.background }}
      >
        <h3 className="mb-4 text-xl font-bold" style={{ color: palette.text }}>
          {name}
        </h3>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Colors List */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h4 style={{ color: palette.text }} className="font-medium">
                Colors
              </h4>
              <button
                className="rounded px-2 py-1 text-xs"
                style={{
                  backgroundColor: palette.primary,
                  color: getTextColor(palette.primary),
                }}
                onClick={() => setShowColorDetail(!showColorDetail)}
              >
                {showColorDetail ? 'Hide Details' : 'View Details'}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {Object.entries(palette).map(([colorRole, hexValue]) => (
                <div
                  key={colorRole}
                  className="rounded-md p-3 transition-all duration-200 hover:shadow-lg"
                  style={{
                    backgroundColor: hexValue,
                    color: getTextColor(hexValue),
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  <p className="mb-1 text-sm font-medium break-words capitalize">
                    {colorRole}
                  </p>
                  <p className="text-xs opacity-80">{getColorName(hexValue)}</p>

                  {showColorDetail && (
                    <div
                      className="border-opacity-20 mt-2 border-t pt-2"
                      style={{ borderColor: getTextColor(hexValue) }}
                    >
                      <p className="text-xs break-all opacity-75">{hexValue}</p>
                      <p className="text-xs opacity-75">
                        RGB:{' '}
                        {hexValue
                          .replace(/^#/, '')
                          .match(/.{2}/g)
                          ?.map(x => parseInt(x, 16))
                          .join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* UI Preview */}
          <div>
            <h4 style={{ color: palette.text }} className="mb-3 font-medium">
              UI Preview
            </h4>
            <PalettePreview palette={palette} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-3 text-white sm:p-6">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">Color Palette</h1>

      {/* Display individual colors by category */}
      {Object.entries(colors).map(([category, shades]) => (
        <div key={category} className="mb-8">
          <h2 className="mb-4 text-xl font-semibold capitalize sm:text-2xl">
            {category}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {Object.entries(shades).map(([name, hex]) => (
              <div
                key={name}
                className="rounded-lg p-3 shadow-md transition-transform duration-200 hover:scale-105 sm:p-4"
                style={{ backgroundColor: hex }}
              >
                <p
                  className="text-center text-sm font-medium break-words"
                  style={{ color: getTextColor(hex) }}
                >
                  {name}
                </p>
                <p
                  className="mt-1 text-center text-xs"
                  style={{ color: getTextColor(hex) }}
                >
                  {hex}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Display predefined palettes section */}
      <div className="mt-12 mb-8">
        <h2 className="mb-6 text-xl font-semibold sm:text-2xl">
          Predefined Palettes
        </h2>

        {Object.entries(palettes).map(([name, palette]) => (
          <PaletteDisplay key={name} name={name} palette={palette} />
        ))}
      </div>
    </div>
  );
}
