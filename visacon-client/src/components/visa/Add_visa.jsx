import { Checkbox, Select } from "antd";
import { useContext, useState } from "react";
import { GiCommercialAirplane } from "react-icons/gi";

import { VisaProfile } from "../context/Context";
import Swal from "sweetalert2";

export default function Add_visass() {
  const { setadvisaInfo } = useContext(VisaProfile);
  const [documents, setDocuments] = useState([]);
  const [visaType, setVisatype] = useState("Student visa");

  const handleAddVisa = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const country = form.get("country");
    const image = form.get("image");
    const processing_time = form.get("processing_time");
    const description = form.get("description");
    const age = form.get("age");
    const fee = form.get("fee");
    const validity = form.get("validity");
    const method = form.get("method");

    const visaDatas = {
      country,
      image,
      documents,
      processing_time,
      description,
      age,
      visaType,
      fee,
      validity,
      method,
    };

    try {
      const res = await fetch("http://localhost:5000/get-visa", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(visaDatas),
      });
      const data = await res.json();
      console.log("visa data save is DB", data);
    } catch (err) {
      console.log(err);
    }
    setadvisaInfo(visaDatas);

    console.log("?????????????", visaDatas);

    if (visaDatas.country) {
      Swal.fire({
        icon: "success",
        position: "center",
        title: "Successfully visa Added",
        timer: 2000,
      });
    }

    setDocuments([]);
    setVisatype("");
    e.target.reset();
  };

  const options = [
    {
      label: <span className="text-white">Valid passport</span>,
      value: "Valid passport",
    },
    {
      label: <span className="text-white">Visa application form</span>,
      value: "Visa application form",
    },
    {
      label: (
        <span className="text-white">Recent passport-sized photograph</span>
      ),
      value: "Recent passport-sized photograph",
    },
  ];

  return (
    <div className="py-20 mb-10 max-h- bg-[#943C46] rounded-sm">
      <h2 className="flex flex-row justify-center gap-10 text-center text-5xl font-bold my-10 ">
        Add your Visa for <GiCommercialAirplane className="text-[#EDCB2B] " />
      </h2>
      <form
        onSubmit={handleAddVisa}
        type="submit"
        className="border mx-auto w-3/5 rounded-xl flex flex-col pt-10 items-center bg-[#485343]"
      >
        <div className="flex flex-row gap-10 w-4/5">
          <div className="w-full">
            <div className="flex flex-col space-y-2 mb-4">
              <label>
                Country Name <span className="text-red-500 text-xl">*</span>
              </label>
              <input
                type="text"
                placeholder="country"
                name="country"
                required
                className="px-4 py-2 border"
              />
            </div>
            <div className="flex flex-col space-y-2 mb-4 ">
              <label>Country Image</label>
              <input
                type="text"
                placeholder="image"
                name="image"
                className="px-4 py-2 border"
              />
            </div>
            <div className=" flex flex-col ">
              <label className="mb-2 text-left">Select Your Visa Type</label>
              <Select
                value={visaType}
                onChange={(value) => setVisatype(value)}
                style={{
                  width: "100%",
                  marginBottom: ".5rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  backgroundColor: "#485343",
                  color: "white",
                }}
                options={[
                  { label: "Tourist visa", value: "Tourist visa" },
                  {
                    label: "Student visa",
                    value: "Student visa",
                  },
                  {
                    label: "Work visa",
                    value: "Work visa",
                  },
                ]}
              />
              <div className="flex flex-col space-y-2 mb-4 ">
                <lebel className=" text-left">Required Documents</lebel>
                <Checkbox.Group
                  options={options}
                  value={documents}
                  onChange={(value) => setDocuments(value)}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 mb-4 ">
              <label>Processing Time</label>
              <input
                type="text"
                placeholder="Processing time"
                name="processing_time"
                className="px-4 py-2 border"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col space-y-2 mb-4 ">
              <label>Description</label>
              <textarea
                type="text"
                placeholder="description"
                name="description"
                className="px-4 py-2 border"
              />
            </div>
            <div className="flex flex-col space-y-2 mb-4 ">
              <label>
                Age Restriction <span className="text-red-500 text-xl">*</span>
              </label>
              <input
                type="text"
                placeholder="age"
                name="age"
                className="px-4 py-2 border"
                required
              />
            </div>
            <div className="flex flex-col space-y-2 mb-4 ">
              <label>
                Visa Fee <span className="text-red-500 text-xl">*</span>
              </label>
              <input
                type="text"
                placeholder="fee"
                name="fee"
                className="px-4 py-2 border"
                required
              />
            </div>
            <div className="flex flex-col space-y-2 mb-4 ">
              <label>Validity</label>
              <input
                type="text"
                placeholder="validity"
                name="validity"
                className="px-4 py-2 border"
              />
            </div>
            <div className="flex flex-col space-y-2 mb-4 ">
              <label>Application Method </label>
              <input
                type="text"
                placeholder="method"
                name="method"
                className="px-4 py-2 border"
              />
            </div>
          </div>
        </div>
        <button className="w-2/5 font-bold py-2 my-5 border rounded cursor-pointer bg-[#3A1E29]">
          Add Visa
        </button>
      </form>
    </div>
  );
}
