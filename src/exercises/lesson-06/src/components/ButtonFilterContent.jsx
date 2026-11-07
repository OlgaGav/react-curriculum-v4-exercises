export default function ButtonFilterContent({ value, label, onSelect }) {
  return <button onClick={() => onSelect(value)}>{label}</button>;
}
