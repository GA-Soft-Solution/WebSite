import React, { useState, useEffect, useRef } from "react";
import { MoreVertical } from "lucide-react";
import teamMembers from "../../data/teamMembers";

const Team = () => {
  // Initialize team state from localStorage or fallback to initial value
  // const [team, setTeam] = useState(() => {
  //   const savedTeam = localStorage.getItem("team");
  //   return savedTeam
  //     ? JSON.parse(savedTeam)
  //     : [
  //         {
  //           id: 1,
  //           name: "Londynn Vargas",
  //           position: "EthioTelecom",
  //           description: "Lourem ipsome dorem sudiono pisodio...",
  //           date: "Jan 30, 2025",
  //           image: "https://i.pravatar.cc/100?img=1",
  //           facebook: "",
  //           twitter: "",
  //           linkedin: "",
  //           whatsapp: "",
  //         },
  //       ];
  // });
    const [team, setTeam] = useState(() => {
    const savedTeam = localStorage.getItem("team");
    if (savedTeam) return JSON.parse(savedTeam);

    // Map imported teamMembers to your state format
    return teamMembers.map((member) => ({
      id: member.id,
      name: member.name,
      position: member.role, // map role to position
      description: member.description,
      date: new Date().toDateString(), // you can add a default date
      image: member.image,
      facebook: member.socials.find((s) => s.label.toLowerCase() === "facebook")?.href || "",
      twitter: member.socials.find((s) => s.label.toLowerCase() === "x")?.href || "",
      linkedin: member.socials.find((s) => s.label.toLowerCase() === "linkedin")?.href || "",
      whatsapp: member.socials.find((s) => s.label.toLowerCase() === "whatsup")?.href || "",
    }));
  });


  // Save team to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("add"); // "add" | "edit" | "view"
  const [editMember, setEditMember] = useState(null);
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
  const [showDropdown, setShowDropdown] = useState(null); // Track which member's dropdown is open
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null); // Track which member to delete
  const dropdownRef = useRef(null);

  // Pre-fill form when editing or viewing
  useEffect(() => {
    if ((formType === "edit" || formType === "view") && editMember) {
      setFormData({
        ...editMember,
        image: editMember.image, // Preserve image as string (URL or Base64)
      });
    } else if (formType === "add") {
      setFormData({
        name: "",
        position: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        whatsapp: "",
        description: "",
        image: null,
      });
    }
  }, [formType, editMember]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle input changes, including image uploads as Base64
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, [name]: reader.result }); // Store Base64 string
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formType === "add") {
      const newMember = {
        id: team.length + 1,
        ...formData,
        date: new Date().toDateString(),
        image: formData.image, // Store Base64 or URL
      };
      setTeam([...team, newMember]);
    } else if (formType === "edit") {
      const updatedTeam = team.map((member) =>
        member.id === editMember.id ? { ...formData, id: editMember.id, image: formData.image } : member
      );
      setTeam(updatedTeam);
    }

    // Reset form
    setFormData({
      name: "",
      position: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      whatsapp: "",
      description: "",
      image: null,
    });
    setShowForm(false);
    setFormType("add");
    setEditMember(null);
    setShowDropdown(null);
  };

  const handleDelete = (id) => {
    const updatedTeam = team.filter((member) => member.id !== id);
    setTeam(updatedTeam);
    setShowDropdown(null);
    setShowDeleteConfirm(null);
  };

  const handleCloseView = () => {
    setShowForm(false);
    setFormType("add");
    setEditMember(null);
    setShowDropdown(null);
  };

  const toggleDropdown = (id) => {
    setShowDropdown(showDropdown === id ? null : id);
  };

  return (
    <div className="p-6 w-full h-[500px]">
      {!showForm ? (
        <>
          {/* Team List */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Team</h2>
            <button
              onClick={() => {
                setShowForm(true);
                setFormType("add");
                setEditMember(null);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              + Add team
            </button>
          </div>

          <div className="">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 text-left text-sm">
                  <th className="p-3">Image</th>
                  <th className="p-3">Name/ID</th>
                  <th className="p-3">Position/Profession</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {team.map((member) => (
                  <tr key={member.id} className="border-b hover:bg-gray-50 text-sm">
                    <td className="p-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="p-3 font-medium">{member.name}</td>
                    <td className="p-3">{member.position}</td>
                    <td className="p-3 truncate max-w-[200px]">{member.description}</td>
                    <td className="p-3">{member.date}</td>
                    <td className="p-3 relative">
                      <button
                        onClick={() => toggleDropdown(member.id)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <MoreVertical size={16} />
                      </button>
                      {showDropdown === member.id && (
                        <div
                          ref={dropdownRef}
                          className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-10"
                        >
                          <button
                            onClick={() => {
                              setShowForm(true);
                              setFormType("view");
                              setEditMember(member);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            View
                          </button>
                          <button
                            onClick={() => {
                              setShowForm(true);
                              setFormType("edit");
                              setEditMember(member);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => setShowDeleteConfirm(member.id)}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Delete Confirmation Dialog */}
          {showDeleteConfirm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Are you sure you want to delete this team member? This action cannot be undone.
                </p>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowDeleteConfirm(null)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(showDeleteConfirm)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : formType === "view" ? (
        // View Form Layout
        <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-6">View Team</h2>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <img
                src={formData.image || "https://i.pravatar.cc/100?img=1"}
                alt={formData.name}
                className="w-64 h-64 rounded-full object-cover border-4 border-gray-200"
              />
            </div>
            <div className="flex-1 min-w-0 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  disabled
                  className="w-full border rounded-lg px-3 py-2 bg-gray-50 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Position Profession</label>
                <input
                  type="text"
                  value={formData.position}
                  disabled
                  className="w-full border rounded-lg px-3 py-2 bg-gray-50 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Social Media Links</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Facebook</label>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 text-lg">📘</span>
                      <input
                        type="url"
                        value={formData.facebook}
                        disabled
                        className="flex-1 border rounded-lg px-2 py-1 bg-gray-50 text-sm cursor-not-allowed"
                        placeholder="https://facebook.com/..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Twitter</label>
                    <div className="flex items-center gap-2">
                      <span className="text-black text-lg">🐦</span>
                      <input
                        type="url"
                        value={formData.twitter}
                        disabled
                        className="flex-1 border rounded-lg px-2 py-1 bg-gray-50 text-sm cursor-not-allowed"
                        placeholder="https://twitter.com/..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">LinkedIn</label>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 text-lg">💼</span>
                      <input
                        type="url"
                        value={formData.linkedin}
                        disabled
                        className="flex-1 border rounded-lg px-2 py-1 bg-gray-50 text-sm cursor-not-allowed"
                        placeholder="https://linkedin.com/..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={formData.description}
                  disabled
                  className="w-full border rounded-lg px-3 py-2 bg-gray-50 cursor-not-allowed"
                  rows={4}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={handleCloseView}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        // Add / Edit Form
        <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">{formType === "edit" ? "Edit Team" : "Add Team"}</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">Media Logo</label>
              <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  accept="image/*"
                  className="hidden"
                  id="imageUpload"
                />
                <label
                  htmlFor="imageUpload"
                  className="cursor-pointer text-blue-600 hover:text-blue-800"
                >
                  <div className="flex flex-col items-center">
                    <span role="img" aria-label="upload" className="text-4xl mb-2">📤</span>
                    <p className="text-gray-600 mb-2">Drag your file(s) to start uploading</p>
                    <p className="text-gray-600">OR</p>
                    <button
                      type="button"
                      onClick={() => document.getElementById("imageUpload").click()}
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Browse Files
                    </button>
                  </div>
                </label>
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="mt-4 w-32 h-32 rounded-lg object-cover mx-auto"
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-blue-300 rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Position/Profession</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full border-2 border-blue-300 rounded-lg px-4 py-2"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium mb-2">Facebook</label>
                <input
                  type="url"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="w-full border-2 border-blue-300 rounded-lg px-4 py-2"
                  placeholder="https://facebook.com/Username"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Twitter</label>
                <input
                  type="url"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="w-full border-2 border-blue-300 rounded-lg px-4 py-2"
                  placeholder="https://twitter.com/Username"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium mb-2">LinkedIn</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full border-2 border-blue-300 rounded-lg px-4 py-2"
                  placeholder="https://linkedin.com/in/Username"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">WhatsApp</label>
                <input
                  type="url"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full border-2 border-blue-300 rounded-lg px-4 py-2"
                  placeholder="https://wa.me/PhoneNumber"
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border-2 border-blue-300 rounded-lg px-4 py-2"
                rows={4}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleCloseView}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                {formType === "edit" ? "Update Team" : "+ Add Team"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Team;