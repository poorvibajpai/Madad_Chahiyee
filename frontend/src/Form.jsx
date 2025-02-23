import { useState } from "react";
import { addUser } from "./api/userAPI.js";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    field: "",
    phone: "",
    location: "",
    charge: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(formData);
    alert("User created successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(formData).map((key) => (
        <input
          key={key}
          name={key}
          value={formData[key]}
          onChange={handleChange}
          placeholder={key}
          className="border p-2 w-full"
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;