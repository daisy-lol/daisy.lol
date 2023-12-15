import { EvaIcon, EvaProps } from "../types.d.ts";

export const ToggleLeft: EvaIcon = (props: EvaProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill={props.color ?? "currentColor"}
      stroke="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...{ ...props, size: undefined, color: undefined }}
    >
      <g data-name="Layer 2">
        <g data-name="toggle-left">
          <rect
            x=".02"
            y=".02"
            width="23.97"
            height="23.97"
            transform="rotate(179.92 12.002 11.998)"
            opacity="0"
          />
          <path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zM9 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
          <path d="M9 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </g>
      </g>
    </svg>
  );
};
