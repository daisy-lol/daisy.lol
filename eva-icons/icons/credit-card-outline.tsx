import { EvaIcon, EvaProps } from "../types.d.ts";

export const CreditCardOutline: EvaIcon = (props: EvaProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color ?? "currentColor"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...{ ...props, size: undefined, color: undefined }}
    >
      <g data-name="Layer 2">
        <g data-name="credit-card">
          <rect width="24" height="24" opacity="0" />
          <path d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16z" />
          <path d="M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2z" />
          <path d="M15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2z" />
        </g>
      </g>
    </svg>
  );
};
