import { Listbox } from "@headlessui/react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

const formats = [
  { id: "url", label: "URL Encode/Decode" },
  { id: "base64", label: "Base64 Encode/Decode" },
  { id: "hex", label: "Hex Encode/Decode" },
];

export default function FormatSelector({ format, onChange }) {
  return (
    <div className="w-full">
      <label className="block font-semibold mb-1">Select Format:</label>
      <Listbox value={format} onChange={onChange}>
        <div className="relative">
          <Listbox.Button
            className="relative w-full cursor-pointer rounded-md border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left text-gray-900 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <span className="block truncate">
              {formats.find((f) => f.id === format)?.label}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FiChevronDown
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Listbox.Options
            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 
              dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            {formats.map((f) => (
              <Listbox.Option
                key={f.id}
                value={f.id}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 
                   ${active ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300" : "text-gray-900 dark:text-gray-100"}`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {f.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600 dark:text-blue-400">
                        <FiCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
