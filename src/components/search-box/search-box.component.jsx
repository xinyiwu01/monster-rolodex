import './search-box.styles.css';
const SearchBox = ({className, placeholder, onChangeHandler}) => {
    <input
        className={`search-box ${className}`} //string interpolation, javascript in string
        type='search'
        placeholder= {placeholder}
        onChange={onChangeHandler}
    />       
}

export default SearchBox;