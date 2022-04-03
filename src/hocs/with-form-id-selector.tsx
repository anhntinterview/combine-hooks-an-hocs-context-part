import React, { ComponentType, useMemo } from "react";
import { useFormContext } from "../context";

export const withFormIdSelector = <TProps extends unknown>(
  Component: ComponentType<TProps & { formId: string }>
) => {
  const MemoisedComponent = React.memo(Component) as ComponentType<
    TProps & { formId: string }
  >;

  return (props: TProps) => {
    const { id } = useFormContext();

    return <MemoisedComponent {...props} formId={id} />;
  };
};
