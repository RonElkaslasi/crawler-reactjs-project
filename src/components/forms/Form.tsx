import { ChangeEvent, useState } from "react";
import { submitDetailForScrapeJob } from "../../api/api-handler";

const Form = () => {
  const [userInput, setUserInput] = useState({
    startUrl: "",
    maxDepth: "",
    maxTotalPages: "",
  });
  const [isUserInputValid, setIsUserInputValid] = useState({
    isstartUrlValid: true,
    ismaxDepthValid: true,
    ismaxTotalPagesValid: true,
  });

  const onChangeDetail = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (value === "") {
      setIsUserInputValid({ ...isUserInputValid, [`is${name}Valid`]: false });
    } else {
      setIsUserInputValid({ ...isUserInputValid, [`is${name}Valid`]: true });
    }

    setUserInput({ ...userInput, [name]: value });
  };

  const isFormInvalid = () => {
    return (
      userInput.maxDepth === "" ||
      userInput.maxTotalPages === "" ||
      userInput.startUrl === ""
    );
  };

  const onSubmitForm = async (event: any) => {
    event.preventDefault();
    const messageBody = {
      startUrl: userInput.startUrl,
      maxDepth: userInput.maxDepth,
      maxTotalPages: userInput.maxTotalPages,
    };

    const res = await submitDetailForScrapeJob(messageBody, userInput.startUrl);
    console.log(res);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={onSubmitForm}>
        <input
          name="startUrl"
          value={userInput.startUrl}
          placeholder="Enter start Url"
          onChange={onChangeDetail}
        />
        <input
          name="maxDepth"
          value={userInput.maxDepth}
          placeholder="Enter max depth"
          onChange={onChangeDetail}
        />
        <input
          name="maxTotalPages"
          value={userInput.maxTotalPages}
          placeholder="Enter max total pages"
          onChange={onChangeDetail}
        />
        <button type="submit" disabled={isFormInvalid()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
