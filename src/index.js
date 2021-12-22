import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
<div>
  <h1 style={{ color: "CornflowerBlue" }}>Field Arrays Example | Formik</h1>
</div>;
const initialValues = {
  friends: [
    {
      name: "",
      email: ""
    }
  ]
};

const InviteFriends = () => (
  <div>
    <h2 style={{ color: "CornflowerBlue" }}>Invite Friends</h2>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="friends">
            {({ insert, remove, push }) => (
              <div>
                {values.friends.length > 0 &&
                  values.friends.map((friend, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label
                          htmlFor={`friends.${index}.name`}
                          style={{ color: "CornflowerBlue" }}
                        >
                          Name
                        </label>
                        <Field
                          name={`friends.${index}.name`}
                          placeholder="Your Name"
                          type="text"
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <br />
                      <div className="col">
                        <label
                          htmlFor={`friends.${index}.email`}
                          style={{ color: "CornflowerBlue" }}
                        >
                          Email
                        </label>
                        <Field
                          name={`friends.${index}.email`}
                          placeholder="youremail@example.com"
                          type="email"
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <br />
                      <div className="col">
                        <button
                          style={{ backgroundColor: "#bad0f7" }}
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                        <br />
                      </div>
                    </div>
                  ))}
                <br />
                <button
                  style={{ backgroundColor: "#bad0f7" }}
                  type="button"
                  className="secondary"
                  onClick={() => push({ name: "", email: "" })}
                >
                  Add Friend
                </button>
              </div>
            )}
          </FieldArray>
          <br />
          <button style={{ backgroundColor: "#bad0f7" }} type="submit">
            Invite
          </button>
        </Form>
      )}
    </Formik>
    <p>
      <h1 style={{ color: "CornflowerBlue" }}>Field Arrays Example | Formik</h1>
    </p>
  </div>
);

ReactDOM.render(<InviteFriends />, document.getElementById("root"));
