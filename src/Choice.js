const Choice = ({ name, value, label }) => (
  <label>
    <input name={name} type="checkbox" value={value} />
    {label}
  </label>
);

export default Choice;
