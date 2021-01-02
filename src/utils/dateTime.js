export default function convertToDAte(params) {
  const timestamp = params; // This would be the timestamp you want to format

  console.log(
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(timestamp)
  );
}

export default function convertToTime(params) {
  const timestamp = params; // This would be the timestamp you want to format

  console.log(
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(timestamp)
  );
}
