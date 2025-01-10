// ModalForm.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./ModalForm.module.css";

const schema = yup.object().shape({
  reason: yup.string().required("Please select a reason."),
  fullName: yup.string().required("Full name is required."),
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Email is required."),
  phone: yup.string().required("Phone number is required."),
});

const ModalForm = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    onClose(); // Закрити модальне вікно після успішної відправки
  };

  // Закриття модального вікна на Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // Зупинити закриття при кліку всередині модального вікна
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>Book trial lesson</h2>
        <p className={styles.description}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.radioGroup}>
            <p>What is your main reason for learning English?</p>
            <label>
              <input
                type="radio"
                value="Career and business"
                {...register("reason")}
              />
              Career and business
            </label>
            <label>
              <input
                type="radio"
                value="Lesson for kids"
                {...register("reason")}
              />
              Lesson for kids
            </label>
            <label>
              <input
                type="radio"
                value="Living abroad"
                {...register("reason")}
              />
              Living abroad
            </label>
            <label>
              <input
                type="radio"
                value="Exams and coursework"
                {...register("reason")}
              />
              Exams and coursework
            </label>
            <label>
              <input
                type="radio"
                value="Culture, travel or hobby"
                {...register("reason")}
              />
              Culture, travel or hobby
            </label>
            {errors.reason && (
              <p className={styles.error}>{errors.reason.message}</p>
            )}
          </div>
          <input
            className={styles.input}
            type="text"
            placeholder="Full Name"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className={styles.error}>{errors.fullName.message}</p>
          )}

          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          <input
            className={styles.input}
            type="text"
            placeholder="Phone number"
            {...register("phone")}
          />
          {errors.phone && (
            <p className={styles.error}>{errors.phone.message}</p>
          )}

          <button type="submit" className={styles.submitButton}>
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
