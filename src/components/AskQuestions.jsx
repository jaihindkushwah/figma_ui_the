import React from "react";
import Accordion from "./Accordion";
import VectorIcon from "../assets/vectorIcon.jpeg";

function AskQuestions() {
  return (
    <div className="bg-[#E8EEE7] py-16  gap-5 px-2 min-h-[600px] rounded-[50px] mt-48 flex justify-between">
      <div className="flex-1 flex flex-col justify-between gap-7 ">
        <span className="ml-20 flex flex-col gap-4">
          <p className="text-[#9E9D9D] shadows-into-light-regular text-3xl">
            What’s on your mind
          </p>
          <p className="text-6xl font-semibold">Ask Questions</p>
        </span>
        <span className="pl-3">
          <img
            src={VectorIcon}
            className="h-[380px] rounded-2xl "
            style={{ marginBottom: "-60px" }}
            alt="icons"
          />
        </span>
      </div>
      <div className="flex-1 flex flex-col gap-7 px-12">
        <Accordion heading={"Do you offer freelancers ?"}>
          Yes we do. Our team of experts are here to help you.
        </Accordion>
        <Accordion
          heading={
            "What’s the guarantee that I will be satisfied with the hired talent ?"
          }
        >
          Our team of experts are here to help you.
        </Accordion>
        <Accordion
          heading={"Can I hire multiple talents at once?"}
          isOpen={true}
        >
          If unhappy with a project, communicate with the freelancer, allow for
          revisions, and refer to the agreement. Escalate to platform support if
          needed, considering mediation. Review policies, seek collaborative
          solutions for resolution.
        </Accordion>
        <Accordion heading={"Why should I not go to an agency directly?"}>
          Our team of experts are here to help you.
        </Accordion>
        <Accordion
          heading={
            "Who can help me pick a right skill-set and duration for me?"
          }
        >
          Our team of experts are here to help you.
        </Accordion>
      </div>
    </div>
  );
}

export default AskQuestions;
