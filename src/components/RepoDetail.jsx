import React from 'react';
import { useLocation } from 'react-router-dom';

const RepoDetail = () => {
  const location = useLocation();
  const { repo } = location.state || {}; // Destructure repo from state

  if (!repo) {
    return <div>No repo data available</div>;
  }

  return (
    <div>
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
      {/* Render more details about the repo as needed */}
    </div>
  );
};

export default RepoDetail;
