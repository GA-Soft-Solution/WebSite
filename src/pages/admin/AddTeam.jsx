import React, { useState } from "react";

const AddTeam = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    whatsapp: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full min-h-screen flex justify-center p-6 bg-gray-50">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-8">
        <h2 className="text-xl font-semibold mb-6">Add Team</h2>

        {/* Upload */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Media Logo</label>
          <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 text-center text-gray-500 cursor-pointer hover:bg-gray-50">
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="hidden"
              id="imageUpload"
            />
            <label htmlFor="imageUpload" className="cursor-pointer">
              <div className="flex flex-col items-center">
                <span className="text-blue-600 font-medium">Browse files</span>
              </div>
            </label>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Position */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Londynn Vargas"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Position/Profession
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="EthioTelecom"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Facebook</label>
              <input
                type="url"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                placeholder="https://facebook.com/username"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Twitter</label>
              <input
                type="url"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="https://twitter.com/username"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/username"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp</label>
              <input
                type="url"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="https://wa.me/username"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write something about the team member..."
              className="w-full border rounded-lg px-3 py-2 h-24 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              + Add team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeam;
