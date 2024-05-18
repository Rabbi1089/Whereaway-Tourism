import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useHook from "../Hook/useHook";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createUser , updateUserProfile } = useHook();
  const [ErrorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password , name , PhotoUrl} = data;
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Use at least one capital word");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setErrorMessage("Use at least one lowercase word");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(name, PhotoUrl).then(() => {
          toast.success("Registration successful");
          navigate(from);
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-[560px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Create a Whereaway account so you can save your favourite trips
              for as long as you need , already have a account ?{" "}
              <Link to="/SignIn">
                <span className=" text-blue-500 font-semibold">Login</span>
              </Link>{" "}
              Now
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className=" text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo-URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo-Url"
                  name="PhotoUrl"
                  className="input input-bordered"
                  {...register("PhotoUrl")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className=" text-red-500">This field is required</span>
                )}
                {ErrorMessage && (
                  <span className=" text-red-500">{ErrorMessage}</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
