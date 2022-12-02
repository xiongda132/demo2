export default () => {
  return (
    <>
      <div className="top">
        <div className="son">a</div>
      </div>
      <style jsx="true">{`
        .top {
          width: 100px;
          height: 100px;
          background-color: pink;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
        }

        .son {
          position: absolute;
          right: 0px;
        }
      `}</style>
    </>
  );
};
