export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '',
  options = [],
  children,
  className = '',
  ...props
}) {
  const baseInputClass = `
    w-full px-4 py-2.5 border border-gray-300 rounded-lg 
    focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
    transition duration-200
  `;

  return (
    <div className={`space-y-1.5 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-600">*</span>}
      </label>

      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseInputClass}
          {...props}
        >
          <option value="">Select</option>
          {options.map(opt => (
            <option key={opt.value || opt} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={4}
          className={`${baseInputClass} resize-y`}
          {...props}
        />
      ) : type === 'radio' ? (
        <div className="flex gap-6">{children}</div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseInputClass}
          {...props}
        />
      )}
    </div>
  );
}