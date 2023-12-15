import { EvaIcon, EvaProps } from "../types.d.ts";

export const PersonRemove: EvaIcon = (props: EvaProps) => {
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
        <g data-name="person-remove">
          <rect width="24" height="24" opacity="0" />
          <path d="M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" />
          <path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
          <path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1" />
        </g>
      </g>
    </svg>
  );
};