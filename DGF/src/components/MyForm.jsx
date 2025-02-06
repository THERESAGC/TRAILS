import  { useState } from 'react';
import Select from 'react-select';
 
 const MyForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });
 
//   const [submitted, setSubmitted] = useState(false);
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setSubmitted(true);
//   };
//   return (
//     <div>
//       <h2>Simple Form</h2>
//       {submitted && <p>Form submitted successfully!</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
const [selectedOption, setSelectedOption] = useState('');
  const [autocompleteValue, setAutocompleteValue] = useState(null);
  const [emailValue, setEmailValue] = useState('');
  const options = [
    { value: 'john-doe', label: 'John Doe' },
    { value: 'jane-smith', label: 'Jane Smith' },
    { value: 'alice-johnson', label: 'Alice Johnson' },
    // Add more employee names here
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form>
      <div>
        <input
          type="radio"
          id="option1"
          name="options"
          value="option1"
          onChange={handleOptionChange}
        />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div>
        <input
          type="radio"
          id="option2"
          name="options"
          value="option2"
          onChange={handleOptionChange}
        />
        <label htmlFor="option2">Option 2</label>
      </div>

      {selectedOption === 'option1' && (
        <div>
          <label htmlFor="select">Select:</label>
          <select id="select" name="select">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>

          <label htmlFor="autocomplete">Select Employee</label>
          <Select
            options={options}
            value={autocompleteValue}
            onChange={setAutocompleteValue}
            placeholder="Select an employee"
          />

          <label htmlFor="emails">Emails (comma-separated):</label>
          <input
            type="text"
            id="emails"
            name="emails"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Enter emails separated by commas"
          />
        </div>
      )}
    </form>
  );
};

export default MyForm;