function ChangeTime({ date }) {
  const formatedDate = date ? new Date(date)?.toLocaleDateString() : date;

  return <>{formatedDate}</>;
}

export default ChangeTime;
