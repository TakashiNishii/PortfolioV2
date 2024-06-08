import {
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4 mt-16">
      <h2 className="text-4xl font-bold text-primary">Contacts</h2>
      <h3 className="text-lg text-base-200 text-center">
        If you want to talk to me, here are some ways to contact me.
      </h3>

      <div className="flex flex-col gap-2 justify-center items-center w-full md:flex-row">
        <div className="card w-full max-w-sm bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <EnvelopeIcon className="w-24 h-24 text-primary" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Email</h2>
            <p>ygortn14@gmail.com</p>
            <div className="card-actions">
              <Link
                href="mailto:ygortn14@gmail.com"
                className="btn-link flex flex-row hover:text-accent"
              >
                Send an email
                <PaperAirplaneIcon className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="card w-full max-w-sm bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <ChatBubbleOvalLeftEllipsisIcon className="w-24 h-24 text-primary" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Whatsapp</h2>
            <p>+55 18 99668-2139</p>
            <div className="card-actions">
              <Link
                href={"https://api.whatsapp.com/send?phone=5518996682139"}
                target="_blank"
                className="btn-link flex flex-row hover:text-accent"
              >
                Send a message
                <PaperAirplaneIcon className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
