"use client";
import Image from "next/image";

const Commission = () => {
  return (
    <div className="bg-background">
      {/* Full-Screen Image Section */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/commission-hero.jpg')" }}
        >
          {/* Overlay (optional) */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Content on top of the image */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">Commission</h1>
          <p className="text-xl md:text-2xl mt-4">
            Custom Artwork Tailored to Your Vision
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container text-justify mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-primary">
          <h2 className="text-3xl font-bold mb-6">COMMISSION</h2>
          <p className="text-lg mb-6">
            Commissioning an original artwork is a personal and meaningful
            experience, and an opportunity to own a custom, one-of-a-kind piece
            of art. Preeti Arts is pleased to be able to share his passion
            professionally and accepts public and private commissions worldwide.
          </p>

          <h3 className="text-2xl mt-8 mb-4">COMMISSION SUBJECTS</h3>
          <p className="text-lg mb-6">
            Reasons for commissioning an artwork are many and varied. Preeti
            Arts works closely and collaboratively with clients and collectors
            to bring their vision to life in his unique aesthetic, recognisable
            style and interpretation. Commissions focussing on any of the
            subjects and themes reflected in his repertoire are welcome.
          </p>

          <h3 className="text-2xl mt-8 mb-4">MATERIALS</h3>
          <p className="text-lg mb-6">
            Preeti Arts works exclusively with the finest, professional quality
            artist’s materials. Black and white works are completed with
            graphite, charcoal and ink. Colour works are completed with
            graphite, watercolour, coloured pencil and ink. All works are
            completed on Fabriano Artistico hot-pressed watercolour paper, a
            100% cotton, mould-made paper from Italy.
          </p>

          <h3 className="text-2xl mt-8 mb-4">SIZE AND PRICE</h3>
          <p className="text-lg mb-6">
            Private commissions are offered at the following standard sizes and
            base prices. Custom sizes and works to be used for commercial
            purposes are available and quoted on request.
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
            *Please note this is a guide only. It may be the case a minimum
            size, or particular orientation, may be necessary to fully realise
            the vision for a particular artwork or to capture the necessary
            detail and clarity of the subject(s).
          </p>
          <p className="text-sm mt-2 text-gray-600">
            ⁺For multiple subject portraits, please add on 10% of the listed
            price per additional subject i.e. a double subject head and shoulder
            A4 portrait would be 520 plus 10%, so 572.
          </p>
          <h3 className="text-2xl font-bold mt-12 mb-6">COMMISSION PROCESS</h3>

          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <h4 className="text-xl mb-4">
                1. CONSIDERATION OF SUBJECT, SIZE AND SPACE
              </h4>
              <p className="text-lg mb-4">
                Whether you have a particular idea in mind, are seeking
                something similar to a past work of Preeti Arts's or would like
                a recommendation based on the space where the artwork will be
                displayed, think about how you would like the artwork to look.
                All ideas and suggestions are welcome.
              </p>
              <p className="text-lg">
                If the commission is to be created from a reference photograph,
                such as a portrait, a clear, sharp image is necessary to produce
                a drawing that captures the likeness, detail and character of
                the subject. Some helpful tips on capturing a suitable reference
                photograph can be found here.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <h4 className="text-xl mb-4">2. SUBMIT YOUR ENQUIRY</h4>
              <p className="text-lg">
                When ready, please complete and submit the enquiry form below,
                describing your ideas for the artwork in as much detail as
                possible and attaching any images (if appropriate). Once this
                information is received, Preeti Arts will contact you at his
                earliest convenience to start discussing your commission.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h4 className="text-xl mb-4">3. PAYMENT</h4>
              <p className="text-lg mb-4">
                Following discussion and acceptance of the booking, a deposit of
                30% of the commission price is required to start work. This is
                to secure the time in Preeti Arts's diary and initial outlay of
                materials and is non-refundable. The balance is due by, or at
                the time of completion, and paid prior to shipment.
              </p>
              <p className="text-lg">
                Once the commission order is confirmed, you will receive an
                email with an invoice for the deposit from which payment can be
                made directly by either credit/debit card or PayPal. Direct bank
                transfer/deposit is possible for clients within Australia.
                Cheques are not accepted.
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <h4 className="text-xl mb-4">4. PRELIMINARY SKETCH</h4>
              <p className="text-lg">
                Preeti Arts will prepare a rough pencil sketch based on the
                details discussed and/or chosen reference photograph. This will
                provide an opportunity to make adjustments, refinements and to
                confirm composition, pose and placement of all the artwork
                elements.
              </p>
            </div>

            {/* Step 5 */}
            <div>
              <h4 className="text-xl mb-4">5. TIMEFRAME</h4>
              <p className="text-lg">
                Like everything of quality and value, the creation of original
                art takes time. Completion times will vary depending on the
                size, detail and complexity. Please keep this in mind and advise
                if the commission is for a special occasion or required by
                specific date when completing the enquiry form. While all
                reasonable efforts will be made, unfortunately not all
                timeframes are possible, and this will be advised prior to
                confirming any booking. You will be kept updated progress
                photos, at which point adjustments can be made only within the
                scope of possibility.
              </p>
            </div>

            {/* Step 6 */}
            <div>
              <h4 className="text-xl mb-4">6. COMPLETION AND DELIVERY</h4>
              <p className="text-lg mb-4">
                The completed artwork will be sent flat, between sheets of
                acid-free glassine paper and reinforced board, accompanied by a
                care instruction guide.
              </p>
            </div>
          </div>

          <h3 className="text-2xl mt-12 mb-6">FRAMING</h3>
          <p className="text-lg mb-12">
            Professional framing is an investment in itself to match the quality
            of the artwork, its presentation and protection. Preeti Arts can
            provide guidance on appropriate framing if desired. The cost of
            framing and installation are separate from the commission price.
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-6">
            REACH OUT TO DISCUSS YOUR COMMISSION
          </h3>

          {/* Commission Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2">First name</label>
                <input type="text" className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-lg mb-2">Last name</label>
                <input type="text" className="w-full p-3 border rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2">Email address</label>
                <input type="number" className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-lg mb-2">Number of subjects</label>
                <input type="text" className="w-full p-3 border rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2">Size</label>
                <select className="w-full p-3 border rounded-lg">
                  <option>A5 (21 x 14.8 cm)</option>
                  <option>A4 (29.7 x 21 cm)</option>
                  <option>A3 (42 x 29.7 cm)</option>
                </select>
              </div>
              <div>
                <label className="block text-lg mb-2">Location</label>
                <input type="text" className="w-full p-3 border rounded-lg" />
              </div>
            </div>

            <div>
              <label className="block text-lg mb-2">Ideal delivery date</label>
              <input type="date" className="w-full p-3 border rounded-lg" />
            </div>

            <div>
              <label className="block text-lg mb-2">
                How did you find Preeti Arts?
              </label>
              <textarea className="w-full p-3 border rounded-lg h-32"></textarea>
            </div>

            <div>
              <label className="block text-lg mb-2">
                Additional commission information
              </label>
              <textarea className="w-full p-3 border rounded-lg h-48"></textarea>
            </div>

            <div>
              <label className="block text-lg mb-2">
                Upload file (max 15MB)
              </label>
              <input
                type="file"
                className="w-full p-3 border rounded-lg"
                accept="image/*,.pdf"
              />
            </div>

            <button className="w-full bg-primary border-2 border-black text-white py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors text-lg font-semibold">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Commission;
