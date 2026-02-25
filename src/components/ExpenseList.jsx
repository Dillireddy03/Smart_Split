export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0)
    return <div className="empty">No expenses added yet</div>;

  return (
    <div className="card">
      <h3>Expense History</h3>
      {expenses.map((e) => (
        <div
          key={e.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span>
            {e.paidBy} paid ₹{e.amount}
          </span>
          <button
            className="danger"
            onClick={() => onDelete(e.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}