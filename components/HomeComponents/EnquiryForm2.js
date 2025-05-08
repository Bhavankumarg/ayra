"use client"
import { useState } from "react"
import { ChevronDown, Check } from "lucide-react"
import Image from "next/image"

const CustomSelect = ({ label, options, onChange, value, error, innerRef }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full" ref={innerRef}>
      <label className="text-sm font-semibold mb-1 block">{label}</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`w-full bg-[#fff] px-4 py-2 text-left flex justify-between items-center border ${
          error
            ? "border-red-500"
            : "border-dashed border-[#A9B8D5] focus:outline-none"
        }`}
      >
        <span className={`text-[#002561] ${!value && "text-[#002561]"}`}>
          {value || "Select"}
        </span>
        <Image
          alt="down-arrow"
          src="/down-arrow.svg"
          width={18}
          height={18}
          className={`ml-2 transition-transform text-[#2050B1] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className="absolute left-0 right-0 text-[#3B76CB] w-full lg:w-1/2 bg-[#fff] shadow transition-all duration-300 ease-in-out overflow-hidden z-50 max-h-60 opacity-100">
          {options.map((opt) => (
            <li
              key={opt}
              className="px-4 hover:text-black cursor-pointer text-[#3B76CB] py-1"
              onClick={() => {
                onChange(opt)
                setIsOpen(false)
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  )
}

export default function EnquiryForm2({ innerRef }) {
  const initialState = {
    title: "",
    firstName: "",
    lastName: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    interest: "",
  }

  const [formData, setFormData] = useState(initialState)
  const [formErrors, setFormErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [responseMsg, setResponseMsg] = useState("")
  console.log("Form Data:", formData)
  const validate = () => {
    const errors = {}

    // Validate title
    if (!formData.title) {
      errors.title = "Please select a title (e.g., Mr., Ms., Mrs.)."
    }

    // Validate first name
    if (!formData.firstName) {
      errors.firstName = "First name is required."
    } else if (formData.firstName.length < 2) {
      errors.firstName = "First name must be at least 2 characters long."
    }

    // Validate last name
    if (!formData.lastName) {
      errors.lastName = "Last name is required."
    } else if (formData.lastName.length < 2) {
      errors.lastName = "Last name must be at least 2 characters long."
    }

    // Validate date of birth
    if (!formData.dobDay || !formData.dobMonth || !formData.dobYear) {
      errors.dob = "Please select a valid date of birth."
    } else {
      const dob = new Date(
        `${formData.dobYear}-${formData.dobMonth}-${formData.dobDay}`
      )
      const today = new Date()
      if (dob > today) {
        errors.dob = "Date of birth cannot be in the future."
      }
      if (dob.getFullYear() < today.getFullYear() - 100) {
        errors.dob = "Date of birth cannot be more than 100 years ago."
      }
    }

    // Validate gender
    if (!formData.gender) {
      errors.gender = "Please select your gender."
    }

    // Validate nationality
    if (!formData.nationality) {
      errors.nationality = "Please select your nationality."
    }

    // Validate email
    if (!formData.email) {
      errors.email = "Email address is required."
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address."
    }

    // Validate phone number
    if (!formData.phone) {
      errors.phone = "Phone number is required."
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be exactly 10 digits."
    }

    // Validate city
    if (!formData.city) {
      errors.city = "City is required."
    } else if (formData.city.length < 3) {
      errors.city = "City name must be at least 3 characters long."
    }

    // Validate state
    if (!formData.state) {
      errors.state = "State is required."
    } else if (formData.state.length < 3) {
      errors.state = "State name must be at least 3 characters long."
    }

    // Validate interest
    if (!formData.interest) {
      errors.interest = "Please select the interest you are applying for."
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0 // Return true if no errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)

    const form = new FormData()
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key])
    })

    try {
      const res = await fetch(
        "https://beta.upfront.global/wp-json/contact-form-7/v1/contact-forms/980/feedback",
        {
          method: "POST",
          body: form,
          headers: {
            Accept: "application/json",
          },
        }
      )

      const result = await res.json()
      if (result.status === "mail_sent") {
        setResponseMsg("✅ Application submitted successfully!")
        setFormData(initialState)
        setFormErrors({})
      } else {
        setResponseMsg("❌ Submission failed. Please try again.")
      }
    } catch (error) {
      setResponseMsg("❌ Error submitting the form.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div ref={innerRef} className="max-w-7xl mx-auto px-4 py-14">
      <h2 className="text-3xl font-bold mb-6">ENQUIRY FORM:</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <CustomSelect
            label="TITLE"
            options={["Mr.", "Ms.", "Other"]}
            onChange={(val) => setFormData({ ...formData, title: val })}
            value={formData.title}
            error={formErrors.title}
            innerRef={innerRef}
          />
          <div>
            <label className="text-sm font-semibold mb-1 block">
              FIRST NAME
            </label>
            <input
              type="text"
              className={`w-full border ${
                formErrors.firstName
                  ? "border-red-500"
                  : "border-dashed border-[#A9B8D5] focus:outline-none"
              } p-2`}
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value })
                if (formErrors.firstName) {
                  setFormErrors({ ...formErrors, firstName: undefined })
                }
              }}
            />
            {formErrors.firstName && (
              <p className="text-red-600 text-sm">{formErrors.firstName}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-semibold mb-1 block">
              LAST NAME
            </label>
            <input
              type="text"
              className={`w-full border ${
                formErrors.lastName
                  ? "border-red-500"
                  : "border-dashed border-[#A9B8D5] focus:outline-none"
              } p-2`}
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            {formErrors.lastName && (
              <p className="text-red-600 text-sm">{formErrors.lastName}</p>
            )}
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-4 gap-2">
            <div className="col-span-4">
              <label className="text-[14px] font-bold block mb-1">
               DATE OF BIRTH
              </label>
            </div>
            {["dobDay", "dobMonth", "dobYear"].map((key, i) => (
              <div key={key}>
                <label className="text-sm font-semibold  block">
                  {["", "", ""][i]}
                </label>
                <select
                  className={`w-full border ${
                    formErrors[key]
                      ? "border-red-500"
                      : "border-dashed border-[#A9B8D5] focus:outline-none"
                  } py-2 -mt-2`}
                  value={formData[key]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                >
                  <option value="">{["DD", "MM", "YYYY"][i]}</option>
                  {key === "dobDay" &&
                    [...Array(31)].map((_, j) => (
                      <option
                        key={j + 1}
                        value={String(j + 1).padStart(2, "0")}
                      >
                        {String(j + 1).padStart(2, "0")}
                      </option>
                    ))}
                  {key === "dobMonth" &&
                    [
                      "01 - Jan",
                      "02 - Feb",
                      "03 - Mar",
                      "04 - Apr",
                      "05 - May",
                      "06 - Jun",
                      "07 - Jul",
                      "08 - Aug",
                      "09 - Sep",
                      "10 - Oct",
                      "11 - Nov",
                      "12 - Dec",
                    ].map((month, idx) => (
                      <option
                        key={idx + 1}
                        value={String(idx + 1).padStart(2, "0")}
                      >
                        {month}
                      </option>
                    ))}
                  {key === "dobYear" &&
                    Array.from(
                      { length: 100 },
                      (_, j) => new Date().getFullYear() - j
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                </select>
                {formErrors[key] && (
                  <p className="text-red-600 text-sm">{formErrors[key]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CustomSelect
            label="GENDER"
            options={["Male", "Female", "Non-Binary", "Prefer Not to Say"]}
            onChange={(val) => setFormData({ ...formData, gender: val })}
            value={formData.gender}
            error={formErrors.gender}
          />
          <CustomSelect
            label="NATIONALITY"
            options={["Indian", "Others"]}
            onChange={(val) => setFormData({ ...formData, nationality: val })}
            value={formData.nationality}
            error={formErrors.nationality}
          />
          <div>
            <label className="text-sm font-semibold mb-1 block">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className={`w-full border ${
                formErrors.email
                  ? "border-red-500"
                  : "border-dashed border-[#A9B8D5] focus:outline-none"
              } p-2`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {formErrors.email && (
              <p className="text-red-600 text-sm">{formErrors.email}</p>
            )}
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-semibold mb-1 block">
              PHONE NUMBER
            </label>
            <input
              type="text"
              className={`w-full border ${
                formErrors.phone
                  ? "border-red-500"
                  : "border-dashed border-[#A9B8D5] focus:outline-none"
              } p-2`}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            {formErrors.phone && (
              <p className="text-red-600 text-sm">{formErrors.phone}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-semibold mb-1 block">
              CITY/TOWN
            </label>
            <input
              type="text"
              className={`w-full border ${
                formErrors.city
                  ? "border-red-500"
                  : "border-dashed border-[#A9B8D5] focus:outline-none"
              } p-2`}
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            {formErrors.city && (
              <p className="text-red-600 text-sm">{formErrors.city}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-semibold mb-1 block">STATE</label>
            <input
              type="text"
              className={`w-full border ${
                formErrors.state
                  ? "border-red-500"
                  : "border-dashed border-[#A9B8D5] focus:outline-none"
              } p-2`}
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            />
            {formErrors.state && (
              <p className="text-red-600 text-sm">{formErrors.state}</p>
            )}
          </div>
        </div>

        {/* Row 4 */}
        <div className="w-full">
          <CustomSelect
            label="AREA OF INTEREST"
            options={[
              "Business",
              "Liberal Arts",
              "Hospitality",
              "Sports Sciences",
              "Engineering & Technology",
            ]}
            onChange={(val) => setFormData({ ...formData, interest: val })}
            value={formData.interest || ""}
            error={formErrors.interest}
          />
        </div>

        {/* Submit */}
        <div className="space-y-4">
          <button
            type="submit"
            disabled={submitting}
            className="relative text-white  px-5 py-1 font-thin leading-relaxed text-[20px] w-44 bg-[#0072C5] transition-all cursor-pointer group hover:shadow-inner border-dashed"
          >
            {submitting ? "Submitting..." : "Submit"}
            <span className="absolute top-0 right-0 w-0 h-0 border-solid border-transparent group-hover:border-r-[15px] group-hover:border-b-[15px] transition-all duration-75 ease-out border-r-white border-b-[#2050B1]"></span>
          </button>
        </div>

        {/* Response Message */}
        {responseMsg && (
          <p className="text-sm font-semibold text-blue-600">{responseMsg}</p>
        )}
      </form>
    </div>
  )
}
