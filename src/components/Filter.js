import { SearchInput } from "./Form.styled";

export const Filter = ({ filter, setFilter }) => (
  <SearchInput
    type="text"
    placeholder="Search by name"
    value={filter}
    onChange={e => setFilter(e.target.value)}
  />
);
