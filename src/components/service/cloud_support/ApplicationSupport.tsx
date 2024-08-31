import React, { useEffect } from "react";
import "../ServiceBranch.css";

const ApplicationSupport: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="body ">
        <div className="header-content">
          <div className="flex-1 animate-down-to-up">
            <h1 className="font-bold">
              <b>Application Support</b>
            </h1>
            <p>Optimize performance with proactive application care</p>
          </div>
          <div className="flex-1">
            <img src="public/cloud_support/application_support/ApplicationSupport.svg" className="animate-right-to-left" />
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Key Services:</b>
            </h1>
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Application Analysis and Strategy:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b>Business Needs Assessment:</b> We conduct a thorough assessment of your business operations to identify the applications that will provide the greatest impact. <br />{" "}
              <b>Strategic Planning:</b> Based on the assessment, we create a strategic plan that outlines the most effective cloud application solutions for your business. <br />
              <b>Application Portfolio Management:</b> We help you manage and optimize your application portfolio, ensuring you get the most value from your cloud investments.
            </p>
            <br />
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Application Deployment:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b>Custom Application Setup:</b> We specialize in setting up both off-the-shelf and custom applications in the cloud, ensuring they are configured to meet your specific requirements.{" "}
              <br />
              <b>Cloud Integration:</b> We ensure seamless integration of your applications with existing systems and data sources, providing a unified and efficient workflow. <br />
              <b>Scalability and Performance Tuning:</b> Our team optimizes your applications for scalability, ensuring they can handle increased workloads as your business grows.
            </p>
          </div>
          <div className="img p-10">
            <img src="public/cloud_support/application_support/App-img1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="public/cloud_support/application_support/App-img2.jpg" />
            </div>
            <div className="content p-10">
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Ongoing Application Management:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal pb-5">
                <b>Continuous Monitoring:</b> We provide 24/7 monitoring of your cloud applications, identifying and addressing issues before they impact your operations.{" "}
                <b>Performance Optimization:</b> <br />
                Regular performance assessments and optimizations ensure your applications are always running at peak efficiency. <br />
                <b>Version Control and Updates:</b> We manage application updates and version control, ensuring your software is always up-to-date and secure.
              </p>
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Support and Troubleshooting:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b>Proactive Issue Resolution:</b>
                Our proactive support model addresses potential issues before they escalate, minimizing downtime and disruption. <br />
                <b>User Training and Support:</b> We provide training sessions and user support to help your team get the most out of your cloud applications. <br /> <b>Custom SLA Options:</b> We
                offer flexible Service Level Agreements (SLAs) tailored to meet your business’s specific needs and expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why Thay Technologies</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              <b>Expertise Across Industries:</b> Our experience spans multiple industries, allowing us to provide customized solutions that align with your industry’s unique requirements. <br />
              <b>Cutting-Edge Technology:</b> We leverage the latest cloud technologies to ensure your applications are secure, efficient, and future-proof. <br />
              <b>Client-Centric Approach:</b> Our services are tailored to your business needs, ensuring that you receive solutions that drive real business results.
            </p>

            <br />
          </div>
          <div className="img p-10">
            <img src="public/cloud_support/application_support/App-img3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationSupport;
