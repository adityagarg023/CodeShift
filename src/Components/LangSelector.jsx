const languages = [
  "Select Language",
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C",
  "TypeScript",
  "Go",
  "Rust",
];

const LangSelector = ({ language, onLanguageChange }) => {
  return (
    <select
      value={language}
      onChange={(e) => onLanguageChange(e.target.value)}
      className="text-white bg-[#191919] h-15 w-40 border border-solid border-white appearance-none text-center ml-10"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default LangSelector;
