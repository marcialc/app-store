import CloseIcon from "@/assets/CloseIcon";
import SearchIcon from "@/assets/SearchIcon";
import { ChangeEvent, useRef, useState } from "react";

type SearchInputProps = {
  placeholder: string;
  initialValue?: string;
  onChange: (value: string) => void;
  className?: string;
  isFocused?: boolean;
  onBlur?: () => void;
};

const SearchInput = ({
  placeholder,
  initialValue = "",
  onChange,
  className = "",
  isFocused = false,
  onBlur,
}: SearchInputProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>(initialValue);

  if (isFocused) {
    searchInputRef.current?.focus();
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setValue(val);
    onChange(val);
  };

  const handleClear = () => {
    setValue("");
    onChange("");
    searchInputRef.current?.focus();
  };

  return (
    <label
      className={`relative input input-bordered rounded-lg flex justify-between items-center gap-2 w-full ${className}`}
    >
      <div className="flex items-center gap-1">
        <SearchIcon />
        <input
          ref={searchInputRef}
          type="text"
          className="grow"
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
          onBlur={onBlur}
        />
      </div>
      <div className="flex gap-1 -mr-2">
        <kbd className="hidden md:block kbd kbd-sm pointer-events-none opacity-50">
          ⌘
        </kbd>
        <kbd className="hidden md:block kbd kbd-sm pointer-events-none opacity-50">
          K
        </kbd>
        <button
          className={`opacity-75 rounded-full p-1 ${
            value ? "visible" : "invisible"
          }`}
          onClick={handleClear}
        >
          <CloseIcon color="darkblue" />
        </button>
      </div>
    </label>
  );
};

export default SearchInput;
