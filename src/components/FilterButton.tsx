type FilterButtonProps = {
  isPressed: boolean,
  name: string,
  handleClick: (name: any) => void;
}

function FilterButton({ isPressed, name, handleClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      className={isPressed ? "btn toggle-btn active" : "btn toggle-btn"}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
}

export default FilterButton;
