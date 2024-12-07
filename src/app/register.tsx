import React, { useState } from "react";

export default function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registered: ${name}, Email: ${email}`);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name" 
          className="border p-2 mb-2"
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          className="border p-2 mb-2"
        />
        <input 
          type="tel" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          placeholder="Enter your phone number" 
          className="border p-2 mb-2"
        />
        <input 
          type="text" 
          value={course} 
          onChange={(e) => setCourse(e.target.value)} 
          placeholder="Enter your course" 
          className="border p-2 mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Register</button>
      </form>
    </div>
  );
} 
