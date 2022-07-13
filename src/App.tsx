import { useState } from 'react';

export function replaceCamelWithSpaces(colorName: string): string {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [color, setColor] = useState<'MediumVioletRed' | 'MidnightBlue'>('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = color === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  const buttonColor = disabled ? 'gray' : color;

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={() => setColor(newButtonColor)} disabled={disabled}>
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <label htmlFor="enable-button-checkbox">Disable button</label>
      <input
        id="enable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
