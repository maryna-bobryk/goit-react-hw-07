import { DotLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  return (
    <div>
      <DotLoader
        color="#f96c00"
        size={32}
        speedMultiplier={1}
        cssOverride={{
          loading,
          display: 'block',
          margin: '20px auto',
          padding: '10px',
          borderRadius: '8px',
        }}
      />
    </div>
  );
};

export default Loader;
