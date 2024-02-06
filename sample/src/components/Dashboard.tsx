export const Dashboard = () => {
  return (
    <div>
      <p className="settings-heading">Settings</p>
      <div className="menu">
        <div className="menu-item">
          <p className="item-personal-details">Personal Details</p>
          <p className="item-subscription">Subscription</p>
        </div>
        <div className="menu-item">
          <div className="account-item">Account</div>
        </div>
      </div>
      <div className="dashboard-card">
        <div className="card-header">
          <div className="group">
            <div className="group-inner">
              <img className="avatar" src="./assets/BY.png" />
            </div>
            <div className="oval"></div>
            <img className="group-icon" src="./assets/group.png" />
          </div>
          <form>
            <div>
              <label></label>
              <input
                type="text"
                id="website"
                name="website"
                className="search-bar"
                placeholder="Enter website"
              />
            </div>
            <div>
              <label></label>
              <input
                type="text"
                id="color"
                name="color"
                className="search-bar"
                placeholder="Enter base color"
              />
            </div>
            <div className="update-account">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
