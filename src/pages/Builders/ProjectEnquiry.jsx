import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import ProjectEnquiryTile from "../../layout/builders/ProjectEnquiry/ProjectEnquiryTile";

const ProjectEnquiry = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Project Enquiry"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <ProjectEnquiryTile />
      </Layout>
    </div>
  );
};

export default ProjectEnquiry;
