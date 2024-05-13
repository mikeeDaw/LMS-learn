interface Props {
  message?: string;
}

const FormErr: React.FC<Props> = ({ message }) => {
  if (!message) return null;

  return (
    <>
      <div className="w-full bg-red-400">Error</div>
    </>
  );
};

export default FormErr;
