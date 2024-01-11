import type { ChangeEvent, FC } from 'react';
import { useId } from 'react';

type PropsType = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  label: string;
  isDisabled?: boolean;
  error?: string;
  setError?: (value: string) => void;
};

export const Input: FC<PropsType> = ({
  placeholder,
  value,
  onChange,
  label,
  isDisabled,
  error,
  setError,
}) => {
  const id = useId();

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
    if (setError) setError('');
  };

  const inputStyle = isDisabled ? 'border-gray-dark' : '';
  return (
    <div className="flex flex-col">
      <label
        className="text-2xl mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`h-10 px-4 bg-transparent rounded-full font-AvenirNextCyr border outline-none transition-colors focus:border-orange-light ${inputStyle}`}
        type="text"
        value={value}
        onChange={onValueChange}
        placeholder={placeholder}
        id={id}
        disabled={isDisabled}
      />
      {error && (
        <div className="font-AvenirNextCyr mt-3 text-orange-light">{error}</div>
      )}
    </div>
  );
};
