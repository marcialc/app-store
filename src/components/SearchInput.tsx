import SearchIcon from "@/assets/SearchIcon";

type SearchInputProps = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: string;
};

const SearchInput = ({
  placeholder,
  value,
  onChange,
  style = "",
}: SearchInputProps) => {
  return (
    <label
      className={`input input-bordered rounded-lg flex items-center gap-2 w-full ${style}`}
    >
      <input
        type="text"
        className="grow"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <SearchIcon />
    </label>
  );
};

export default SearchInput;
