import { useState, useRef } from "react";

type FieldName = "field1" | "field2" | "field3";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const FocusBlurEvents = () => {
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);
  const [values, setValues] = useState<Values>({ field1: "", field2: "", field3: ""});
  const [errors, setErrors] = useState<Errors>({});
  const field2Ref = useRef<HTMLInputElement>(null);
  const field3Ref = useRef<HTMLInputElement>(null);

  const handleFocus = (fieldName: FieldName) => {
    // フォーカス処理
    setFocusedField(fieldName);
  };
  
  const handleBlur = (fieldName: FieldName, value: string) => {
    // ブラー処理とバリデーション 
    setFocusedField(null);

    if(value === "") return;

    if(value.length < 3) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: "3文字以上入力してください"
      }))
    } else {
    setErrors((prev) => ({
      ...prev,
      [fieldName]: "",
    }));
  }
  };
  
  const handleChange = (fieldName: FieldName, value: string) => {
    // 入力処理と自動フォーカス
    setValues((prev) => ({
      ...prev,
      [fieldName]: value
    }));

    if(fieldName === "field1" && value.length === 3) {
      field2Ref.current?.focus();
    } 

    if(fieldName === "field2" && value.length === 3) {
      field3Ref.current?.focus();
    } 

  };
  
  const isFormValid = () => {
	  // 全フィールドが有効かチェック
    return(
      values.field1.length >= 3 &&
      values.field2.length >= 3 &&
      values.field3.length >= 3 
    )
  }
  return (
    <div> 
      <div>
        <input 
          type="text" 
          placeholder="3文字入力"
          style={{
            borderColor: focusedField === "field1" ? "blue" : "#ccc",
            borderWidth: "2px"
          }}
          onFocus={() => handleFocus("field1")}
          onChange={(e) => handleChange("field1", e.currentTarget.value)}
          onBlur={(e) => handleBlur("field1", e.currentTarget.value)}
        />
        {errors.field1 && <span style={{ color: "red" }}>{errors.field1}</span>}
      </div>
      <div>
        <input 
          type="text" 
          placeholder="3文字入力"
          style={{
            borderColor: focusedField === "field2" ? "green" : "#ccc",
            borderWidth: "2px"
          }}
          onFocus={() => handleFocus("field2")}
          ref={field2Ref}
          onChange={(e) => handleChange("field2", e.currentTarget.value)}
          onBlur={(e) => handleBlur("field2", e.currentTarget.value)}
        />
        {errors.field2 && <span style={{ color: "red" }}>{errors.field2}</span>}
      </div>
      <div>
        <input 
          type="text" 
          placeholder="3文字入力"
          style={{
            borderColor: focusedField === "field3" ? "yellow" : "#ccc",
            borderWidth: "2px"
          }}
          onFocus={() => handleFocus("field3")}
          ref={field3Ref}
          onChange={(e) => handleChange("field3", e.currentTarget.value)}
          onBlur={(e) => handleBlur("field3", e.currentTarget.value)}
        />
        {errors.field3 && <span style={{ color: "red" }}>{errors.field3}</span>}
      </div>

      <button 
      disabled={!isFormValid()}
        style={{
          padding: "10px 20px",
          backgroundColor: isFormValid() ?  "#4CAF50" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: isFormValid() ? "pointer" : "not-allowed"
        }}>
        送信
      </button>
    </div>
  );
};

export default FocusBlurEvents;