import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import HoldTable from "../../layout/builders/ProjectHold/HoldTable";

const ProjectHold = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Hold Project"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <HoldTable />
      </Layout>
    </div>
  );
};

export default ProjectHold;
