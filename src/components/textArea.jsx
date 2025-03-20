// passing a prop to the component so that custom stylings can be applied to
// different use case of the component

const TextArea = ({ className }) => {
  return <textarea className={`text-area ${className}`} placeholder="Describe the problem you are facing..."></textarea>;
};

export default TextArea;
