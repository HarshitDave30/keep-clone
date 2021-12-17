import React, { useState } from "react";
import {Form, FormGroup, Input} from "reactstrap";

function CreateTask({addTask}) {

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!value) {
        return true;
    }

    addTask(value);
    setValue("")
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            id="exampleTask"
            placeholder="Take A Note..."
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value) }
          />
        </FormGroup>
      </Form>
    </div>
  );
}

export default CreateTask;
