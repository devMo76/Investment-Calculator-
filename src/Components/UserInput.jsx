export default function UserInput({ userInput, onChange }) {
  return (
    <form>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label>Initial Investment</label>
            <input
              type="number"
              name="initialInvestment"
              value={userInput.initialInvestment}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Annual Investment</label>
            <input
              type="number"
              name="annualInvestment"
              value={userInput.annualInvestment}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Expected Return</label>
            <input
              type="number"
              name="expectedReturn"
              value={userInput.expectedReturn}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Duration</label>
            <input
              type="number"
              name="duration"
              value={userInput.duration}
              onChange={onChange}
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
}
