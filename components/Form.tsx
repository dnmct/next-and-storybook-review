import { Input } from "./Input";

interface Props {
  title: string;
}
export const Form = ({ title }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Input title="Title" type="text" id="title" />
          <Input title="Private" type="checkbox" id="private" />
        </div>
        <Input
          title="Timeslot"
          type="select"
          id="timeslots"
          options={[
            "08:00 - 09:00",
            "09:00 - 10:00",
            "10:00 - 11:00",
            "11:00 - 12:00",
            "12:00 - 13:00",
          ]}
        />
      </form>
    </>
  );
};
