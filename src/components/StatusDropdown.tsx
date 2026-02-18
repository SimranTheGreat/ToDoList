type Props = {
  value: string | '';
  onChange: (value: string) => void;
};

export default function StatusDropdown({ value, onChange }: Props) {
  const options = ['Pending', 'In Progress', 'Completed'];

  return (
    <div style={styles.container}>
      <div style={styles.selectWrapper}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={styles.select}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <span style={styles.arrow}>▾</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '366px',
    marginTop: '24px',
    marginLeft: '24px',
  },

  selectWrapper: {
    position: 'relative' as const,
    width: '366px',
    height: '30px',
  },

  select: {
    width: '100%',
    height: '30px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '3px',
    padding: '0 30px 0 10px',
    fontSize: '12px',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 400,
    lineHeight: '12px',
    color: '#66676B',
    outline: 'none',
    boxSizing: 'border-box' as const,
    appearance: 'none' as const,
    WebkitAppearance: 'none' as const,
    MozAppearance: 'none' as const,
    cursor: 'pointer',
  },

  arrow: {
    position: 'absolute' as const,
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '12px',
    color: '#66676B',
    pointerEvents: 'none' as const,
  },
};
