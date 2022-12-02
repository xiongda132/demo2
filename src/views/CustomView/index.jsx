export default () => {
  const length = 30000;
  return (
    <>
      <ul>
        {Array(length)
          .fill(0)
          .map((_, index) => (
            <li key={index}>{index}</li>
          ))}
      </ul>
    </>
  );
};
