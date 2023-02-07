import { useMemo } from "react";

// High height scrollable content
export default function TallContent() {
  const dataElements = useMemo(() => {
    const genData = [];
    for (let i = 1; i <= 200; i++) {
      genData.push(<div key={i}>Line: {i}</div>);
    }
    return genData;
  }, []);

  return <>{dataElements}</>;
}
