export function Filter() {
  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          // onChange={e => {
          //   dispatch(filterName(e.target.value));
          // }}
        />
      </label>
    </form>
  );
}
