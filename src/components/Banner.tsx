export type BannerData = {
  message: string;
  state: "success" | "error";
};

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSucess = state === "success";
  const icon = isSucess ? "✅" : "❌";

  return (
    <p
      className={`p-2 ${isSucess ? "bg-green-300" : "bg-red-300"}`}
    >{`${icon} ${message}`}</p>
  );
}
