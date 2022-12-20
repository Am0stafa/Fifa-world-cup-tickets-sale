import React from "react";

const BookCard = ({ user }) => {
  return (
    <div className="user-card-a">
      <div style={{ display: "flex", marginLeft: "4em" }}>
        <img
          className="avatar"
          src={`/assets/${user.homeTeam}.png`}
          alt={user.homeTeam}
        />

        <img
          className="avatar"
          src={`/assets/${user.awayTeam}.png`}
          alt={user.awayTeam}
        />
      </div>

      <div>
        <h3>
          {user.homeTeam} vs {user.awayTeam}
        </h3>
      </div>

      <div style={{ display: "flex" }}>
        <img
          alt=""
          src="/assets/calendar.svg"
          style={{ height: "40px", width: "40px" }}
        />

        <span style={{ margin: "0.5em" }}></span>

        <h3>{user.Date}</h3>
      </div>
      <span style={{ margin: "1em" }}></span>
      <div style={{ display: "flex" }}>
        <img
          alt=""
          src="/assets/stadium.svg"
          style={{ height: "40px", width: "40px" }}
        />
        <span style={{ margin: "0.5em" }}></span>
        <h3>{user.location} </h3>
      </div>
      <span style={{ margin: "1em" }}></span>
      {/* <p>
          Score: {user.homeTeamScore} - {user.awayTeamScore}
        </p> */}
    </div>
  );
};
export default BookCard;
