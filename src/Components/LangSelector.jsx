const languages = [
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
      className="text-white bg-[#191919] h-15 w-50 m-10 font-bold"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  )
}

export default LangSelector