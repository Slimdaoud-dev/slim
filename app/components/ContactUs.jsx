"use client";
import { motion } from "framer-motion";
import { card } from "../../public";
import { slideIn } from "../styles/animations";
import Button from "./Button";
import Image from "next/image";

const ContactUs = () => (
  <section className="section" id="contact-Us">
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </motion.div>

    <motion.div
      className="sectionImg"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
    <div>
    <div className="container relative m-6 px-0 text-gray-500 md:px-12 xl:px-40 mt-0">
 
      
        <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
          <div className="p-8 py-12 sm:p-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
              Sign in to your account
            </h2>
            <form action="" className="space-y-8">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-gray-600 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="username"
                  className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="pwd"
                    className="text-gray-600 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <button className="-mr-2 p-2" type="reset">
                    <span className="text-sm text-primary">
                      Forgot your password ?
                    </span>
                  </button>
                </div>
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  autoComplete="current-password"
                  className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                />
              </div>
              <button
                type="submit"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  Connect
                </span>
              </button>
              <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                Dont have an account ?
                <a href="#" className="text-primary">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      
      </div>
    </div>
  
  
    </motion.div>
  </section>
);

export default ContactUs;
