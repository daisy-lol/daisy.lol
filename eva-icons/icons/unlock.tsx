import { EvaIcon, EvaProps } from "../types.d.ts";

export const Unlock: EvaIcon = (props: EvaProps) => {
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
        <g data-name="unlock">
          <rect width="24" height="24" opacity="0" />
          <circle cx="12" cy="15" r="1" />
          <path d="M17 8h-7V6a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v2H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-5 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
        </g>
      </g>
    </svg>
  );
};
