export default function SearchBar() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.inputContainer}>
        <span style={styles.icon}>🔍</span>

        <input type="text" placeholder="Search To-Do" style={styles.input} />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '0 16px',
    marginTop: '16px',
  },
  inputContainer: {
    position: 'relative' as const,
  },
  icon: {
    position: 'absolute' as const,
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '14px',
    color: '#667085',
  },
  input: {
    width: '100%',
    height: '40px',
    borderRadius: '6px',
    border: '1px solid #d0d5dd',
    padding: '0 12px 0 36px',
    fontSize: '14px',
    outline: 'none',
  },
};
