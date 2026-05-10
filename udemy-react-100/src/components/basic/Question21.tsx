import { useState } from "react";

type FieldName = "name" | "email" | "phone"; 
type FormData = Record<FieldName, string>
type Errors = Partial<Record<FieldName, string>>;

const ControlledForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState<Errors>({});

  const clearError = (field: FieldName) => {
    setErrors((prev) => {
      const next = {...prev};
      delete next[field];
      return next;
    })
  }

  const handleChange = (field: FieldName, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));

    // Validation Check
    // Name
    if (field === "name" ) {
      if (value !== "" && value.length < 2) {
        setErrors((prev) => ({
          ...prev,
          [field]: "名前は2文字以上で入力してください"
        }));
      } else {
        clearError(field)
      };
    };

    // Email
    if (field === "email") {
      if (value !==  "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          [field]: "有効なメールアドレスを入力してください"
        }));
      } else {
        clearError(field)
      };
    };

    // Phone
    if (field === "phone") {
      if (value !== "" && value.length < 10) {
        setErrors((prev) => ({
          ...prev,
          [field]: "携帯番号は10桁以上で入力してください"
        }));
      } else {
        clearError(field)
      };
    };
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`
  };

  const handleBlur = (field: FieldName, value: string) => {
    if(field === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({
        ...prev,
        phone: formatted,
      }));
    };
  }

  return (
    <div>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            名前：
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.currentTarget.value)}
              />
          </label>
          {errors.name && (
            <span style={{ color: "red", display: "block", fontSize: "12px" }}>
              {errors.name}
            </span>
          )}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            メールアドレス：
              <input 
                type="text"
                value={formData.email}
                onChange={(e) => handleChange("email", e.currentTarget.value)}
              />
          </label>
          {errors.email && (
            <span style={{ color: "red", display: "block", fontSize: "12px" }}>
              {errors.email}
            </span>
          )}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            携帯番号：
              <input 
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.currentTarget.value)}
                onBlur={(e) => handleBlur("phone", e.currentTarget.value)}
              />
          </label>
          {errors.phone && (
            <span style={{ color: "red", display: "block", fontSize: "12px" }}>
              {errors.phone}
            </span>
          )}
        </div>
        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
          <h4>入力内容:</h4>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </form>
    </div>
  );
}

export default ControlledForm;