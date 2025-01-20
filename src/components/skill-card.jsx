const Card = ({ refer, img, per }) => {
  return (
    <>
      {refer < 4 ? (
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="skill-card">
            <img src={img} alt="" />
            <div className="shadow">
              <h1>
                <strong>{per}%</strong> <br />
                Experience
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="skill-card">
            <img src={img} alt="" />
            <div className="shadow">
              <h1>
                <strong>{per}%</strong> <br />
                Experience
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;
