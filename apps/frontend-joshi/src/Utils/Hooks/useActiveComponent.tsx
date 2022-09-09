import { useEffect, useState } from "react";

export function useActiveComponent(componentName?: string) {
  const [RenderComp, setRenderComp] = useState("welcomePage");

  useEffect(() => {
    if (componentName) {
      setRenderComp(componentName);
    }
  }, [componentName]);

  return RenderComp;
}
