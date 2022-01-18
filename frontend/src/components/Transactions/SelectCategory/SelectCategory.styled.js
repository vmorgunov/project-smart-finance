export const SelectStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '0px dotted pink',
    color: state.isSelected || state.isFocused ? 'var(--text-color-3)' :'var(--color-placeholder)',
    backgroundColor: state.isSelected ? 'var(--bg-color)' : state.isFocused ? 'var(--bg-tab)' : 'var(--bg-text-color)',
    fontWeight: state.isSelected && '700',
    padding: '10px 20px',
    height: 33,
    fontSize: '12px',
    lineHeight: '1.17',
  }),
  container: (provided, state) => ({
    ...provided,
    border: '2px solid var(--bg-color)',
    borderRight: '0px solid var(--bg-color)',
  }), 
  menu: (provided, state) => ({
    ...provided,
    height: '400px',
    border: '2px solid var(--bg-color)',
    boxShadow: '0px 3px 4px rgba(170, 178, 197, 0.4)',
    position: 'relative',
    top: '-8px',
  }),
  menuList: (provided, state) => ({
    ...provided,
    overflowY: 'visible',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: 'var(--color-placeholder)',
    fontSize: '12px',
    lineHeight: '1.17',
    fontWeight: '400'
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: '0 20px',
    height: '40px',
    fontSize: '12px',
    lineHeight: '1.17',
    fontWeight: '700'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    position: 'relative',
    top: '-36px',
    right: '-155px',
    color: 'var(--bg-color)',
    cursor: 'pointer'
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 188,
    height: 40,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}