import React, { useState } from "react";

const INITIAL_FORM = { date: "", topic: "", category: "", notes: "" };

export default function Form({ addEntry }) {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry({
      ...form,
      topic: form.topic.trim(),
      category: form.category.trim(),
      notes: form.notes.trim(),
    });
    setForm(INITIAL_FORM);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Add Learning</h2>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <input
        name="topic"
        placeholder="Topic"
        value={form.topic}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        required
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={form.notes}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
