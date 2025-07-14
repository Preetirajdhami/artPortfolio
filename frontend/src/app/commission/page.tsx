"use client"
import { useState } from "react"
import type React from "react"

import axios from "axios"
import { CheckCircle, XCircle, X } from "lucide-react"

interface AlertState {
  isOpen: boolean
  type: "success" | "error"
  title: string
  message: string
  onConfirm?: () => void
}

const Commission = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    numberOfPortraits: 1,
    size: "A4",
    shippingDestination: "",
    deadline: "",
    additionalInfo: "",
  })
  const [portraitImage, setPortraitImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<AlertState>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  })

  const showAlert = (alertConfig: Omit<AlertState, "isOpen">) => {
    setAlert({ ...alertConfig, isOpen: true })
  }

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, isOpen: false }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "numberOfPortraits" ? Number.parseInt(value) : value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPortraitImage(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!portraitImage) {
      showAlert({
        type: "error",
        title: "Missing Image",
        message: "Please upload a portrait image to proceed with your commission request.",
        onConfirm: hideAlert,
      })
      return
    }

    const data = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value as string)
    })
    data.append("portraitImage", portraitImage)

    try {
      setLoading(true)
      await axios.post("https://artportfolio-backend.onrender.com/api/comissions", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      showAlert({
        type: "success",
        title: "Commission Submitted",
        message:
          "Your commission request has been submitted successfully! We'll contact you soon to discuss the details.",
        onConfirm: () => {
          hideAlert()
          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            numberOfPortraits: 1,
            size: "A4",
            shippingDestination: "",
            deadline: "",
            additionalInfo: "",
          })
          setPortraitImage(null)
        },
      })
    } catch (err) {
      console.error(err)
      showAlert({
        type: "error",
        title: "Submission Failed",
        message: "Failed to submit your commission request. Please check your connection and try again.",
        onConfirm: hideAlert,
      })
    } finally {
      setLoading(false)
    }
  }

  const CustomAlert = () => {
    if (!alert.isOpen) return null

    return (
      <div className="fixed top-4 right-4 z-[60] max-w-md">
        <div
          className={`${
            alert.type === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
          } border rounded-lg p-4 mb-4 flex items-start space-x-3`}
        >
          {alert.type === "success" ? (
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          ) : (
            <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          )}
          <div>
            <p className={`${alert.type === "success" ? "text-green-800" : "text-red-800"} font-medium`}>
              {alert.title}
            </p>
            <p className={`${alert.type === "success" ? "text-green-700" : "text-red-700"} text-sm`}>{alert.message}</p>
          </div>
          <button
            onClick={alert.onConfirm}
            className={`${
              alert.type === "success" ? "text-green-400 hover:text-green-600" : "text-red-400 hover:text-red-600"
            }`}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background">
      {/* Custom Alert Component */}
      <CustomAlert />

      {/* Full-Screen Image Section */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/comission.JPG')" }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Content on top of the image */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">Commission</h1>
          <p className="text-xl md:text-2xl mt-4">Custom Artwork Tailored to Your Vision</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container text-justify mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-primary">
          <h2 className="text-3xl font-bold mb-6">COMMISSION</h2>
          <p className="text-lg mb-6">
            Commissioning an original artwork is a personal and meaningful experience, and an opportunity to own a
            custom, one-of-a-kind piece of art. Preeti Arts is pleased to be able to share her passion professionally
            and accepts public and private commissions worldwide.
          </p>

          <h3 className="text-2xl mt-8 mb-4">COMMISSION SUBJECTS</h3>
          <p className="text-lg mb-6">
            Reasons for commissioning an artwork are many and varied. Preeti Arts works closely and collaboratively with
            clients and collectors to bring their vision to life in his unique aesthetic, recognisable style and
            interpretation. Commissions focussing on any of the subjects and themes reflected in his repertoire are
            welcome.
          </p>

          <h3 className="text-2xl mt-8 mb-4">MATERIALS</h3>
          <p className="text-lg mb-6">
            Preeti Arts works exclusively with the finest, professional quality artist&apos;s materials. Black and white
            works are completed with graphite, charcoal and ink. Colour works are completed with graphite and
            watercolor.
          </p>

          <h3 className="text-2xl mt-8 mb-4">SIZE AND PRICE</h3>
          <p className="text-lg mb-6">
            Private commissions are offered at the following standard sizes and base prices. Custom sizes and works to
            be used for commercial purposes are available and quoted on request.
          </p>

          {/* Price Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Size</th>
                  <th className="px-4 py-2 text-left">Price (NPR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">A5 (21 x 29.7 cm)</td>
                  <td className="px-4 py-2 border">Rs. 1500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">A4 (29.7 x 42 cm)</td>
                  <td className="px-4 py-2 border">Rs. 2000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">A3 (42 x 59.4 cm)</td>
                  <td className="px-4 py-2 border">Rs. 3000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm mt-4 text-gray-600">
            *Please note this is a guide only. It may be the case a minimum size, or particular orientation, may be
            necessary to fully realise the vision for a particular artwork or to capture the necessary detail and
            clarity of the subject(s).
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-6">COMMISSION PROCESS</h3>

          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <h4 className="text-xl mb-4">1. CONSIDERATION OF SUBJECT, SIZE AND SPACE</h4>
              <p className="text-lg mb-4">
                Whether you have a particular idea in mind, are seeking something similar to a past work of Preeti Arts
                or would like a recommendation based on the space where the artwork will be displayed, think about how
                you would like the artwork to look. All ideas and suggestions are welcome.
              </p>
              <p className="text-lg">
                If the commission is to be created from a reference photograph, such as a portrait, a clear, sharp image
                is necessary to produce a drawing that captures the likeness, detail and character of the subject. Some
                helpful tips on capturing a suitable reference photograph can be found here.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <h4 className="text-xl mb-4">2. SUBMIT YOUR ENQUIRY</h4>
              <p className="text-lg">
                When ready, please complete and submit the enquiry form below, describing your ideas for the artwork in
                as much detail as possible and attaching any images (if appropriate). Once this information is received,
                Preeti Arts will contact you at his earliest convenience to start discussing your commission.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h4 className="text-xl mb-4">3. PAYMENT</h4>
              <p className="text-lg mb-4">
                Following discussion and acceptance of the booking, a deposit of 30% of the commission price is required
                to start work. This is to secure the time in Preeti Arts diary and initial outlay of materials and is
                non-refundable. The balance is due by, or at the time of completion, and paid prior to shipment.
              </p>
              <p className="text-lg">
                Once the commission order is confirmed, you will receive an email with an invoice for the deposit from
                which payment can be made directly
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <h4 className="text-xl mb-4">4. PRELIMINARY SKETCH</h4>
              <p className="text-lg">
                Preeti Arts will prepare a rough pencil sketch based on the details discussed and/or chosen reference
                photograph. This will provide an opportunity to make adjustments, refinements and to confirm
                composition, pose and placement of all the artwork elements.
              </p>
            </div>

            {/* Step 5 */}
            <div>
              <h4 className="text-xl mb-4">5. TIMEFRAME</h4>
              <p className="text-lg">
                Like everything of quality and value, the creation of original art takes time. Completion times will
                vary depending on the size, detail and complexity. Please keep this in mind and advise if the commission
                is for a special occasion or required by specific date when completing the enquiry form. While all
                reasonable efforts will be made, unfortunately not all timeframes are possible, and this will be advised
                prior to confirming any booking. You will be kept updated progress photos, at which point adjustments
                can be made only within the scope of possibility.
              </p>
            </div>

            {/* Step 6 */}
            <div>
              <h4 className="text-xl mb-4">6. COMPLETION AND DELIVERY</h4>
              <p className="text-lg mb-4">
                The completed artwork will be sent flat, between sheets of acid-free paper and reinforced board,
                accompanied by a care instruction guide.
              </p>
            </div>
          </div>

          <h3 className="text-2xl mt-12 mb-6">FRAMING</h3>
          <p className="text-lg mb-12">
            Professional framing is an investment in itself to match the quality of the artwork, its presentation and
            protection. Preeti Arts can provide guidance on appropriate framing if desired. The cost of framing and
            installation are separate from the commission price.
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-6">REACH OUT TO DISCUSS YOUR COMMISSION</h3>

          {/* Commission Form */}
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="bg-white rounded-lg shadow-lg p-6 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-lg mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="p-3 border rounded w-full"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-lg mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="p-3 border rounded w-full"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 border rounded w-full"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="numberOfPortraits" className="text-lg mb-2">
                  Number of Portraits
                </label>
                <input
                  type="number"
                  id="numberOfPortraits"
                  name="numberOfPortraits"
                  min={1}
                  value={formData.numberOfPortraits}
                  onChange={handleChange}
                  required
                  className="p-3 border rounded w-full"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="size" className="text-lg mb-2">
                  Size
                </label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                  className="p-3 border rounded w-full"
                >
                  <option value="A5">A5</option>
                  <option value="A4">A4</option>
                  <option value="A3">A3</option>
                  <option value="A2">A2</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="shippingDestination" className="text-lg mb-2">
                  Shipping Destination
                </label>
                <input
                  type="text"
                  id="shippingDestination"
                  name="shippingDestination"
                  value={formData.shippingDestination}
                  onChange={handleChange}
                  required
                  className="p-3 border rounded w-full"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="deadline" className="text-lg mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                  className="p-3 border rounded w-full"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="portraitImage" className="text-lg mb-2">
                  Portrait Image
                </label>
                <input
                  type="file"
                  id="portraitImage"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="p-3 border rounded w-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="additionalInfo" className="text-lg mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="p-3 border rounded w-full h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Commission"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Commission
