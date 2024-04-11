const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
});

const Currency = ({ value = 0 }) => {
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};
export default Currency;
