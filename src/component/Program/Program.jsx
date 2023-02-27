import React, { useState } from 'react';
import './Program.css'
import { useNavigate } from 'react-router-dom';


const Program = () => {
  const navigate = useNavigate();

  const gotoPrograms = () => {
    navigate('/Program')
  }
  const gotoLeaderBoard = () => {
    navigate('/ProgramLeaderBoard')
  }




  const [featureFilters, setfeatureFilters] = useState({
    MBB: false,
    LRT: false,
    OCT: false,
    SP: false,
    OB: false,
    VDP: false,
    OR: false,
  });
  const [assetFilters, setAssetFilters] = useState({
    All: false,
    Domains: false,
    Networks: false,
    Android: false,
    iOS: false,
    Hardware: false,
    IoT: false,
    Executable: false,
    SourceCodeReview: false,
    Windows: false,
    ActiveDirectory: false,
  });

  const handleFeatureFilterChange = (event) => {
    setfeatureFilters({
      ...featureFilters,
      [event.target.name]: event.target.checked
    });
  };
  const handleAssetFilterChange = (event) => {
    setAssetFilters({
      ...assetFilters,
      [event.target.name]: event.target.checked
    });
  };
  const Programs = [{
    id: 1,
    feature: "Manged by Buggify",
    assetType: "All",
  },]

  let filteredPrograms = Programs;
  if (featureFilters.MBB) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.feature === "Managed by Buggify"
    );
  }
  if (featureFilters.LRT) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.feature === "Less Response Time"
    );
  }
  if (featureFilters.OCT) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.feature === "Offer Collabarative"
    );
  }
  if (featureFilters.SP) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.feature === "Sustainable Program"
    );
  }
  if (featureFilters.OB) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.feature === "Offer Bounty"
    );
  }
  if (featureFilters.VDP) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.feature === "Vulnerability Discloure Programs"
    );
  }
  if (featureFilters.OR) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.feature === "Offer Restesting"
    );
  }
  if (assetFilters.All) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.assetType === "All"
    );
  }
  if (assetFilters.Domains) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.assetType === "Domains"
    );
  }
  if (assetFilters.Networks) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.assetType === "Networks"
    );
  }
  if (assetFilters.Android) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.assetType === "Android"
    );
  }
  if (assetFilters.iOS) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.assetType === "iOS"
    );
  }
  if (assetFilters.Hardware) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.assetType === "Hardware"
    );
  }
  if (assetFilters.IoT) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.assetType === "IoT"
    );
  }
  if (assetFilters.Executable) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.assetType === "Executable"
    );
  }
  if (assetFilters.SourceCodeReview) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.assetType === "Source Code Review"
    );
  }
  if (assetFilters.Windows) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.assetType === "Windows"
    );
  }
  if (assetFilters.ActiveDirectory) {
    filteredPrograms = filteredPrograms.filter(
      (program) => program.assetType === "Active Directory"
    );
  }



  return (
    <>
      <div className='program'>
        <nav className='program-nav'>
          <ul className='program-nav-ul'>
            <li className='program-nav-ul-li list-selected' onClick={gotoPrograms}>
              Programs
            </li>
            <li className='program-nav-ul-li' onClick={gotoLeaderBoard}>
              Leaderboard
            </li>

          </ul>
        </nav>

        <div className="courses-div">
          <div className='filter-div'>
            <div className="level-filter">
              <div className="col-md-3 filter-box1">
                <h5 className="level-filter-h">Feature:  </h5>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="MBB"
                    id="MBB"
                    checked={featureFilters.MBB}
                    onChange={handleFeatureFilterChange}
                  />
                  <label className="form-check-label" for="MBB">Managed by Buggify</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="LRT"
                    id="LRT"
                    checked={featureFilters.LRT}
                    onChange={handleFeatureFilterChange}
                  />
                  <label className="form-check-label" for="MBB">Managed by Buggify</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="LRT"
                    id="LRT"
                    checked={featureFilters.LRT}
                    onChange={handleFeatureFilterChange}
                  />
                  <label className="form-check-label" for="MBB">Managed by Buggify</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="LRT"
                    id="LRT"
                    checked={featureFilters.LRT}
                    onChange={handleFeatureFilterChange}
                  />
                  <label className="form-check-label" for="MBB">Managed by Buggify</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="OB"
                    id="OB"
                    checked={featureFilters.OB}
                    onChange={handleFeatureFilterChange}
                  />
                  <label className="form-check-label" for="OB">Offer Bounty</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="VDP"
                    id="VDP"
                    checked={featureFilters.VDP}
                    onChange={handleFeatureFilterChange}
                  />
                  <label className="form-check-label" for="VDP">Vulnerability Discloure Programs</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="OR"
                    id="Or"
                    checked={featureFilters.OR}
                    onChange={handleFeatureFilterChange}
                  />
                  <label className="form-check-label" for="Or">Offer Restesting</label>
                </div>


              </div>
            </div>
            <div className="category-filter col-3">
              <h5 className="category-filter-h" for="myCheckbox">Asset Type: </h5>



              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="All"
                  id="All"
                  checked={assetFilters.All}
                  onChange={handleAssetFilterChange}
                />
                <label className="form-check-label" for="All">All</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="Domains"
                  id="Domains"
                  checked={assetFilters.Domains}
                  onChange={handleAssetFilterChange}
                />
                <label className="form-check-label" for="Domains">Domains</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="Networks"
                  id="Networks"
                  checked={assetFilters.Networks}
                  onChange={handleAssetFilterChange}
                />
                <label className="form-check-label" for="Networks">Networks</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="Android"
                  id="Android"
                  checked={assetFilters.Android}
                  onChange={handleAssetFilterChange}
                />
                <label className="form-check-label" for="Android">Android</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="iOS"
                  id="ios"
                  checked={assetFilters.iOS}
                  onChange={handleAssetFilterChange}
                />
                <label className="form-check-label" for="ios">iOS</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="Hardware"
                  id="Hardware"
                  checked={assetFilters.Hardware}
                  onChange={handleAssetFilterChange}
                />
                <label className="form-check-label" for="Hardware">Hardware</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="IoT"
                  id="IoT"
                  checked={assetFilters.IoT}
                  onChange={handleAssetFilterChange}
                />
                <label className="form-check-label" for="IoT">IoT</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="Executable"
                  id="Executable"
                  checked={assetFilters.Executable}
                  onChange={handleAssetFilterChange}
                />
                <label className="form-check-label" for="Executable">Executable</label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="SourceCodeReview"
                  id="SCR"
                  checked={assetFilters.SourceCodeReview}
                  onChange={handleAssetFilterChange}
                />
                <label className="form-check-label" for="SCR">Source Code Review</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="Windows"
                  id="Windows"
                  checked={assetFilters.Windows}
                  onChange={handleAssetFilterChange}
                />
                <label className="form-check-label" for="Windows">Windows</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="ActiveDirectory"
                  id="ActiveDirectory"
                  checked={assetFilters.ActiveDirectory}
                  onChange={handleAssetFilterChange}
                />
                <label className="form-check-label" for="ActiveDirectory">Active Directory</label>
              </div>



            </div>
          </div>

        </div>

      </div>


    </>
  )
}

export default Program;

