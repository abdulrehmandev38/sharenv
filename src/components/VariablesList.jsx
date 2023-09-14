const VariablesItem = ({ name }) => {
  return <div className="border px-4 py-2">{name}</div>;
};

const VariablesList = () => {
  return Array(8)
    .fill(0)
    .map((e) => <VariablesItem />);
};
export default VariablesList;
