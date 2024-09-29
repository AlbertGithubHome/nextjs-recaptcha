'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  age: number;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    age: 1
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/insert-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData}),
    });

    if (response.ok) {
      alert('Form insert successfully!');
    } else {
      alert('Failed to insert the form.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Add user</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
}
