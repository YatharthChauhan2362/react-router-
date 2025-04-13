import { useForm } from "react-hook-form";
import "./Form.css";



function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Convert string to camelCase
  const toCamelCase = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, "");

  function onSubmit(data) {
    // Convert all string fields to camelCase
    const camelCasedData = {};
    for (let key in data) {
      if (typeof data[key] === "string") {
        camelCasedData[key] = toCamelCase(data[key]);
      } else {
        camelCasedData[key] = data[key];
      }
    }

    console.log("Submitting the form:", camelCasedData);
    alert("Form submitted successfully!\n\n" + JSON.stringify(camelCasedData, null, 2));
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1><b>FORM VALIDATION</b></h1>
        </div>

        {/* First Name */}
        <div>
          <label>First Name</label>
          <input
            {...register("FirstName", {
              required: "First Name is required",
              minLength: { value: 3, message: "Min length at least 3" },
              maxLength: { value: 6, message: "Max length at most 6" },
            })}
          />
          {errors.FirstName && <p className="error">{errors.FirstName.message}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name</label>
          <input
            {...register("LastName", {
              required: "Last Name is required",
            })}
          />
          {errors.LastName && <p className="error">{errors.LastName.message}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <label>Mobile Number</label>
          <input
            {...register("MobileNumber", {
              required: "Mobile Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Mobile number must be exactly 10 digits",
              },
            })}
          />
          {errors.MobileNumber && <p className="error">{errors.MobileNumber.message}</p>}
        </div>

        {/* State */}
        <div>
          <label>State</label>
          <select
            {...register("State", {
              required: "State is required",
            })}
          >
            <option value="">Select State</option>
            <option value="Uttar pradesh">Uttar pradesh</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
          </select>
          {errors.State && <p className="error">{errors.State.message}</p>}
        </div>

        {/* City */}
        <div>
          <label>City</label>
          <select
            {...register("City", {
              required: "City is required",
            })}
          >
            <option value="">Select City</option>
            <option value="Pratapgarh">Pratapgarh</option>
            <option value="Sultanpur">Sultanpur</option>
            <option value="Prayagraj">Prayagraj</option>
          </select>
          {errors.City && <p className="error">{errors.City.message}</p>}
        </div>

        {/* Comments */}
        <div>
          <label>Comments</label>
          <textarea
            {...register("Comments", {
              required: "Comments are required",
            })}
          />
          {errors.Comments && <p className="error">{errors.Comments.message}</p>}
        </div>

        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
