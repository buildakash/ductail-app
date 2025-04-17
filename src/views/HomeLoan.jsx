import React, { useState, useEffect } from 'react';

const HomeLoan = () => {
  const [showMore, setShowMore] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    district: '',
    taluk: '',
    query: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Apply input restrictions
    if (name === "name") {
      newValue = value.replace(/[^A-Za-z\s]/g, '');
    } else if (name === "phone") {
      newValue = value.replace(/\D/g, '');
      if (newValue.length > 10) {
        newValue = newValue.slice(0, 10);
      }
    } else if (name === "email") {
      newValue = value.toLowerCase();
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue,
      ...(name === "state" ? { district: "", taluk: "" } : {}),
      ...(name === "district" ? { taluk: "" } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-full ">
      {/* Hero Section with Background Image */}
      <div
        className="h-[66vh]  flex flex-col items-center justify-center text-center bg-cover  relative"
        style={{ backgroundImage: "url('/assets/Home Loan.png')" }}
      >
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Main Content Container */}
  <div className="relative z-10 min-h-[80vh] flex items-centerpx-6 py-12">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Title Section */}
        <div className="text-white flex-1 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            <span className="text-yellow-400">Smart Loans for </span>
            Smart Homes
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            Apply effortlessly with Ducktail – Click, Apply, and Move Into your dream home today!
          </p>
          <p className="text-yellow-400 text-lg mt-2">Loan start at 8.3%</p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg p-6 shadow-lgw-full max-w-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <select 
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select State</option>
            </select>
            <select 
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select District</option>
            </select>
            <select 
              name="taluk"
              value={formData.taluk}
              onChange={handleChange}
              className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Taluk</option>
            </select>
            <textarea 
              name="query"
              placeholder="Your Query" 
              rows="2" 
              value={formData.query}
              onChange={handleChange}
              className="col-span-2 w-full p-2 h-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            <button 
              type="submit"
              className="col-span-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Service Request
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Types of Home Loan and Key Documents Section */}
      <div className="container mx-auto px-4 py-16 bg-white">
        {/* Types of Home Loan Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Types of Home Loan</h2>
          <div className={`space-y-8 ${showMore ? '' : 'max-h-[60vh] overflow-hidden'}`}>
            {/* Home Purchase Loan */}
            <div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#2563EB" }}>1. Home Purchase Loan</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>A Home Purchase Loan is the most common type of home loan, designed for individuals looking to buy a new or resale residential property.</li>
                <li>The loan amount generally covers 75% to 90% of the property's value, based on the borrower's income, credit score, and repayment capacity.</li>
                <li>These loans come with fixed or floating interest rates and can be repaid through EMIs over a tenure of 10 to 30 years.</li>
              </ul>
            </div>
 <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>2. Home Construction Loan</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>This loan is ideal for individuals who already own a plot of land and want to construct a house. </li>
              <li style={{ fontSize: "16px" }}>The disbursement happens in phases based on the progress of construction, ensuring that funds are used appropriately.
</li>
              <li style={{ fontSize: "16px" }}> Borrowers must submit a detailed construction plan, cost estimate, and legal land ownership documents to avail of this loan.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>3. Land or Plot Loan</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>A Land or Plot Loan is offered to borrowers who want to purchase a residential plot to construct a home in the future.</li>
              <li style={{ fontSize: "16px" }}>Unlike home purchase loans, these loans have a shorter tenure (typically 10-15 years) and higher interest rates.</li>
              <li style={{ fontSize: "16px" }}>Higher interest rates than home purchase loans</li>
              <li style={{ fontSize: "16px" }}>The borrower must ensure that the plot is located within municipal or development authority limits for loan approval.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>4. Home Improvement Loan</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>A Home Improvement Loan is used for renovating, repairing, or upgrading an existing home.</li>
              <li style={{ fontSize: "16px" }}> It covers expenses such as painting, flooring, plumbing, electrical work, structural repairs, and even kitchen or bathroom remodeling. </li>
              <li style={{ fontSize: "16px" }}>The loan is usually offered with flexible repayment options and requires the borrower to submit an estimate of renovation costs.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>5. Home Extension Loan</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>A Home Extension Loan is useful for homeowners who want to expand their living space by adding extra rooms, constructing an additional floor, or modifying the existing structure. 
</li>
              <li style={{ fontSize: "16px" }}>This loan is commonly availed by growing families who need additional space. Borrowers need to provide architectural plans and an estimated construction cost to get approval.
</li>
 
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>6. Balance Transfer Home Loan</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>A Balance Transfer Home Loan allows borrowers to transfer an existing home loan to another lender offering a lower interest rate. 
</li>
              <li style={{ fontSize: "16px" }}>This helps in reducing the overall interest burden and lowering EMI payments. The borrower must have a good repayment track record to qualify for the transfer. 
</li>
              <li style={{ fontSize: "16px" }}>Lowers EMI payments</li>
              <li style={{ fontSize: "16px" }}>Some banks offer top-up loans with balance transfers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>7. NRI Home Loans</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>Designed for Non-Resident Indians to purchase property in India</li>
              <li style={{ fontSize: "16px" }}>The documentation and eligibility criteria for NRI home loans are different from those for Indian residents, requiring additional documents like overseas income proof, NRI account details, and passport/visa copies. 
</li>
              <li style={{ fontSize: "16px" }}>Many banks offer specialized NRI loan services with dedicated customer support.</li>

            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>8. PMAY Subsidy-Linked Loans</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>Under the Pradhan Mantri Awas Yojana (PMAY), eligible first-time homebuyers can avail of interest subsidies on their home loans. 
</li>
              <li style={{ fontSize: "16px" }}>The scheme is targeted at families in the Economically Weaker Section (EWS), Low-Income Group (LIG), and Middle-Income Group (MIG). 
</li>
              <li style={{ fontSize: "16px" }}>The subsidy percentage depends on income category and loan amount, making homeownership more affordable.
</li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>9. Top-Up Home Loan</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>A Top-Up Home Loan is an additional loan provided on an existing home loan. Borrowers can use the funds for any purpose, including home renovation, medical emergencies, education expenses, or debt consolidation. The interest rate is usually lower than personal loans, making it an attractive financing option.
</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>10. Joint Home Loans</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>A Joint Home Loan is taken by two or more applicants, usually spouses, siblings, or parents and children. This helps in increasing loan eligibility since the combined income of the applicants is considered.</li>
              <li style={{ fontSize: "16px" }}> Co-borrowers can also avail tax benefits under sections 80C and 24(b) of the Income Tax Act. However, all applicants share equal liability in loan repayment.
</li>
            </ul>
          </div>

            {/* Additional Loan Types (truncated for brevity) */}
            {/* ... (previous loan type contents remain the same) ... */}
          </div>

          {/* Show More/Less Button Logic */}
          {!showMore && (
            <div className="text-center mt-6">
              <button 
                onClick={() => setShowMore(true)} 
                className="text-orange-500 font-semibold"
              >
                Show More
              </button>
            </div>
          )}

          {/* Key Documents Section */}
          {showMore && (
            <>
              <h2 className="text-3xl font-bold text-center mb-6 mt-8">Key Documents for Home Loan</h2>
              
              <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>1. Identity & Address Proof</h3>
                <h4 className="text-lg font-medium ml-4 mb-2" style={{ fontSize: "18px" }}>Applicants must provide valid identity and address proof, which can include:</h4>
<ul className="list-disc pl-8 space-y-2">
                  <li style={{ fontSize: "16px" }}>Aadhaar Card</li>
                  <li style={{ fontSize: "16px" }}>PAN Card</li>
                  <li style={{ fontSize: "16px" }}>Passport</li>
                  <li style={{ fontSize: "16px" }}>Voter ID</li>
                  <li style={{ fontSize: "16px" }}>Driving License</li>
                  <li style={{ fontSize: "16px" }}>These establish personal details and residential address</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>2. Income Proof</h3>
                <h4 className="text-lg font-medium ml-4 mb-2" style={{ fontSize: "18px" }}>For Salaried Individuals:</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li style={{ fontSize: "16px" }}>Last 3 to 6 months' salary slips</li>
                  <li style={{ fontSize: "16px" }}>Latest Form 16 or Income Tax Return (ITR)</li>
                  <li style={{ fontSize: "16px" }}>Bank statements (last 6 months) showing salary credits</li>
                </ul>
                
                <h4 className="text-lg font-medium ml-4 mb-2 mt-4" style={{ fontSize: "18px" }}>For Self-Employed Individuals & Business Owners:</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li style={{ fontSize: "16px" }}>Last 3 years' Income Tax Returns (ITR)</li>
                  <li style={{ fontSize: "16px" }}>Audited financial statements (Profit & Loss, Balance Sheet)</li>
                  <li style={{ fontSize: "16px" }}>Business registration documents (GST certificate, Trade License, etc.)</li>
                  <li style={{ fontSize: "16px" }}>Bank statements (last 12 months)</li>
                </ul>
              </div>

              <div>
               
                <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>3. Property Documents</h3>
                <h4 className="text-lg font-medium ml-4 mb-2" style={{ fontSize: "18px" }}>To verify legal ownership and ensure that the property is free from disputes, the following property-related documents are required:</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li style={{ fontSize: "16px" }}>Sale Agreement (Proof of property purchase)</li>
                  <li style={{ fontSize: "16px" }}>Title Deed (Legal ownership document)</li>
                  <li style={{ fontSize: "16px" }}>Encumbrance Certificate (EC) (Ensures no pending legal dues)</li>
                  <li style={{ fontSize: "16px" }}>Approved Building Plan (Issued by the municipal authority)</li>
                  <li style={{ fontSize: "16px" }}>No Objection Certificate (NOC) from relevant authorities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>4. Additional Documents</h3>
                <h4 className="text-lg font-medium ml-4 mb-2" style={{ fontSize: "18px" }}>Banks may also ask for:</h4>
 <ul className="list-disc pl-8 space-y-2">
                  <li style={{ fontSize: "16px" }}>Recent passport-size photographs</li>
                  <li style={{ fontSize: "16px" }}>Existing loan/credit card statements (if any)</li>
                  <li style={{ fontSize: "16px" }}>Processing fee cheque for loan application</li>
                  <li style={{ fontSize: "16px" }}>Co-applicants documents (if applying for a joint loan)</li>
                </ul>
              </div>
            </div>

            
              {/* Show Less Button */}
              <div className="text-center mt-6">
                <button 
                  onClick={() => setShowMore(false)} 
                  className="text-orange-500 font-semibold"
                >
                  Show Less
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;