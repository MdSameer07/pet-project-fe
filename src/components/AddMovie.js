import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import moment from "moment";
import * as yup from "yup";
import "./AddMovie.css";

export const AddMovie = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [response, setResponse] = useState("");
  const fixedAdminId = localStorage.getItem('adminId')

  const formInitialSchema = {
    name: "",
    image: "",
    director: "",
    description: "",
    rating: "",
    ott: "",
    category: "",
    releaseDate: "",
  };

  const formValidationSchema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    image: yup.string().required("Image is Required"),
    director: yup.string().required("Director is Required"),
    description: yup.string().required("Description is Required"),
    rating: yup.number().required("Rating is Required"),
    ott: yup.string().required("Ott is Required"),
    category: yup.string().required("Category is Required"),
    releaseDate: yup.date().required("Release Date is Required"),
  });

  const handleAddMovieSubmit = async (values) => {
    setSubmitButtonDisabled(true);
    const formatted_date = moment(values.releaseDate.toString()).format(
      "DD-MM-YYYY"
    );
    const reqBody = {
      name: String(values.name),
      imageurl: String(values.image),
      director: String(values.director),
      description: String(values.description),
      rating: values.rating,
      category: String(values.category),
      admin_id: parseInt(fixedAdminId),
      movieott: String(values.ott),
      release_date: formatted_date,
    };
    const response = await fetch("admin/add-movie-to-database", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    const data = await response.json();
    setResponse(data);
  };

  useEffect(() => {
    window.scrollTo(0,0)
    console.log(response.movie);
  }, [response]);

  return (
    <>
    {response &&
      <div className="response-whole">
        <div className="response">
          <div className="response-body">
            Movie created Successfully with Id : {response.movie.id}
          </div>
        </div>
      </div>
}
      <div className="addmovie-page">
        <div className="addmovie-form-outer">
          <Fragment>
            <div className="add-movie-whole">
              <Formik
                initialValues={formInitialSchema}
                validationSchema={formValidationSchema}
                onSubmit={(values) => handleAddMovieSubmit(values)}
              >
                {({ values }) => (
                  <Form className="add-movie-form">
                    <div className="component">
                      <div className="input">Name</div>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Enter Movie Name"
                        className="addmovie-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="name" />
                      </p>
                    </div>
                    <div className="component">
                      <div className="input">Image</div>
                      <Field
                        type="text"
                        name="image"
                        placeholder="Enter Movie Image url"
                        className="addmovie-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="image" />
                      </p>
                    </div>
                    <div className="component">
                      <div className="input">Director</div>
                      <Field
                        type="text"
                        name="director"
                        placeholder="Enter Movie Director"
                        className="addmovie-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="director" />
                      </p>
                    </div>
                    <div className="component">
                      <div className="input">Description</div>
                      <Field
                        as="textarea"
                        name="description"
                        placeholder="Enter Movie Description"
                        className="addmovie-control"
                        rows={4}
                      />
                      <p className="text-danger">
                        <ErrorMessage name="description" />
                      </p>
                    </div>
                    <div className="component">
                      <div className="input">Rating</div>
                      <Field
                        type="text"
                        name="rating"
                        placeholder="Enter Movie Rating"
                        className="addmovie-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="rating" />
                      </p>
                    </div>
                    <div className="component">
                      <div className="input">Ott</div>
                      <Field
                        type="text"
                        name="ott"
                        placeholder="Enter Movie Ott"
                        className="addmovie-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="ott" />
                      </p>
                    </div>
                    <div className="component">
                      <div className="input">Category</div>
                      <Field
                        type="text"
                        name="category"
                        placeholder="Enter Movie Category"
                        className="addmovie-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="category" />
                      </p>
                    </div>
                    <div className="component">
                      <div className="input">AdminId</div>
                      <Field
                        type="text"
                        name="adminId"
                        placeholder="Enter Admin Id"
                        className="addmovie-control"
                        readOnly={true}
                        value={fixedAdminId}
                      />
                      <p className="text-danger">
                        {/* <ErrorMessage name="adminId" /> */}
                      </p>
                    </div>
                    <div className="component">
                      <div className="input">Release Date</div>
                      <Field
                        type="date"
                        name="releaseDate"
                        placeholder="Enter Movie Release Date"
                        className="addmovie-control"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="releaseDate" />
                      </p>
                    </div>
                    <div className="error-message">{errorMsg}</div>
                    <div className="end">
                      <button
                        className="addmovie-button"
                        type="submit"
                        disabled={submitButtonDisabled}
                      >
                        Add Movie
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Fragment>
        </div>
      </div>
    </>
  );
};
