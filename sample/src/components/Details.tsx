export const Details = () => {
    return (<div>
        <div className="team-heading">
            <p className="detail-heading">Detail</p>
            <img className="edit-icon" src="./assets/edit.png" />
          </div>
          <img className="team-line" src="./assets/team-line.png" />
          <div className="team-profile">
            <div className="avatar-container"></div>
            <div className="detail-container">
              <div className="user-name">
                <p className="name-text">Lamjed Ben slama</p>
                <div className="tag">Owner</div>
              </div>
              <p className="email">lamjed.benslama@gmail.com</p>
            </div>
          </div>
          <div className="company">
            <p className="company-name">Company</p>
            <div className="company-info">
              <div className="logo-container">
                <img className="company-logo" src="./assets/BY_Squarred.png" />
              </div>
              <div className="name-container">
                <p className="company-name-text">Reclami</p>
                <p className="company-industry">SaaS</p>
              </div>
            </div>
          </div>
    </div>)
}