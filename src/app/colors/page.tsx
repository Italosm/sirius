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
    blue: '#0d1b2a',
    purple: '#5e2bff',
    stellarBlue: '#1b6ca8',
    pink: '#ff4f8b',
    white: '#f8f9fa',
    yellow: '#ffd700',
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

export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="mb-6 text-3xl font-bold">Color Palette</h1>
      {Object.entries(colors).map(([category, shades]) => (
        <div key={category} className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold capitalize">{category}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {Object.entries(shades).map(([name, hex]) => (
              <div
                key={name}
                className="rounded-lg p-4 shadow-md"
                style={{ backgroundColor: hex }}
              >
                <p
                  className="text-center text-sm font-medium"
                  style={{ color: getTextColor(hex) }}
                >
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
