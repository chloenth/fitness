import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

import { SelectedPage } from "@/shared/types";

import HText from "@/shared/HText";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const inputStyles = `mt-5 bg-primary-300 w-full rounded-lg px-5 py-3 placeholder-white`;

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
    setIsSubmitting(true);
  };

  console.log(isSubmitting);

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">Join now</span> to get in shape
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              action="https://formsubmit.co/ef54f82c55fb0cc0ea30ebf63d085a2a"
              method="POST"
              onSubmit={onSubmit}
            >
              {/* Name */}
              <input
                className={`${inputStyles}`}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.name && (
                <p className="text-primary-500 mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              {/* Email */}
              <input
                className={`${inputStyles}`}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />

              {errors.email && (
                <p className="text-primary-500 mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              {/* Message */}
              <textarea
                className={`${inputStyles}`}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />

              {errors.message && (
                <p className="text-primary-500 mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <div className="flex gap-8">
                <button
                  type="submit"
                  className="bg-secondary-500 mt-5 rounded-lg px-20 py-3 transition duration-500 hover:text-white"
                >
                  Submit
                </button>

                {isSubmitting && (
                  <div className="content-end">
                    <ClipLoader color="#fcac4e" />
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
