import React from "react";
import * as ToggleSwitch from "@radix-ui/react-switch";

export const Switch = ({
	label,
	disabled,
    defaultChecked,
    required,
}: {
	label: string;
	disabled: boolean;
    defaultChecked: boolean;
    required: boolean;
}) => {
	return (
		<div className="flex gap-8 items-center">
			<ToggleSwitch.Root
				className="w-64 h-36 rounded-[999px] bg-fg border border-stroke-2 radix-disabled:cursor-not-allowed radix-disabled:bg-fg-disabled"
                disabled={disabled}
                defaultChecked={defaultChecked}
                required={required}
			>
				<ToggleSwitch.Thumb className="block w-[28px] h-[28px] bg-white/5 radix-disabled:bg-white/[.03] rounded-[999px] transition-all ease-out duration-150 translate-x-[3px] will-change-transform radix-state-checked:translate-x-[31px] radix-state-checked:bg-brand-blue radix-disabled:radix-state-checked:bg-brand-blue/30" />
			</ToggleSwitch.Root>

			<label className="text-body text-text-1" htmlFor="c1">
				{label}
			</label>
		</div>
	);
};
