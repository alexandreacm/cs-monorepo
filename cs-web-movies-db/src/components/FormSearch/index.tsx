type Props = {
  handleSubmit: (event: any) => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export default function FormSearch({ handleSubmit, search, setSearch }: Props) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input
          name="search"
          type="search"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Search" className="button" />
      </form>
    </div>
  );
}
