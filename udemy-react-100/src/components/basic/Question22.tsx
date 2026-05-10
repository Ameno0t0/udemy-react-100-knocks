import { useRef, useState, type ChangeEvent } from "react";
type SubmittedData = {
  name: string;
  email: string;
  fileName: string;
}

const UncontrolledForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);
  const [fileName, setFileName] = useState<File | "">("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // refから値を取得
    setSubmittedData({
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      fileName: fileRef.current?.value ?? ""
    });
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // ファイル選択処理
    const file = e.currentTarget.files?.[0] ?? "";
    setFileName(file);
  }

  const focusFirstEmpty = () => {
    // 最初の空フィールドにフォーカス
    const fields = [
      {
        ref: nameRef,
        isEmpty: !nameRef.current?.value,
      },
      {
        ref: emailRef,
        isEmpty: !emailRef.current?.value,
      },
      {
        ref: fileRef,
        isEmpty: !fileRef.current?.value,
      },
    ];
    const emptyField = fields.find(field => field.isEmpty);
    emptyField?.ref.current?.focus();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>名前：</label>
          <input ref={nameRef} type="text" />
        </div>

        <div>
          <label>メール：</label>
          <input ref={emailRef} type="text" />
        </div>

        <div>
          <label>ファイル：</label>
          <input ref={fileRef} type="file"
            onChange={handleFileChange}
          />
          {fileName && <p>選択：{fileName.name}</p>}
        </div>

        <button type="submit">送信</button>
        <button type="button" onClick={focusFirstEmpty}>
          空欄にフォーカス
        </button>
      </form>

      {submittedData && (
        <div>
          <h4>送信データ</h4>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UncontrolledForm;