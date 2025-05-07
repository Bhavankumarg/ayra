"use client"
import React, { useState } from "react"
import axios from "axios"

const EnquiryForm = ({ innerRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nationality: "",
    city: "",
    state: "",
    phone: "",
    interest: "",
  })

  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const validate = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required"
      }
    })

    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      const wpFormData = new FormData()
      wpFormData.append("name", formData.name)
      wpFormData.append("email", formData.email)
      wpFormData.append("nationality", formData.nationality)
      wpFormData.append("city", formData.city)
      wpFormData.append("state", formData.state)
      wpFormData.append("phone", formData.phone)
      wpFormData.append("interest", formData.interest)

      try {
        const response = await axios.post(
          "https://docs.ivistaz.com/wp-json/contact-form-7/v1/contact-forms/885/feedback",
          wpFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )

        if (response.data.status === "mail_sent") {
          setShowModal(true)
          setFormData({
            name: "",
            email: "",
            nationality: "",
            city: "",
            state: "",
            phone: "",
            interest: "",
          })
        } else {
          alert("Form submission failed. Please try again later.")
        }
      } catch (error) {
        console.error("There was an error submitting the form!", error)
        alert("There was an error submitting the form. Please try again.")
      }
    }
  }

  return (
    <div ref={innerRef} className="container mx-auto px-4 py-12 relative">
      <h2 className="lg:text-[30px] text-[24px] font-bold mb-1 tracking-tight">
        Want to be the first to know?
      </h2>
      <p className="lg:text-[24px] font-light mb-8">
        Drop your details below to get exclusive updates, program details, and
        early access to admissions.
      </p>

      <h3 className="text-[24px] font-semibold mb-6">Enquiry Form</h3>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { label: "Name", name: "name" },
          { label: "Email", name: "email" },
          { label: "Nationality", name: "nationality" },
          { label: "City/Town", name: "city" },
          { label: "State", name: "state" },
          { label: "Phone Number", name: "phone" },
        ].map(({ label, name }) => (
          <div key={name} className="flex flex-col">
            <label className="lg:text-[20px] text-gray-800 mb-1">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="border-b border-black bg-transparent focus:outline-none"
            />
            {errors[name] && (
              <span className="text-red-500 text-lg mt-1">{errors[name]}</span>
            )}
          </div>
        ))}

        <div className="md:col-span-2 flex flex-col">
          <label className="lg:text-[20px] text-gray-800 mb-1">
            Area of Interest
          </label>
          <input
            type="text"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="border-b border-black bg-transparent focus:outline-none py-1"
          />
          {errors.interest && (
            <span className="text-red-500 text-lg mt-1">{errors.interest}</span>
          )}
        </div>

        <div className="md:col-span-1 mt-4">
          <div className="group inline-block">
            <button
              type="submit"
              className="relative px-5 py-3 w-[49vh] bg-[#004B91] group-hover:bg-blue-400 text-white overflow-hidden cursor-pointer transition-colors duration-300"
            >
              Submit
              <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            </button>
          </div>
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
            <h2 className="text-2xl font-bold mb-3 text-green-700">
              Thank you!
            </h2>
            <p className="text-gray-700 mb-4">
              Your enquiry has been submitted successfully.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#004B91] text-white px-4 py-2 rounded-md text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EnquiryForm
