import { useState } from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const options = [
  { label: 'Pending', color: '#BDBDBD' },
  { label: 'In Progress', color: '#F2994A' },
  { label: 'Completed', color: '#27AE60' },
];

export default function StatusDropdown({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const selected = options.find((o) => o.label === value);

  return (
    <div style={styles.container}>
      <div style={styles.trigger} onClick={() => setOpen(!open)}>
        <div style={styles.row}>
          <span
            style={{
              ...styles.dot,
              backgroundColor: selected?.color,
            }}
          />
          {value}
        </div>
        <span>▾</span>
      </div>

      {open && (
        <div style={styles.dropdown}>
          {options.map((opt) => (
            <div
              key={opt.label}
              style={styles.option}
              onClick={() => {
                onChange(opt.label);
                setOpen(false);
              }}
            >
              <span
                style={{
                  ...styles.dot,
                  backgroundColor: opt.color,
                }}
              />
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '366px',
    position: 'relative' as const,
    marginTop: '24px',
  },

  trigger: {
    height: '30px',
    border: '1px solid #DDDDDD',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
    cursor: 'pointer',
    backgroundColor: '#FFF',
    fontSize: '12px',
    fontFamily: 'Jost, sans-serif',
    color: '#66676B',
  },

  dropdown: {
    position: 'absolute' as const,
    top: '32px',
    width: '100%',
    backgroundColor: '#FFF',
    border: '1px solid #DDDDDD',
    borderRadius: '3px',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.05)',
    zIndex: 10,
  },

  option: {
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '0 12px',
    cursor: 'pointer',
    fontSize: '12px',
  },

  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
};
