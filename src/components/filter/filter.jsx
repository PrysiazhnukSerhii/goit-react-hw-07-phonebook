import { Form, Span } from './filter.styled';

export function Filter({ serchName }) {
  return (
    <Form>
      <label>
        <Span> Find contacts by name</Span>
        <input
          type="text"
          onChange={e => {
            serchName(e.target.value);
          }}
        />
      </label>
    </Form>
  );
}
