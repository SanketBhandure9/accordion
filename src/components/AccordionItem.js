const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={() => setIsOpen((flag) => !flag)}
      >
        <h3>{title}</h3>
        <span>🔽</span>
      </div>
      {isOpen && <p>{body}</p>}
    </div>
  );
};

export default AccordionItem;
