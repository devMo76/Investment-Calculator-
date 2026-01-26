export default function UserInput({ handleSubmit }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input type="number" name="initial-investment" />
        </div>
        <div>
          <label>Annual Investment</label>
          <input type="number" name="annual-investment" />
        </div>
        <div>
          <label>Expected Return</label>
          <input type="number" name="expected-return" />
        </div>
        <div>
          <label>Duration</label>
          <input type="number" name="duration" />
        </div>
      </div>
    </div>
  );
}
